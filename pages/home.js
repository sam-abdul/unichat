import Navbar from "../components/Navbar";
import styles from '../styles/Styles.module.css'
import logo from '../assests/assests/mainL.png'
import ios from '../assests/assests/ios.png'
import android from '../assests/assests/Andriod.png'
import Image from 'next/image'
import earth from '../assests/assests/earth.png'
import fast from '../assests/assests/fast.png'
import security from '../assests/assests/security.png'
import Link from 'next/link'
import Footer from "../components/Footer";


const Home = () => {

    return (
        <div>
            <title>{'UniChat'}</title>
            <Navbar />
            <div className={styles.home_bg} >
                <div className={styles.welcome}>
                    <div>
                        <h1>WELCOME TO</h1>
                        <div style={{display: 'flex', alignItems: 'center'}} className={styles.space}>
                            <div className={styles.body_icon}>
                                <Image src={logo} />     
                            </div>
                            <span className={styles.welcomeS}>UniChat</span>
                        </div>
                        <div className={styles.center}><Link href='/' ><button>Get Started</button></Link></div>
                    </div>
                </div>
                <div className={styles.device_style}>
                    <div className={styles.android_style}>
                         <Image src={android} alt='android'/>
                    </div>
                    <div className={styles.ios_style}>
                        <Image src={ios} alt='ios' />
                    </div>
                </div>
            </div>
            <div className={styles.unichatB} >
                <div className={styles.about} >
                    <p>UniChat is an end to end encrypted chat app 
                        where anyone from anywhere can connnect and 
                        chat on a single page to share similar 
                        conversation going on in the world
                    </p>
                </div>
                <div className={styles.about_icon}>
                    <div className={styles.icon}>
                        <Image src={earth} alt='earth' />
                    </div>
                    <div className={styles.icon}>
                        <Image src={fast} alt='earth' />
                    </div>
                    <div className={styles.icon}>
                        <Image src={security} alt='earth' />
                    </div>
                </div>
                <div className={styles.dev}>
                (A collaborated project)
            </div>
            </div>
           
           <Footer/>
        </div>
    );
}

export default Home;