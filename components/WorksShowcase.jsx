import {
    Grid
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/WorksShowcase.module.scss';

export default function WorksShowcase(props) {
    let public_url = ''
    // if(process.env.NODE_ENV == 'production') {
    //     public_url = '/rgbdesign'
    // }

    function renderProjectGrid() {
        let res = []
        props.data.projects.forEach((p, idx) => {
            res.push(
                <Grid item xs={12} md={6} lg={6}>
                    <div className={styles.img_container}>
                        <Image 
                            className={styles.showcase_img}
                            src={public_url + "/images/projects/" + props.data.title + "/" + p.title + "/" + p.cover} 
                            width="100" 
                            height="100"
                        />
                        <span className={styles.overlay}>{p.title}</span>
                    </div>
                </Grid>
            )
        })
        return res
    }

    return (
        <section className={styles.works_showcase}>
            <h1 className={styles.category_title}>{props.data.title}</h1>
            <Grid container spacing={12}>
                {renderProjectGrid()}
            </Grid>
        </section>
    )
}
