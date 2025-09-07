import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

export default function CodePage() {
  const router = useRouter();
  const { code } = router.query;
  const [excuse, setExcuse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (code) {
      loadExcuse();
    }
  }, [code]);

  const loadExcuse = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/excuses/${code}`);
      setExcuse(response.data);
    } catch (error) {
      console.error(error);
      setError(`Excuse ${code} non trouvée`);
    }
    setLoading(false);
  };

  if(loading) {
    return (
      <div className="container">
        <div>Chargement de l'excuse {code}...</div>
        <Link href="/" className="link">Retour</Link>
      </div>
    );
  }


  if (error) {
    return (
      <>
      <Head><title>Erreur {code}</title></Head>
      <div className="container">
        <div className="error-page">
          <h1 className="error-title">Erreur</h1>
          <p className="error-message">{error}
          </p>
          <Link href="/" className="button">Retour à l'acceuil</Link>
        </div>
      </div>
      </>
    );
  }


return (
  <>
  <Head>
    <title>HTTP {excuse.http_code} Les Excuses de Dev</title>
  </Head>

  <div className="container">
    <div className="http-page">
      <div className="http-code">{excuse.http_code}</div>
      <div className="http-tag">{excuse.tag}</div>
      <div className="http-message">{excuse.message}</div>

      <Link href="/" className="button">Retour à l'acceuil</Link>
    </div>
  </div>
  </>
);
}