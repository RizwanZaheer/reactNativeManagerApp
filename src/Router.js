import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="login"
          title="Please Login"
          component={LoginForm}
        // initial
        />
        <Scene
          key="employeeList"
          title="Employees"
          component={EmployeeList}
          initial
        />
      </Stack>
    </Router>
  );
}

export default RouterComponent;