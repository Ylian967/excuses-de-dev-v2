import Head from 'next/head';
import ExcuseGenerator from '../components/ExcuseGenerator';

export default function Home() {
  return (
    <>
      <Head>
        <title>Excuses de Dev</title>
        <meta name="description" content="Générateur d'excuses pour développeurs" />
      </Head>
      
      <ExcuseGenerator />
    </>
  );
}