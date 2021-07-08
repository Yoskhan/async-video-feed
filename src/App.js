import Layout from './components/Layout/Layout';
import Feed from './components/Feed/Feed';
import UserProfile from './components/UserProfile/UserProfile';

import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/feed" />
          </Route>
          <Route path="/feed" component={Feed} exact />
          <Route path="/feed/:sport" component={Feed} exact />
          <Route path="/profile" component={UserProfile} exact></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
