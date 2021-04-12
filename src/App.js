import { Redirect, Route, Switch } from "react-router";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts"
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <ul>
        <li>  <Link to="/">home </Link> </li>
        <li> <Link to="/contacts">contacts </Link></li>
        <li> <Link to="/about">about </Link>   </li>
      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route exact path="/" component={Home} />
        <Route  path="/" component={NotFound} />
        {/* <Redirect to="/"  />  */}
      </Switch>
    </div>
  );
}
export default App;
//exact delaet atribut obizatelnym
//Switch pereclushaet 
//redirect to for home page pereadresasiya