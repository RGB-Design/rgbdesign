import Link from 'next/link';

import styles from '@/styles/Contact.module.scss';

export default function Contact() {
    return (
        <section className={styles.contact_container}>
            <h2>Contact</h2>
            <Link href="mailto:hi@mbakshi.com">
                <h3>reachout@mbakshi.com</h3>
            </Link>
        </section>
    )
}
