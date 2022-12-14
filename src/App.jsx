import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Resume from './routes/resume/resume.component';
import Projects from './routes/projects/projects.component';
import Home from './routes/home/home.components';
import Footer from './components/footer/footer.components';
import './App.css';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element = {<Navigation />} >
          <Route index element= {<Home />} />
          <Route path='projects' element = {<Projects />} />
          <Route path='resume' element = {<Resume />} />
          

        </Route>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
