import { BrowserRouter, Route, Routes } from 'react-router-dom'
import from './index.scss'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Main Title</h1>
        </header>
      
      <Routes>
        <Route path="/" element={
          <main>
            <h2>Landing page</h2>
          </main>
        }
          />
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
