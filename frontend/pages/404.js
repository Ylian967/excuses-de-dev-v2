import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404  Page non trouvée</title>
      </Head>
      
      <div className="error-page">
        <h1 className="error-title">404</h1>
        <p className="error-message">
         Cette page n'existe pas 
        </p>
        <Link href="/" className="link">
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
}