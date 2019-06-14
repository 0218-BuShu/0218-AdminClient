import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'

export default class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
      {/* 注册路由 */}
       <Switch>
         <Route path="/" component={Login}></Route>
         <Route path="/admin" component={Admin}></Route>
       </Switch>
     </BrowserRouter>
    );
  }
}