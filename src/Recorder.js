import MicRecorder from 'mic-recorder-to-mp3'

const Recorder = () => {
  const recorder = new MicRecorder({
    bitRate: 128,
  })

  // A function that starts recording audio
  function startRecording() {
    recorder
      .start()
      .then(() => {})
      .catch((e) => {
        console.error(e)
      })
  }

  // function to stop recording
  function stopRecording() {
    recorder
      .stop()
      // Gets the audio
      .getMp3()
      .then(([buffer, blob]) => {
        // Saves the audio
        const file = new File(buffer, 'music.mp3', {
          type: blob.type,
          // time of last audio motification
          lastModified: Date.now(),
        })
        // Creates list element in the unordered list below and appends the audio
        const li = document.createElement('li')
        const player = new Audio(URL.createObjectURL(file))
        player.controls = true
        li.appendChild(player)
        document.querySelector('#playlist').appendChild(li)
      })
      .catch((e) => {
        alert('We could not retrieve your message')
        console.log(e)
      })
  }

  return (
    <div>
      <div class='container text-center'>
        <hr />

        <button class='btn btn-primary mx-2' onClick={() => startRecording()}>
          Start Recording
        </button>
        <button
          class='btn btn-primary mx-2'
          onClick={() => {
            stopRecording()
          }}
        >
          Stop Recording
        </button>

        <br />
        <br />
        <br />

        <ul id='playlist'></ul>
      </div>
    </div>
  )
}

export default Recorder
