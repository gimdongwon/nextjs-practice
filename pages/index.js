import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta keyword="my blog powered by nextjs" />
        <meta content="my blog powered by nextjs" />
      </Head>
      <h1>Welcome my blog</h1>
    </div>
  );
}
