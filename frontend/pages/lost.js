import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Lost() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>Lost Excuses de Dev</title>
      </Head>
      
      <div className="error-page">
        <h1 className="error-title">I'm lost</h1>
        <div style={{ margin: '30px 0' }}>
          <img 
            src="https://media1.tenor.com/m/cqBgiPbRI8MAAAAC/onepiece-zoro.gif"
            alt="Lost GIF"
            style={{ maxWidth: '400px', borderRadius: '10px' }}
          />
        </div>
        <p className="error-message">
          Redirection vers l'accueil dans 5 secondes...
        </p>
      </div>
    </>
  );
}