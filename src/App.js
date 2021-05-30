import { useState, useEffect, useCallback } from 'react'

import MovieList from './components/movieList/movieList'
import VideoPlayer from './components/videoPlayer/videoPlayer'

import classes from './App.module.css'

function App() {
  const [videos, setVideos] = useState([])
  const [activeVideo, setActiveVideo] = useState()

  const setActiveVideoHandler = (videoUrl) => {
    setActiveVideo(videoUrl)
  }

  const fetchMoviesHandler = useCallback(async () => {

    try {
      const response = await fetch('https://gist.githubusercontent.com/mohammedhammoud/cf7aca4c87462cd061d4f2b1184392a8/raw/ea14389e293b478bdbace627d776ba6f7d735f14/teliatestdata.json')
      
      if (!response.ok) {
        throw new Error('Could not fetch data from API')
      }

      const data = await response.json()
      setVideos(data)
    
    } catch(error) {
      console.log(error.message)
    }
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  return (
    <main className={classes.app}>
      <div className={classes.headerContainer}>
        <h1 className={classes.headerText}>Small react videoplayer!</h1>
      </div>
      <VideoPlayer activeVideo={activeVideo} />
      <MovieList videos={videos} setActiveVideo={setActiveVideoHandler} />
    </main>
  )
}

export default App
