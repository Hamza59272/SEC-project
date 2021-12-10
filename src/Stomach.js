import { collection, getDocs, query, where } from '@firebase/firestore';
import React, { useState } from 'react'
import Video from './components/Video'
import { db } from './firebase';

function Stomach() {
    const [isOpen, setIsOpen] = useState(false);
    const [url, setUrl] = useState();

    const displayVideo = async (val) => {
        try {
            const organsRef = query(collection(db, "organs"), where("type", "==", 'stomach'));

            const querySnapshot = await getDocs(organsRef);

            let data;

            querySnapshot.forEach((doc) => {
                data = doc.data()
            });

            setUrl(data[`video${val}`]);
            setIsOpen(true)
        } catch (err) {
            alert(err)
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3rem' }}>
                <div style={{ color: 'red', fontWeight: 'bold', marginLeft: '8rem', fontSize: '2.5rem' }}>
                    Stomach
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5rem' }}>
                <div onClick={() => displayVideo(1)} style={{ background: 'red', cursor: 'pointer', textDecoration: 'none', color: 'white', padding: '.5rem', width: '15rem', fontSize: '1.4rem', textAlign: 'center', marginTop: '1.5rem'  }}>
                    Functionality
                </div>
                <div onClick={() => displayVideo(2)} style={{ background: 'red', cursor: 'pointer', textDecoration: 'none', color: 'white', padding: '.5rem', width: '15rem', fontSize: '1.4rem', textAlign: 'center', marginTop: '1.5rem'  }}>
                    Disease
                </div>
            </div>
            <Video isOpen={isOpen} setOpen={setIsOpen} url={url} />
        </div>
    )
}

export default Stomach
