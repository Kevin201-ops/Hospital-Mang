import React from 'react';
import '../styles/Team.css';


function Mang() {
  return (
    <div>
      <section id="teams" >
        <h3 className="text-center">we are there for you</h3>
        <h2 className="text-center">
          <span className="text-secondary"> Meet Our Management Team</span>
          <p>
            Here our are founding leaders
          </p>
        </h2>
        
        <div className='lonk'>
          <div className='sic'>
            <img src='./bmale.jpg' alt='error'/>
            <h4>Kevin Adusei</h4>
            <p>web developer</p>
          </div>
          <div className='sic'>
            <img src='./bmale.jpg' alt='error' />
            <h4>Razak Donkor</h4>
            <p>web developer</p>
          </div>
          <div className='sic'>
            <img src='./bmale.jpg' alt='error' />
            <h4>Camille Zorro</h4>
            <p>web developer</p>
          </div>
          <div className='sic'>
            <img src='./bmale.jpg' alt='error' />
            <h4>Ruth Sakyi</h4>
            <p>web developer</p>
          </div>
        </div>
        



      </section>
    </div >


  );
};

export default Mang;