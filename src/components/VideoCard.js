import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const VideoCardImage = styled.img`
  width: 200px;
`

const VideoCard = props => (
  <div className="VideoCard">
    <Link to={props.link}>
      <VideoCardImage src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </Link>
  </div>
)

VideoCard.defaultProps = {
  link: '#',
}

export default VideoCard
