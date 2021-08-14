const mongoose = require("mongoose");
const validator = require("validator");


const departmentSchema = new mongoose.Schema({
    dId: {
         type: String,
         required: true,
         
        
    },

    dname: {
        type: String,
    required: true
   },

   incharge: {
    type: String,
    required: true
   },

   teams: [
        {
            tid: {
                type: String,
                required: true,
                
            },

            tlead: {
                type: String,
                required: true
            },

        }
   ],

   users: [
    {
        tid: {
            type: String,
            required: true,
            
        },

        mid: {
         type: String,
         required: true,
         
        },


        mname: {
         type: String,
         required: true
        }
    }
]

})


//storing teams
departmentSchema.methods.addTeam = async function(tid,tlead) {

    try {
          this.teams = this.teams.concat({tid,tlead});
          await this.save();
          return this.teams;
    }catch(error) {
      console.log(error);
    }
  
  }

  //storing members
  departmentSchema.methods.addMember = async function(mid, mname, tid) {
    try {
        this.users = this.users.concat({tid,mid,mname});
        await this.save();
        return this.users;
  }catch(error) {
    console.log(error);
  }
  }

//collection creation
const Department = mongoose.model('DEPARTMENT',departmentSchema);

module.exports = Department;