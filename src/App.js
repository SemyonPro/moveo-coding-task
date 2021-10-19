import { FaMusic, FaPlay, FaStop, FaDrum } from 'react-icons/fa'
import { CgPiano } from 'react-icons/cg'
import { BiMusic } from 'react-icons/bi'
import { GrMusic } from 'react-icons/gr'
import { GiClarinet, GiBassoon, GiViolin, GiSaxophone } from 'react-icons/gi'
import './App.css'
import audio from './audio'
import Recorder from './Recorder'

function App() {
  // An array to remember which pad is pressed
  const toPlay = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  // An onclick function which every time a pad is pressed it changes its index to 1 or 0 in the array and plays the sound.
  const click = (n) => {
    if (toPlay[n] === 1) {
      toPlay[n] = 0
      audio[n].pause()
    } else {
      toPlay[n] = 1
      audio[n].loop = true
      audio[n].play()
    }
  }

  // A play function which checks the "state" of each pad if turned on or not 1/0 in the array above, plays all pads which are turned on.
  const play = () => {
    for (let i = 0; i < toPlay.length; i++) {
      if (toPlay[i] === 1) {
        audio[i].loop = true
        audio[i].play()
      }
    }
  }

  // A stop function that iterates through playing sounds and pauses them.
  const stop = () => {
    for (let i = 0; i < toPlay.length; i++) {
      if (toPlay[i] === 1) {
        audio[i].pause()
      }
    }
  }

  return (
    <div className='App bg'>
      <div>
        <div>
          <button class='btn btn-light m-2' onClick={() => click(0)}>
            <FaMusic />
          </button>
          <button class='btn btn-light m-2' onClick={() => click(1)}>
            <CgPiano />
          </button>
          <button class='btn btn-light m-2' onClick={() => click(2)}>
            <GiClarinet />
          </button>
          <button class='btn btn-light m-2' onClick={() => click(3)}>
            <GiBassoon />
          </button>
          <button class='btn btn-light m-2' onClick={() => click(4)}>
            <GiViolin />
          </button>
          <button class='btn btn-light m-2' onClick={() => click(5)}>
            <GrMusic />
          </button>
          <button class='btn btn-light m-2' onClick={() => click(6)}>
            <FaDrum />
          </button>
          <button class='btn btn-light m-2' onClick={() => click(7)}>
            <GiSaxophone />
          </button>
          <button class='btn btn-light m-2' onClick={() => click(8)}>
            <BiMusic />
          </button>
        </div>

        <div>
          <button class='btn btn-dark m-2' onClick={() => play()}>
            <FaPlay />
          </button>
          <button class='btn btn-dark m-2' onClick={() => stop()}>
            <FaStop />
          </button>
          <Recorder />
        </div>
      </div>
    </div>
  )
}

export default App
