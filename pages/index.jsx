import { useEffect, useState } from 'react';
import {
    Grid,
    Box
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import EastIcon from '@mui/icons-material/East';

import TextBox from '@/components/TextBox';
import SDFAnimation from '@/components/SDFAnimation';

import styles from '@/styles/Home.module.scss';
import ProjectBox from '@/components/ProjectBox';

import project_json from '../public/projects.json';

export default function Home() {

    const [projects, setProjects] = useState(undefined);

    useEffect(() => {
        setProjects(project_json['projects_list'])
    }, [])

    function renderProjectGrid(projects) {
        if(projects) {
            let res = []

            projects.forEach((p, idx) => {
                res.push(
                    <Grid key={idx} item xs={12} md={6} lg={6} className={styles.info_container}>
                        <ProjectBox title={p.title} img_src={"/images/projects/" + p.img_src}/>
                    </Grid>
                )
            })

            return res
        }
    }

    return (
        <>
        
            <section className={styles.home_section}>
                
                <section className={styles.hero_section}>

                    <SDFAnimation className={styles.sdf_animation} />
                    <div className={styles.hero_overlay}>
                        <h1 className={styles.big_title}>INNOVATION.</h1>
                        <h1 className={styles.big_title}>RESEARCH.</h1>
                        <h1 className={styles.big_title}>DESIGN.</h1>
                    </div>
                </section>

                <section className={styles.about_section}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={6} lg={6} className={styles.info_container}>
                            <h3>RGB DESIGN</h3>
                            <h2>WHERE DESIGN, TECH, AND NATURE CONVERGE. INNOVATING SUSTAINABLE, STRIKING FUTURES.</h2>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, marginRight: 0 }}
                            >
                                <Link href="/about" style={{color: '#ffffff'}}>
                                    <EastIcon />
                                </Link>
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} className={styles.info_container + ' ' + styles.para}>
                            <p>At RGB Design, we merge Design and Technology with 
                                <br/>Natural Intelligence and Computational innovation to
                                <br/>creatively tackle design challenges.
                                </p>
                                <p>
                                    <span className="highlight_green"><b>Our mission:</b> to blend form and function, delivering sustainable, technologically forward, and visually striking design solutions.</span> We're driven to inspire change and progress, crafting designs that impact both society and the environment positively.
                                </p>
                                <p>Welcome to the future of design!</p>
                            {/* <p>We strive to lead by inspiration, pushing the boundaries of what's possible through cutting-edge research and the application of artificial intelligence. Our work includes developing biomimetic designs and algorithms for smarter urban planning. By fostering a community of forward-thinkers and innovators, we envision a future where technology and nature coalesce, paving the way for a world that values creativity, efficiency, and environmental harmony.</p> */}
                        </Grid>
                    </Grid>
                </section>

                <section className={styles.work_section}>
                    <div className={styles.title_container}>
                        <h1 className={styles.title}>EXPLORE OUR WORK</h1>
                    </div>

                    <Grid 
                        container 
                        spacing={2}
                        rowSpacing={0}
                    >
                        {renderProjectGrid(projects)}
                    </Grid>
                    

                </section>

                

            </section>
            
        </>
    )
}