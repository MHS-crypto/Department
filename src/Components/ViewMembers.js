import React from 'react';
import { useState,useEffect } from "react";
import './Departments.css';


function ViewMembers(props) {


    var departments = [];
    var counter = 0;
  const [departmentData,setdepartmentData] = useState([]);
  const dname = props.location.departmentProps;
 

 
      
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
                var k = JSON.stringify(department) == dname.dname
                var tl = data[i].users.length; 
                
              
                if(k)
                    {
                        for(var j=0 ; j<tl ; j++)
                        {
                        var team = {tid:data[i].users[j].tid}
                        
                        if(JSON.stringify(team.tid) == JSON.stringify(dname.tid))
                            {
                                departments[counter] = data[i].users[j]
                                counter++;
                            }
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
           

              return  <div class="card-containerr">  <h1 id="has">Team ID: {curElm.tid} </h1>  <h1 id="has">Member ID: {curElm.mid} </h1> <h1 id="has">Member Name: {curElm.mname} </h1>  <br/> <br/> 

            
              </div>
        }) 
        
              } 
         </div>      
            
   
  );
}

export default ViewMembers;