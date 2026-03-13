import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Inscription() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const handleInscription = async (e) => {
    e.preventDefault();
    setError('');
    try {
    const { response } = await axios.post('http://localhost:3000/api/auth/inscription', { email, password });

        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token',response.data.token);
        navigate('/dashboard');
        } catch (err) {
        alert('Erreur de connexion (Le back-end est-il prêt ?)');

        }
}


    return (
        <div>
        <h2>Inscription</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleInscription}>
            <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required
            />

            <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required
            />
            <button type="submit">S'inscrire</button>

        </form>
        </div> );
        }
export default Inscription;