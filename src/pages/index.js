import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Player from '../components/Player'
import VideoCard from '../components/VideoCard'

const IndexPage = () => (
  <Layout>
    <Player />
    <VideoCard
      title="hey!"
      image={require('../images/johannes-plenio-782754-unsplash.jpg')}
    />
    <VideoCard
      title="hey!"
      image={require('../images/johannes-plenio-782754-unsplash.jpg')}
    />
    <VideoCard
      title="hey!"
      image={require('../images/johannes-plenio-782754-unsplash.jpg')}
    />
    <VideoCard
      title="hey!"
      image={require('../images/johannes-plenio-782754-unsplash.jpg')}
    />
  </Layout>
)

export default IndexPage
