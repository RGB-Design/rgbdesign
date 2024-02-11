import Image from 'next/image';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import LinkedinLogo from '../public/images/linkedin-logo.svg';
import RGBLogo from '../public/images/logo_.svg';

import styles from '@/styles/Header.module.scss';

export default function Header() {

    function renderLogo(className) {
        return (
            <Link className={className} href="/">
                {/* <Image
                    priority
                    src={''}
                    alt="Soket Labs Logo"
                /> */}
            </Link>
        )
    }

    return (
        <nav className={styles.header_container}>
            <AppBar 
                sx={{
                    backgroundColor: '#000000af'
                }}
                position="static"
            >
                <Toolbar>
                    <Image className={styles.logo} src={RGBLogo} alt="RGB Design Logo" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
            {/* <ul>
                <Link href="/">
                    <li>HOME</li>
                </Link>
                <Link href="/documents/cv.pdf">
                    <li>ABOUT</li>
                </Link>
                <Link href="/documents/portfolio.pdf">
                    <li>PORTFOLIO</li>
                </Link>
                <Link href="/projects">
                    <li>PROJECTS</li>
                </Link>
                <Link href="/contact">
                    <li>CONTACT</li>
                </Link>
            </ul>
            <div className={styles.social_container}>
                <Link href="https://www.linkedin.com/in/mehakbakshi" target="_blank">
                    <Image
                        priority
                        src={LinkedinLogo}
                        alt="Linkedin Logo"
                    />
                </Link>
            </div> */}
        </nav>
    )
}