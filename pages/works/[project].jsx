import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
    Grid
} from '@mui/material';
import Image from 'next/image';

import TextBox from '@/components/TextBox';
import WorksShowcase from '@/components/WorksShowcase';

import projectsData from '@/public/projects.json';

import styles from '@/styles/WorksDetails.module.scss';

export default function WorksDetails(props) {

    const { project } = useRouter().query;
    const [projectDetails, setProjectDetails] = useState(undefined)

    useEffect(() => {
        if(project) {
            for(const [theme, data] of Object.entries(projectsData)) {
                if(theme == 'projects_list') {
                    continue
                }
                let projects = data['projects']
                projects.forEach(p => {
                    if(p.title == project) {
                        setProjectDetails({
                            "project": p,
                            "theme": data['title']
                        })
                    }
                })
            }
        }
    }, [project])

    function renderProject() {
        if(projectDetails) {
            let project = projectDetails['project']
            let theme = projectDetails['theme']
            let img_grid = []
            project.images.forEach((img, idx) => {
                img_grid.push(
                    <Grid key={idx} item xs={12} md={6} lg={6}>
                        <Image 
                            className={styles.cover_img} 
                            src={"/images/projects/" + theme + "/" + project.dir + "/" + img}
                            width="100" 
                            height="100"
                            alt="project image"
                        />
                    </Grid>
                )
            })
            return (
                <>
                    <div className={styles.description_container}>
                        <h1>{project.title}</h1>
                        <h2>{project.subtitle}</h2>
                        <p>{project.description}</p>
                    </div>
                    <Grid container spacing={2}>
                        {img_grid}
                    </Grid>
                </>
            )
        }
    }

    return (
        <section className={styles.work_details_container}>
            {renderProject()}
            
        </section>
    )
}
