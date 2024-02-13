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
        let data = props.data[props.theme]
        data.projects.forEach((p, idx) => {
            res.push(
                <Grid item xs={12} md={6} lg={6}>
                    <Link href={"/works/" + p.title}>
                        <div className={styles.img_container}>
                            <Image 
                                className={styles.showcase_img}
                                src={public_url + "/images/projects/" + data.title + "/" + p.dir + "/" + p.cover} 
                                width="100" 
                                height="100"
                                alt="project image"
                            />
                            <span className={styles.overlay}>{p.title}</span>
                        </div>
                    </Link>
                </Grid>
            )
        })
        return res
    }

    return (
        <section id={props.theme} className={styles.works_showcase}>
            <h1 className={styles.category_title}>{props.data[props.theme].title}</h1>
            <Grid container spacing={3}>
                {renderProjectGrid()}
            </Grid>
        </section>
    )
}
