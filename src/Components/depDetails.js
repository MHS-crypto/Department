import React from 'react';
import { useState,useEffect } from "react";
import './Departments.css';
import {Link} from 'react-router-dom';

function Depdetails() {

    var departments = [];
  const [departmentData,setdepartmentData] = useState([]);
      
    const callAboutPage = async() => {
        try{

        const res = await fetch('/viewDepartments',{
            method:"GET",
            headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
            },
            credentials:"include"
        });

         const data = await res.json();

         for(var i = 0 ; i < data.length ; i++)
            {
                departments[i] = data[i];
            }

         
        setdepartmentData(departments);

        
        
        if(await res.status !==200)
        {
            const error = new Error(res.error);
            throw error;
        }
        }catch(err) {
                console.log(err);
                
        }
    }

   

    useEffect(() => {
    callAboutPage();
    }, [])



  return (
    
    
    
           
        <div>
            {
        
        departmentData && departmentData.map((curElm,i=0) => {
            
            let dname = departmentData[i].dname;

              return  <div class="card-containerr"> <h1 id="has">Department ID: {curElm.dId} </h1>  <h1 id="has">Department Name: {curElm.dname} </h1>  <h1 id="has">Department Head: {curElm.incharge} </h1> <br/> <br/> <Link class="bttn5" to={{ pathname:"addTeam",
              departProps:{
                  dname:dname
              }
             }} >  Add Team 
             </Link> 

             <Link class="bttn5" to={{ pathname:"viewTeam",
              departProps:{
                  dname:dname
              }
             }} >  View Team 
             </Link> 
              </div>
         }) 
        
              } 
         </div>      
            
   
  );
}

export default Depdetails;