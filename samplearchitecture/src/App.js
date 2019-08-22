import React from 'react';
import LoginContainer from './container/loginContainer';
import DashboardContainer from './container/dashboardContainer';
import ResourceNotFoundContainer from './container/resourceNotFoundContainer';
import ReduxTestContainer from './container/reduxTestContainer';
import {HashRouter, Link, Switch, Route} from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']="Auth Token"
axios.defaults.headers.common['Content-type']="application/json"

axios.interceptors.request.use(request =>{
    console.log("Request Interceptor", request);
    return request;
  },error=>{
    return Promise.reject(error);
  });

axios.interceptors.response.use(response =>{
  console.log("Response Interceptor", response)
  return response;
},error=>{
  return Promise.reject(error);
});

class App extends React.Component {

  render(){
    return(
      <HashRouter>
        <Switch>
            <Route path="/dashboard" component={DashboardContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/" exact component={ReduxTestContainer} />
            <Route component={ResourceNotFoundContainer} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;