import './App.css'
import lakeLoop from './assets/lakeLoop.mp4'

function App() {
  return (
    <div className='overlay'>
      <div className='video1'>
        Roving girl
        <video className='video' src={lakeLoop} muted loop autoPlay></video>
      </div>
    </div>
  )
}

export default App
