import pho1 from '../assets/palak.jpg';
import pho2 from '../assets/ketan.jpg';
import pho3 from '../assets/ishwari.jpg';
import pho4 from '../assets/hashim.jpg';
import pho5 from '../assets/alisha.jpg';


const About = () => {
    return (
        <>
            <main className=" h-[130vh] flex justify-center items-center flex-wrap gap-[100px] px-[60px] py-[10px]">
                <div className="card " style={styles.card}>
                    <div className="imgBx" style={imgBx}>
                        <img src={pho1} />
                    </div>
                    <div className="content" style={content}>
                        <div className="details" style={contentdetails}>
                            <h2>Palak Agrawal</h2>
                            <span>Frontend Developer</span>
                            <div className="actionBtn" style={actionBtn}>
                                <button style={btn} onClick={() => {
                                    const instagramUrl = 'https://www.instagram.com/p_a_l_a_k.28/';
                                    window.open(instagramUrl, '_blank');
                                }}>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={styles.card}>
                    <div className="imgBx" style={imgBx}>
                        <img src={pho2} />
                    </div>
                    <div className="content" style={content}>
                        <div className="details" style={contentdetails}>
                            <h2>Ketan Bajaj</h2>
                            <span>Backend(Django) Developer</span>
                            <div className="actionBtn" style={actionBtn}>
                                <button style={btn} onClick={() => {
                                    const instagramUrl = 'https://www.instagram.com/ketan_._8/';
                                    window.open(instagramUrl, '_blank');
                                }}>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={styles.card}>
                    <div className="imgBx" style={imgBx}>
                        <img src={pho3} />
                    </div>
                    <div className="content" style={content}>
                        <div className="details" style={contentdetails}>
                            <h2>Ishwari Basale</h2>
                            <span>Frontend Developer</span>
                            <div className="actionBtn" style={actionBtn}>
                                <button style={btn} onClick={() => {
                                    const instagramUrl = 'https://www.instagram.com/ishwaribasale/';
                                    window.open(instagramUrl, '_blank');
                                }}>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={styles.card}>
                    <div className="imgBx" style={imgBx}>
                        <img src={pho4} />
                    </div>
                    <div className="content" style={content}>
                        <div className="details" style={contentdetails}>
                            <h2>Hashim Babat</h2>
                            <span>Frontend Developer</span>
                            <div className="actionBtn" style={actionBtn}>
                                <button style={btn} onClick={() => {
                                    const instagramUrl = 'https://www.instagram.com/hashim_babat_/';
                                    window.open(instagramUrl, '_blank');
                                }}>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={styles.card}>
                    <div className="imgBx" style={imgBx}>
                        <img src={pho5} />
                    </div>
                    <div className="content" style={content}>
                        <div className="details" style={contentdetails}>
                            <h2>Alisha Shaikh</h2>
                            <span>Data Analyst</span>
                            <div className="actionBtn" style={actionBtn}>
                                <button style={btn} onClick={() => {
                                    const instagramUrl = 'https://www.instagram.com/_a_l_i_s_h_a_.s/';
                                    window.open(instagramUrl, '_blank');
                                }}>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

const styles = {
    card: {
        position: 'relative',
        width: '283px',
        height: '330px',
        background: '#fff',
        borderRadius: '30px',
        transition: '0.5s',
        border: 'solid 1px #7558E6',
    },
};
const imgBx = {
    position: 'absolute',
    left: '50%',
    top: '10px',
    transform: 'translateX(-50%)',
    width: '150px',
    height: '150px',
    borderRadius: '20px',
    boxShadow: '20px',
    boxShadow: '0 1px 15px #7558E6',
    overflow: 'hidden',
    transition: '0.5s',
    outline: 'none',

}

const content = {
    position: 'absoulte',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex',
    overflow: 'hidden',
}

const contentdetails = {
    padding: '40px',
    textAlign: 'center',
    width: '100%',
    transition: '0.5s',
    transform: 'translateY(150px)',
    marginBottom: '20px',
}

const actionBtn = {
    display: 'flex',
    justifyContent: 'center',
    /* gap: 20/x; */
    transform: 'translateY(20px)',
}

const btn = {
    /* padding: 10px 30px; */
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    fontSize: '1em',
    fontWeight: '500',
    background: '#ff5f95',
    color: '#fff',
    cursor: 'pointer',
    padding: '7px 15px',
}
export default About;

