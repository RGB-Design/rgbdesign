import Image from 'next/image';
import Link from 'next/link';

import LinkedinLogo from '@/public/images/linkedin-logo.svg';

import styles from '@/styles/ProjectBox.module.scss';

export default function ProjectBox(props) {
    let public_url = ''
    if(process.env.NODE_ENV == 'production') {
        public_url = 'rgbdesign'
    }

    return (
        <Link href={'projects'}>
            <div className={styles.project_box_section}>
                <div className={styles.background}>
                    <Image src={`${public_url}${props.img_src}`} width="100" height="180"/>
                </div>
                <div className={styles.overlay}>
                    <h2>{props.title}</h2>
                    {/* <p>hi hjhfg</p> */}
                </div>
                {/* <Link href={props.linkedinProfileLink} target='_blank'>
                    <Image 
                        className={styles.profile_image}
                        src={props.imgSrc} 
                        alt={"Profile Image: " + props.name}
                    />
                </Link>
                <h2>{props.name}</h2>
                <h3>{props.designation}</h3>
                <Link href={props.linkedinProfileLink} target='_blank'>
                    <Image 
                        className={styles.social_profile_image}
                        src={LinkedinLogo}
                        alt="Linkedin Logo"    
                    />
                </Link> */}
            </div>
        </Link>
    )
}
