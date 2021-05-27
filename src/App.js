import { useState, useEffect, useCallback } from 'react'

import './App.css'

function App() {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://gist.githubusercontent.com/mohammedhammoud/cf7aca4c87462cd061d4f2b1184392a8/raw/ea14389e293b478bdbace627d776ba6f7d735f14/teliatestdata.json')
    
      if (!response.ok) {
        throw new Error('Could not fetch data from API')
      }

      const data = await response.json()
      console.log(data)
      setVideos(data)
    
    } catch(error) {
      setError(error.message)
    }
    setIsLoading(false)

  }, [])

  useEffect(async() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  return (
    <div className='App'>
      <h1>Hello world!</h1>
    </div>
  )
}

export default App
