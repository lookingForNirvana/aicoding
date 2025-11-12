import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    return (
        <Layout>
            <Header />
            <main className={styles.main}>
                <h1>Welcome to My Personal Website</h1>
                <p>This is the main landing page where you can find information about me and my projects.</p>
            </main>
            <Footer />
        </Layout>
    );
};

export default Home;