import { useContext } from 'react';
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext';

import './styles.css';

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <div className='container-dash'>
            <h1 className="name"><span className='hello'>Olá</span> {user.name ? user.name : 'User not found'}</h1>
            <span className='email'><b>Email: </b>{user.email ? user.email : 'E-mail not found'}</span>
            <Link to="/" className='btn-go-back'>Go back to Home</Link>
        </div>
    )
}