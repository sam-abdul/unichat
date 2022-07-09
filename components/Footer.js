import styles from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "../assests/assests/mainL.png";
import Linkedin from "../assests/linkedin.png";
import Website from "../assests/website.png";
import Twitter from "../assests/twitter.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
   
      <div className={styles.footer}>
     
        <Image src={Logo} height={40} width={40} />
        <div className={styles.footer_text}> Sam Abdul</div>
        <div className={styles.social}>
            <div className={styles.social_icon}>
                <Link href='https://www.samspace.dev/'>
                <Image src={Website} height={30} width={30} />
                </Link>
            </div>
            <div className={styles.social_icon}>
                <Link href='https://www.linkedin.com/in/sam-abdul-6b5875196/'>
                <Image src={Linkedin} height={30} width={30} />
                </Link>
            </div>
            <div className={styles.social_icon}>
                <Link href='https://twitter.com/SamAbdul_'>
                <Image src={Twitter} height={30} width={30} />
                </Link>
            </div>
          
        </div>
        <div className={styles.social_icon}>
                <Link href='https://github.com/sam-abdul'>
               <p> https://github.com/sam-abdul</p>
                </Link>
            </div>
      </div>
    </>
  );
};

export default Footer;
