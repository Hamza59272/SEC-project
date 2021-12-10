import { Link } from "react-router-dom"

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3rem' }}>
                <div style={{ color: 'red', marginLeft: '8rem',fontSize: '2rem' }}>
                    Main Menu
                </div>
                <div style={{ background: 'red', padding: 10, width: 100, textAlign: 'center', color: 'white', marginRight: '8rem',fontSize: '1.7rem' }}>
                    Chat
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5rem' }}>
                <div style={{ background: 'red', color: 'white', padding: '.5rem', width: '15rem', cursor: 'pointer', fontSize: '1.4rem', textAlign: 'center', marginTop: '1.5rem'  }}>
                    View AR
                </div>
                <Link to='available-organs' style={{ background: 'red', textDecoration: 'none', cursor: 'pointer', color: 'white', padding: '.5rem', width: '15rem', fontSize: '1.4rem', textAlign: 'center', marginTop: '1.5rem'  }}>
                    Available Organs
                </Link>
                <div style={{ background: 'red', color: 'white', padding: '.5rem', width: '15rem', cursor: 'pointer', fontSize: '1.4rem', textAlign: 'center', marginTop: '1.5rem'  }}>
                    Take Course
                </div>
                <div style={{ background: 'red', color: 'white', padding: '.5rem', width: '15rem', cursor: 'pointer', fontSize: '1.4rem', textAlign: 'center', marginTop: '1.5rem'  }}>
                    Help & Feedback
                </div>
            </div>
        </div>
    )
}

export default Home
