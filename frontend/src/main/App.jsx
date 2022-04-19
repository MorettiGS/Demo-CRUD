import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Home from '../components/home/Home';
import ClientCrud from '../components/clients/ClientCrud'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Nav from '../components/template/Nav';
import Logo from '../components/template/Logo';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="j">
      <BrowserRouter forceRefresh={true}>
        <div className='app'>
          <ToastContainer position='top-right'/>
          <Logo/>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/clientes" component={ClientCrud}/>
            <Redirect from="*" to="/"/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
