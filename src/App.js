import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import AddDepartment from './Components/addDepartment';
import depDetails from './Components/depDetails';
import addTeam from './Components/addTeam';
import viewTeam from './Components/teamDetails'
import AddMember from './Components/addMembers';
import viewMembers from './Components/ViewMembers';



function App() {
  return (
    <div>
      <BrowserRouter>
    <Switch>
  <Route exact path="/" component={Home}></Route>
  <Route path="/aboutus" component={Aboutus}></Route>
  <Route path="/AddDepartment" component={AddDepartment}></Route>
  <Route path="/depDetails" component={depDetails}></Route>
  <Route path="/addTeam" component={addTeam}></Route>
  <Route path="/viewTeam" component={viewTeam}></Route>
  <Route path="/AddMember" component={AddMember}></Route>
  <Route path="/viewMembers" component={viewMembers}></Route>
  </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
