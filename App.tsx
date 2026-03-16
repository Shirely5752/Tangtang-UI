// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>  {/* 这里是已经包裹了 Router */}
            <Switch>
                <Route path="/" exact>
                    <h1>Welcome to My Website!</h1>
                </Route>
                {/* 其他路由 */}
            </Switch>
        </Router>
    );
};

export default App;
