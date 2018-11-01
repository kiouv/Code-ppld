import React from 'react'
import { Player, BigPlayButton, ControlBar } from 'video-react'
import '../../node_modules/video-react/dist/video-react.css' // import css

export default props => {
  return (
    <Player
      playsInline
      muted
      autoPlay
      loop
      // poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
      {/* <BigPlayButton position="center" /> */}
      <ControlBar disableDefaultControls={true} />
    </Player>
  )
}
