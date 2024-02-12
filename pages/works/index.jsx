import {
    Grid
} from '@mui/material';
import Image from 'next/image';

import TextBox from '@/components/TextBox';
import WorksShowcase from '@/components/WorksShowcase';

import projectsData from '@/public/projects.json';

import styles from '@/styles/Works.module.scss';

export default function Works() {
    return (
        <section className={styles.projects_container}>
        <WorksShowcase data={projectsData['computational_design']}/>
        <WorksShowcase data={projectsData['material_experiments']}/>
        <WorksShowcase data={projectsData['furniture_design']}/>
        <WorksShowcase data={projectsData['competitions']}/>

            
        </section>
    )
}
