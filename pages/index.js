import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { PrismicText, PrismicRichText } from '@prismicio/react';
import { createClient } from '../prismicio';

export default function Home({ page }) {
  return (
    <div>
      <h1 className={styles.title}>
        <PrismicText field={page.data.greeting} />
      </h1>
      <div className={styles.description}>
        <PrismicRichText field={page.data.description} />
      </div>
    </div>
  );
}

// pages/index.js

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID('page', 'home');

  // Pass the homepage as prop to our page.
  return {
    props: { page },
  };
}
