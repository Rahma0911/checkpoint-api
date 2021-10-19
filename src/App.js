import {Switch, Route} from 'react-router';
import './App.css';
import Error from './Error';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={UserList} />
        <Route path='/*' component={Error} />
      </Switch>
    </div>
  );
}

export default App;
