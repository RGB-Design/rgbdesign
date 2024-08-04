import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedinLogo from '../public/images/linkedin-logo.svg';
import RGBLogo from '../public/images/logo_.svg';

import styles from '@/styles/Header.module.scss';

export default function Header() {

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    function renderLogo(className) {
        return (
            <Link className={className} href="/">
                <Image
                    priority
                    className={styles.logo} 
                    src={RGBLogo} 
                    alt="RGB Design Logo"
                />
            </Link>
        )
    }

    function renderLinkMenu() {
        let st = {}
        if(!isMobile) {
            st = {display: 'flex'}
        }
        return (
            <ul style={st}>
                <Link href="/" onClick={toggleDrawer(false)}>
                    <li>HOME</li>
                </Link>
                <Link href="/about" onClick={toggleDrawer(false)}>
                    <li>ABOUT</li>
                </Link>
                {/* <Link href="/documents/portfolio.pdf">
                    <li>PORTFOLIO</li>
                </Link> */}
                <Link href="/works" onClick={toggleDrawer(false)}>
                    <li>WORK</li>
                </Link>
                <Link href="/contact" onClick={toggleDrawer(false)}>
                    <li>CONTACT</li>
                </Link>
                <Link style={{display: 'flex', alignItems: 'center'}} href="https://www.instagram.com/rgb.designresearch" onClick={toggleDrawer(false)}>
                    <InstagramIcon/>
                </Link>
            </ul>
        )
    }

    function renderDesktop() {
        return (
            <Typography className={styles.navLinks} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {renderLinkMenu()}
            </Typography>
        )
    }

    function renderMobile() {
        return (
            <div style={{width: '100%'}} className={styles.navLinks}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, marginRight: 0 }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                    <div className={styles.drawerMenuContainer}>
                        {renderLinkMenu()}
                    </div>
                </Drawer>
            </div>
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
                    {renderLogo()}
                    {isMobile ? renderMobile() : renderDesktop()}
                    {/* <Image className={styles.logo} src={RGBLogo} alt="RGB Design Logo" /> */}
                    
                    
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