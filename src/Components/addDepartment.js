import React,{useEffect,useState} from 'react';
import './AppointmentForm.css'
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';



function AddDepartment() {


 //for sign up
 const history = useHistory();
 const [department,setDepartment] = useState({
   dId:"",
   dname:"",
   incharge:"",
 });

 let name, value;
 const handleInputs = (e) => {

       name = e.target.name;
       value = e.target.value;

       setDepartment({...department, [name]:value});
 }

 const PostData = async (e) => {
           console.log("Hello");
           e.preventDefault();
           const {dId, dname , incharge  } = department;
           console.log(dId);

          const res = await fetch("/department" , {

             method: "POST",
             headers: {
                "Content-Type" : "application/json"
             },

             body: JSON.stringify({
                dId, dname , incharge
             })

          });

          const data = await res.json();

          if(data.status === 422 || !data)
          {
            window.alert("Registration failed");
            //console.log("Registration failed");
          }

          else
          {
           
           window.alert("Department Added Successfully ");
          

           history.push("/");

          }
 }



  return (
  
    <div id="container" class="body5">
    
        <div id="body_header">
        <br/><br/>
                  <Link class="homebtn5" to="/">MedTech</Link>
                <h1 class="apph1">Add Department</h1>

        </div>
        <form  method="POST" class="form5">
      <fieldset class="fldset5">
           
        <label class="label5" for="name"> Department ID</label>
        <input class="inp5" id="dId" name="dId" type="text"
         value={department.dId}
         onChange={handleInputs}
         />

        <label class="label5" for="mail">Department Name</label>
        <input class="inp5"  id="dname" name="dname" type="text"
        value={department.dname}
        onChange={handleInputs}
        />

        <label class="label5" for="tel">Department Incharge</label>
        <input class="inp5" id="incharge" name="incharge" type="text"
        value={department.incharge}
        onChange={handleInputs}/>

    </fieldset>
      <button class="bttn5" type="submit" onClick={PostData} >Add Department</button>
    </form>
    
       
    </div>



   
  );

  }
export default AddDepartment;