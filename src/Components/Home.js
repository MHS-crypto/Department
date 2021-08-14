import React,{useState,useEffect} from 'react';
import Video from './Video';
import Departments from './Departments';
import Footer from './Footer';
import NavBar1 from './NavBar';
import Department from '../Server/Model/DepartmentSchema';


function Home() {

  return (
  
    <div>

    <div>
      <NavBar1/>
    </div>
    <div>
      <Video/>
      <Departments/>
      <Footer/>
            
    </div>
    </div>
   
  );
}

export default Home;
