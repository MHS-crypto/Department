import React from 'react';
import { useState,useEffect } from "react";
import './Departments.css';
import {Link} from 'react-router-dom';

function TeamDetails(props) {

    const dname = props.location.departProps

    var departments = [];
    var counter = 0;
  const [departmentData,setdepartmentData] = useState([]);
  //const [variable, setVariable] = useState();
  //setVariable(props.location.departProps);
      
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

         var p = data.length;
         
         
    

         for(var i = 0; i<p ; i++)
            {
                var department = {dname:data[i].dname};
        
                var k = (JSON.stringify(department) == JSON.stringify(dname))
                var tl = data[i].teams.length; 
              
                if(k)
                    {
                        for(var j=0 ; j<tl ; j++)
                        {
                        departments[counter] = data[i].teams[j]
                        counter++;
                        }
                    }
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
           let tid = departmentData[i].tid;
          
           
           

              return  <div class="card-containerr">  <h1 id="has">Team ID: {curElm.tid} </h1>  <h1 id="has">Team Lead: {curElm.tlead} </h1>   <br/> <br/> <Link class="bttn5" to={{ pathname:"AddMember",
              departProps:{
                  
                  tid:tid
              }
             }} >  Add Members 
             </Link> 

             <Link class="bttn5" to={{ pathname:"viewMembers",
              departmentProps:{
                  dname:JSON.stringify(dname),
                  tid:tid
              }
             }} >  View Members 
             </Link> 
              </div>
        }) 
        
              } 
         </div>      
            
   
  );
}

export default TeamDetails;