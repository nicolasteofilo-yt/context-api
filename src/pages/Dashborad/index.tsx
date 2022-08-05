import { Link } from 'react-router-dom'
import './styles.css';

export default function Dashboard() {
    return (
        <div className='container-dash'>
            <h1 className="name"><span className='hello'>Olá</span> Nicolas</h1>
            <span className='email'><b>Email: </b>nicolasteste@gmail.com</span>
            <Link to="/" className='btn-go-back'>Voltar para Home</Link>
        </div>
    )
}