import {
    Grid
} from '@mui/material';

import TextBox from '@/components/TextBox';

import ThesisImg from '@/public/images/projects/thesis.png';
import ResidentialImg from '@/public/images/projects/residential.png';
import LeisureImg from '@/public/images/projects/leisure_space.png';

import VTImg from '@/public/images/profile/vt.jpg';
import SPImg from '@/public/images/profile/sp.jpg';
import AUImg from '@/public/images/profile/au.jpg';
import SCImg from '@/public/images/profile/sc.jpg';


import styles from '@/styles/Projects.module.scss';

export default function Projects() {
    return (
        <section className={styles.projects_container}>
            <div className={styles.heading}>
                <h1><span className={styles.light}>PERSONAL</span> PROJECTS</h1>
            </div>
            <Grid container spacing={12}>
                <Grid item xs={12} md={6} lg={4}>
                    
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    
                </Grid>
                <Grid item xs={12} md={6} lg={4}></Grid>
                <Grid item xs={12} md={6} lg={4}>
                    
                </Grid>
                <Grid item xs={12} md={6} lg={4}></Grid>
                
            </Grid>


            <div className={styles.space}> </div>



            <div className={styles.heading}>
                <h1><span className={styles.light}>ARCHITECTURE</span> PROJECTS</h1>
            </div>
            <Grid container spacing={12}>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox 
                        title="CENTRE"
                        category="THESIS"
                        img={ThesisImg}
                        description="Permaculture is a design system or a method that suggests a harmonious integration between human activities with natural environment, to provide for material and non- material human needs."
                        link={'/documents/projects.pdf'}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox 
                        title="CHRONOS"
                        category="RESIDENTIAL"
                        img={ResidentialImg}
                        description="The redevelopment of the residences revolves around taking architectural settings and breaking down the defined functional spaces to create a dynamic environment that serve a purpose."
                        link={'/documents/projects.pdf'}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox 
                        title="BEYUL"
                        category="LEISURE SPACE"
                        img={LeisureImg}
                        description="Within the buddhist doctrine, the percepts are meant to develop mind and character to make progress on the path of enlightenment, a state of highest happiness, bliss, fearlessness, freedom."
                        link={'/documents/projects.pdf'}
                    />
                </Grid>
            </Grid>

            

            
        </section>
    )
}
