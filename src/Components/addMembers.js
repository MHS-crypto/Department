import React,{useState} from 'react';
import './AppointmentForm.css'
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';



function AddMembers(props) {

    const history = useHistory();
    
    
    let tid = props.location.departProps.tid;
    
    
 
   const [member,setMember] = useState({did:"" , mid:"" , mname:""});

   //send data to backend

const addMembers = async(e) => {
    e.preventDefault();

    if(member.did=="" || member.mid =="" || member.mname=="" )
      {
        alert("All fields must be filled");;
      }

    else  
      {
    const {did, mid, mname} = member;
    const res = await fetch('/members',{
      method:"POST",
      headers: {
         "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        did,mid,mname,tid
         
      })
    });

    const data = await res.json();

    if(!data)
    {
      console.log("Membver is not added");
    }

    else
    { 
      alert("Member Added Successfully");
      setMember({...member,mid:"",mnamelead:""})

      history.push("/");
    }
  }
}
  

        
        const handleInputs = (e) => {
             const name = e.target.name;
             const value = e.target.value;
             setMember({...member, [name]:value})
            
        }

  return (
  
    <div id="container" class="body5">
    
        <div id="body_header">
        <br/><br/>
                  <Link class="homebtn5" to="/">MedTech</Link>
                  
                <h1 class="apph1">Add Members</h1>

        </div>
        <form  method="POST" class="form5">
      <fieldset class="fldset5">

      <label class="label5" for="name"> Department ID</label>
        <input class="inp5" id="did" name="did" type="text"
         value={member.did}
         onChange={handleInputs}
         />
           
        <label class="label5" for="name"> Member ID</label>
        <input class="inp5" id="mid" name="mid" type="text"
         value={member.mid}
         onChange={handleInputs}
         />

        <label class="label5" for="mail">Member Name</label>
        <input class="inp5"  id="mname" name="mname" type="text"
        value={member.mname}
        onChange={handleInputs}
        />


    </fieldset>
      <button class="bttn5" type="submit" onClick={addMembers} >Add Members</button>
    </form>
    
       
    </div>



   
  );

  }
export default AddMembers;