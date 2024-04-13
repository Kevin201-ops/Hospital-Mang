import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Workers from './pages/Workers';
import Contact from './pages/Contact';
import Pc from './Services/Pc';
import Ped from './Services/Ped';
// import Surge from './Services/Surge';
import Dent from './Services/Dent';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Book from './Components/book';
import Covid from './Services/Covid';
import Gyn from './Services/Gyn';
import Derm from './Services/Derm';
import Wwa from './About/wwa';
// import Staff from './About/Staff';
import Faq from './About/Faq';
import Insights from './Services/Newsext';
import Sexten from './Services/Sexten';
import { useState } from 'react';




// import Book from './Components/book';





function App() {
  

  
  return (
    <>

      <div className="App">

        

        {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <a href="/Book"></a>
                </Popup> */}


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Workers" element={<Workers />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pc" element={<Pc />} />
          <Route path="/Ped" element={<Ped />} />
          {/* <Route path="/Surge" element={<Surge />} /> */}
          <Route path="/Dent" element={<Dent />} />
          <Route path="/Derm" element={<Derm />} />
          <Route path="/Gyn" element={<Gyn />} />
          <Route path="/Covid" element={<Covid />} />
          <Route path="/Wwa" element={<Wwa />} />
          {/* <Route path="/Staff" element={<Staff />} /> */}
          <Route path="/Faq" element={<Faq />} />
          {/* <Route path="/Book" element={<Book />} /> */}
          <Route path="/Insights" element={<Insights />} />
          <Route path="/Sexten" element={<Sexten />} />
          
          



        </Routes>
        
       
        {/* <Book></Book> */}
        {/* <Pc></Pc> */}


      </div>
    </>

  );
}


export default App;
