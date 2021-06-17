import React from "react";
import { Route, Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Servics from "./Servics";
import User from "./User";
import Search from "./Search";

const App = () =>{
    
    const name = () =>{
        return <h1>this is name page</h1>
    };

    return(
        <>
           <Navbar />
           <Switch>
               <Route exact path="/" component={About} />
               <Route exact path="/contact" component={Contact} />
               <Route exact path="/search" component={Search} />
               <Route exact path="/User/:fname/:lname" component={User} />
               <Route exact path="/Servics" render={() => <Servics name="Services" />} />
               <Route path="/contact/name" component={name} />
               <Route component={Error} />
           </Switch>
        </>
    );
}

export default App;