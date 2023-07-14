import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={
              <main>
                <h2>Landing Page</h2>
              </main>
            }
          />

          <Route
            path='/projects'
            element={
              <main>
                <h2>Projects Page</h2>
              </main>
            }
          />
          <Route
            path='/contact'
            element={
              <main>
                <h2>Contact Page</h2>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
