import Home from './Home';
import './App.css';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import register from './register';

function App() {
    return <div>
         <BrowserRouter>
             <Link to="/">Login</Link>
             <text> | Dont have an account </text>
             <Link to="/register">Register</Link>
         <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/register" component={register} exact/>
         </Switch>
         </BrowserRouter>
         </div>
}
export default App;
