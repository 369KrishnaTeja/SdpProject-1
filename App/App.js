import Login from './Login';
import Home from './Home1/Home';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import register from './register';
export default function App() {
    return <div>
         <BrowserRouter>
         <Switch>
         <Route path="/" component={Login} exact/>
         <Route path="/register" component={register} exact/>
         <Route path="/Home" component={Home} exact/>
         </Switch>
         </BrowserRouter>
         </div>
}
