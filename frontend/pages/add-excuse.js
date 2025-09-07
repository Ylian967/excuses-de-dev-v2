import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';


export default function AddExcuse() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    http_code: '',
    tag: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.http_code || !formData.tag || !formData.message) {
      setError('Tous les champs doivent être rempli !');
      return;
    }

    setLoading(true);
    setError('');


  try {
    const response = await axios.post('http://localhost:3001/api/excuses', {
      http_code: parseInt(formData.http_code),
      tag: formData.tag,
      message: formData.message
    });

    setSuccess(true);
    setTimeout(() => {
      router.push(`/${response.data.http_code}`);
    }, 1000);

  } catch (error) {
    console.error(error);
    setError('Cette excuse existe déjà ou une erreur est survenu');
  }

  setLoading(false);
 };


  if (success) {
    return (
      <div className="container">
        <div className="success-message">
          L'excuse à était créer avec succès !! Redirection...
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Ajouter une excuse</title>
      </Head>

      <div className="container">
        <h1 className="title">Ajouter une excuse</h1>
        
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Code HTTP</label>
              <input
                type="number"
                name="http_code"
                value={formData.http_code}
                onChange={handleChange}
                className="form-input"
                placeholder="701"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tag</label>
              <input
                type="text"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                className="form-input"
                placeholder="Excusable"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="It works on my machine"
              />
            </div>

            {error && <div className="error-alert"> {error}</div>}

            <button type="submit" className="button" disabled={loading}>
              {loading ? 'Création...' : 'Créer l\'excuse'}
            </button>
            
            <Link href="/" className="button button-secondary">Retour à l'acceuil</Link>
          </form>
        </div>
      </div>
    </>
  );
}