const express = require("express");
const { models } = require("mongoose"); // to use mongo db library
const Department = require("../Model/DepartmentSchema");


const router = express.Router();

// adding departments
router.post("/department",async(req,res)=>{

    const {dId, dname, incharge} = req.body;

    if(!dId || !dname || !incharge)
        {
            console.log("failed");
            return res.status(422).json({error:"All fields must be filled" });
            
        }

    try {
        const response  = await  Department.findOne({dId:dId});
        if(response)
        {
            console.log("failure");
            return res.status(422).json({error:"Department ID already exsist" });

        }

        else
        {
        const department = new Department({ dId, dname, incharge });

         await department.save();
         console.log("success");

        res.status(201).json({message:"Department added successfully" });

        }
    
    }catch(err) {
        console.log(err);
    }
   
});



//adding teams

router.post('/teams', async (req,res)=>{
    try{
            const {tid , tlead, dname} = req.body;
           
            
            if(!tid || !tlead)
            {
                console.log("Error in adding team");
                return res.json({error:"Tead addition failed"});
            }

            const team = await Department.findOne({dname:dname });
            
            if(team)
            {
                const userMessage = await team.addTeam(tid, tlead)
                await team.save();
                console.log("Team Added")

                res.status(201).json({message:"Team Added Successfully"});
            }
    }catch(error){
            console.log(error);
    }
});

//adding team members
router.post('/members', async (req,res)=>{
    try{
            const {did, mid, mname,tid} = req.body;
            
            
            if(!did || !mid || !mname  || !tid)
            {
                console.log("Error in Team Form");
                return res.json({error:"Team Addition failed"});
            }

            const user = await Department.findOne({dId:did });
          
            
            if(user)
            {
                console.log("User Found")
                const userMessage = await user.addMember(mid, mname, tid)
                await user.save();

                res.status(201).json({message:"User Added Successfully"});
            }
    }catch(error){
            console.log(error);
    }
});




//fetching departments
router.get('/viewDepartments',(req,res)=>{
    Department.find({}).then(data=>{
        res.send(data);
    })
});


module.exports = router;