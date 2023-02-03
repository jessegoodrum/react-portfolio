import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Contact from './routes/contact/contact.component';
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
          <Route path='contact' element = {<Contact />} />
          

        </Route>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
