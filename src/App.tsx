import React from 'react'
import { Home } from './pages'
import Header from './components/Header'

const App = () => {
  return (
    <div className='container mx-auto font-[dmsans]'>
      <Header />
      <Home />
    </div>
  )
}

export default App