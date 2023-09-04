import './App.css';
import { HomePage } from '../HomePage/HomePage';
import { SubContentPage } from '../../Sections/ContentPage/SubContentPage';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StartPage } from '../../Sections/StartedPage/GetStarted';

const ROOT_PATH = "http://localhost:3000/"


function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((e) => observer.observe(e));
  }, []);

  window.addEventListener('popstate', (event) => {
    window.location.reload();
  });



  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage 
                                      setSelectedService={setSelectedService}/>} 
                                    />
          <Route path="services/:app" element={<SubContentPage media={selectedService}/>} 
                                                />
          <Route path="/get-started" element={<StartPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
