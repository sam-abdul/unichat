import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Styles.module.css'
import logo from '../assests/assests/mainL.png'
import bg from '../assests/assests/unichatBg.png'

const Navbar = () => {
    return ( 
        <div className={styles.navbar}>
        <style jsx global>{`
            body {
                margin:0;
            }
        `}</style>
         <Link href='/home'>
         <div className={styles.navbar_child}>
          <Image src={logo} alt='logo' id={styles.logo} width='30px' height='30px' />
            UniChat
           </div>
         </Link>

          <Link href='/'>
          <div className={styles.navbar_child1}>
            <button>Get Started</button>
          </div>
          </Link>
        </div>
     );
}
 
export default Navbar;