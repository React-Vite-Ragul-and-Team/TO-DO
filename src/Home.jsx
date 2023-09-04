import reactLogo from './assets/tic_icon.svg'
import { Link } from 'react-router-dom'
import './Home.css'
import './button.css'

function Home() {

  return (
    <>
      <div className='card'>
        <div>
          <img src={reactLogo} className="logo" />
        </div>
        <div >
          <h1 className='todo'>To-Do List</h1>
          <p>Stay Organized, Achieve More.</p>
          <br />
          <button className='button'><Link to="/dashboard" style={{ color: 'white' }} >Start Organizing</Link></button>
        </div>
      </div>
    </>
  )
}

export default Home
