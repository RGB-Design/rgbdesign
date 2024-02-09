import { useEffect, useState } from 'react';
import {
    Grid,
    Box
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

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
                    <Grid key={idx} item xs={12} md={6} lg={4} className={styles.info_container}>
                        <ProjectBox title={p.title} img_src={"/images/" + p.img_src}/>
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
                        <h1 className={styles.big_title}>ROBOTICS.</h1>
                    </div>
                </section>

                <section className={styles.about_section}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={6} lg={6} className={styles.info_container}>
                            <h3>ABOUT RGB DESIGN</h3>
                            <h2>A FORWARD-THINKING CRAFTSMAN, TRAILBLAZING INTELLECT, AND BUILDER OF THE FUTURE, HARMONIZING DESIGN, NATURE, AND ALGORITHMS.</h2>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} className={styles.info_container + ' ' + styles.para}>
                            <p>Our startup is a fusion of technology, nature, and design, committed to pioneering innovative solutions across industries. We blend the complexity of nature, the precision of algorithms, and the creativity of design to address global challenges sustainably and efficiently. Our approach is to harness these elements to innovate in fields such as architecture and healthcare, aiming to enhance sustainability, functionality, and beauty in our surroundings.</p>
                            {/* <p>We strive to lead by inspiration, pushing the boundaries of what's possible through cutting-edge research and the application of artificial intelligence. Our work includes developing biomimetic designs and algorithms for smarter urban planning. By fostering a community of forward-thinkers and innovators, we envision a future where technology and nature coalesce, paving the way for a world that values creativity, efficiency, and environmental harmony.</p> */}
                        </Grid>
                    </Grid>
                </section>

                <section className={styles.work_section}>
                    <h1 className={styles.title}>WORKS</h1>

                    <Grid 
                        container 
                        spacing={5}
                    >
                        {renderProjectGrid(projects)}
                    </Grid>
                    

                </section>

                

            </section>
            
        </>
    )
}