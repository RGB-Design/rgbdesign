import {
    Grid
} from '@mui/material';

import TextBox from '@/components/TextBox';
import WorksBox from '@/components/WorksBox';

import materialLogo from '@/public/images/icons/material.svg';
import computationLogo from '@/public/images/icons/computation.svg';
import intelligenceLogo from '@/public/images/icons/natural_intelligence.svg';

import styles from '@/styles/About.module.scss';

export default function About() {
    return (
        <section className={styles.works_container}>
            <Grid container>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox 
                        title={'Material Experiments'}
                        img_src={materialLogo}
                        style={'red'}
                    />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox 
                        title={'Computational Design'}
                        img_src={computationLogo}
                        style={'green'}
                    />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox 
                        title={'Interiors & Furniture Design'}
                        img_src={intelligenceLogo}
                        style={'blue'}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
            </Grid>
            {/* <Grid container>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox 
                        title={'Material Innovation'}
                        img_src={materialLogo}
                        style={'red'}
                    />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
            </Grid>
            <Grid container>
            <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox 
                        title={'Computation Innovation'}
                        img_src={computationLogo}
                        style={'green'}
                    />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox/>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <WorksBox 
                        title={'Natural Intelligence'}
                        img_src={intelligenceLogo}
                        style={'blue'}
                    />
                </Grid>
            </Grid> */}

            <section className={styles.about}>
                <h1>Designing Futures</h1>
                <h2 className={styles.about_text}>RGB Design stands at the forefront of innovation, where the fusion of design, technology, natural systems, and computational design converges to craft creative and sustainable solutions to global challenges.</h2>
                <h2 className={styles.about_text}>Our mission is to harness the power of these disciplines, blending aesthetics with functionality, to develop projects that are not only visually compelling but also environmentally responsible and technologically advanced. Through a multidisciplinary approach, we aim to push the boundaries of what's possible, delivering designs that are thoughtful, adaptive, and capable of making a positive impact on societies and ecosystems alike.</h2>
                <h2 className={styles.about_text}>At RGB Design, we believe in the transformative power of design to inspire change, drive progress, and create a better future for our planet.</h2>
            </section>

        </section>
    )
}
