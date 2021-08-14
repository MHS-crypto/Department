import React,{useState} from 'react';
import './AppointmentForm.css'
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';



function AddTeam(props) {

    const history = useHistory();
    let dname = props.location.departProps.dname;
    //console.log("Department",dname);
 
   const [team,setTeam] = useState({tid:"" , tlead:""});

   //send data to backend

const addTeam = async(e) => {
    e.preventDefault();

    if(team.tid =="" || team.tlead=="" )
      {
        alert("All fields must be filled");;
      }

    else  
      {
    const { tid, tlead} = team;
    const res = await fetch('/teams',{
      method:"POST",
      headers: {
         "Content-Type" : "application/json"
      },
      body: JSON.stringify({
         tid,tlead,dname
         
      })
    });

    const data = await res.json();

    if(!data)
    {
      console.log("Team is not added");
    }

    else
    { 
      alert("Team Added Successfully");
      setTeam({...team,tid:"",tlead:""})

      history.push("/");
    }
  }
}
  

        
        const handleInputs = (e) => {
             const name = e.target.name;
             const value = e.target.value;
             setTeam({...team, [name]:value})
            
        }

  return (
  
    <div id="container" class="body5">
    
        <div id="body_header">
        <br/><br/>
                  <Link class="homebtn5" to="/">MedTech</Link>
                  
                <h1 class="apph1">Add Team</h1>

        </div>
        <form  method="POST" class="form5">
      <fieldset class="fldset5">
           
        <label class="label5" for="name"> Team ID</label>
        <input class="inp5" id="tid" name="tid" type="text"
         value={team.tid}
         onChange={handleInputs}
         />

        <label class="label5" for="mail">Team Lead</label>
        <input class="inp5"  id="tlead" name="tlead" type="text"
        value={team.tlead}
        onChange={handleInputs}
        />


    </fieldset>
      <button class="bttn5" type="submit" onClick={addTeam} >Add Team</button>
    </form>
    
       
    </div>



   
  );

  }
export default AddTeam;