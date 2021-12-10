import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { db } from "./firebase";
import { collection, getDocs, onSnapshot, query, orderBy, startAt, endAt } from "firebase/firestore";

function AvailableOrgans() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState();
    const [searchOrgansText, setSearchOrgansText] = useState('');
    const [searchOrgans, setSearchOrgans] = useState([]);
    const [organs, setOrgans] = useState([]);

    const handleChange = e => {
        setSelected(e.target.value);
        navigate(e.target.value)
    };

    const handleSearch = e => {
        setSearchOrgansText(e.target.value);

        if (e.target.value === '') {
            setSearchOrgans([]);
            return;
        }

        const organsRef = query(collection(db, "organs"), orderBy('type'), startAt(e.target.value), endAt(e.target.value+"\uf8ff"));

        onSnapshot(organsRef, (querySnapshot) => {
            const organs = [];
            querySnapshot.forEach((doc) => {
                organs.push({
                    id: doc.id,
                    type: doc.data().type
                });
            });
            
            setSearchOrgans(organs);
        });
    };

    useEffect(() => {
        (async () => {
            try {
                let transformArray = [];

                const organsRef = collection(db, "organs");

                const querySnapshot = await getDocs(organsRef);

                querySnapshot.forEach((doc) => {
                    const { type } = doc.data();

                    transformArray.push({
                        id: doc.id,
                        type
                    });
                });

                setOrgans(transformArray);
            } catch (err) {
                alert(err.message)
            }
        })();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3rem' }}>
                <div style={{ color: 'red', fontWeight: 'bold', marginLeft: '8rem', fontSize: '2.5rem' }}>
                    Available Organs
                </div>
            </div>
            <input value={searchOrgansText} onChange={handleSearch} style={{ width: '12rem', height: '1.5rem', alignSelf: 'center', marginTop: '3rem', marginBottom: '1rem' }} />
            {   
                searchOrgans.map(e => (
                    <div key={e.id} onClick={() => navigate(e.type)}  style={{ width: '12rem', cursor: 'pointer', alignSelf: 'center', background: 'black', color: 'white', marginTop: '.4rem', padding: 10 }}>{e.type}</div>
                ))
            }
            <select value={selected} onChange={handleChange} style={{ width: '12rem', alignSelf: 'center', marginTop: '2rem' }}>
                <option value="">Choose Organ</option>
                {
                    organs.map(e => (
                        <option key={e.id} value={e.type}>{e.type}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default AvailableOrgans
