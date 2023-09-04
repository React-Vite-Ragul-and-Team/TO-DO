import './ErrorPage.css'
import Home from './Home'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <>
        <div className="errorPage">
            <h1 className='thappu'>404 - Page Not Found</h1>
            <h1><i className="bi-heartbreak" style={{ fontSize: 100,color:'white' }}></i></h1>
            <p>The page you are looking for does not exist.</p>
        </div>
        <div>
        <button className='veedu'><Link to="/" style={{ color: 'white' }} >Return to <i className="bi-house-heart" style={{ fontSize: 30 }}></i></Link></button>
        </div>
        </>
    );
}

export default ErrorPage