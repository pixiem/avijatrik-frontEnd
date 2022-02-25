import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import useFirebase from '../../Hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useFirebase();
    console.log(user.email);
  
    
    return <Route
        {...rest}
        render={({ location }) => user.email ? (children) : (<Redirect
            to={{
                pathname: "/",
                state: { from: location }
            }}

        />)
        } />;

};

export default PrivateRoute;