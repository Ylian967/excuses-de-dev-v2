import GenerateButton from './GenerateButton';
import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


export default function ExcuseGenerator () {
  const [excuse, setExcuse] = useState(null);
  const [loading, setLoading] =useState(false);
  const router = useRouter();

  useEffect(() => {
    loadRandomExcuse();
  }, []);


  const loadRandomExcuse = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/api/excuses/random');
      setExcuse(response.data);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(error);
      setExcuse({message: 'erreur de connexion'});
    }
    setLoading(false);
  };

  const goToDetail = () => {
    if (excuse && excuse.http_code) {
      router.push(`/${excuse.http_code}`);
    }
  };

return (
  <div className="container">
    <h1 className="title">Les Excuses de Dev</h1>
    <div className="excuse-box">{loading ? (
        <p>Chargement...</p>
      ) : excuse ? (
        <p>{excuse.message}</p>
      ) : (
        <p>Aucune excuse disponible</p>
      )}
    </div>
    {excuse && excuse.http_code && (
      <button onClick={goToDetail} className="detail-button">
        Voir les détals du code:  {excuse.http_code}
      </button>
    )}
    <GenerateButton
    onClick={loadRandomExcuse}
    disabled={loading}
    />
    <button
    className="button button-secondary"
    onClick={() => router.push('/add-excuse')}
    >
      Ajouter une excuse
    </button>
  </div>
);
}
