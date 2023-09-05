<<<<<<< HEAD
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
=======
import reactLogo from './assets/tic_icon.svg'
import { Link } from 'react-router-dom'
import './Home.css'
import './button.css'

function Home() {

  return (
    <>
      <div className='potti'>
        <div>
          <img src={reactLogo} className="padam" />
        </div>
        <div >
          <h1 className='todo' style={{ color: 'white' }}>To-Do List</h1>
          <h2 className='todo' style={{ color: 'white' }}>2 IN 1</h2>
          <p style={{ color: 'white' }}>Stay Organized, Achieve More.</p>
          <br />
          <button className='button'><Link to="/sticky" style={{ color: 'white' }} >Start Sticky Notes</Link></button><br></br>
          
          <button  className='button b1' ><Link to="/todo" style={{ color: 'white' }} >Start ToDo List</Link></button>
        </div>
      </div>
      
    </>
  )
}

export default Home
>>>>>>> 9fd54c79df9c92865016a31161e31ead17bcc363
