import { Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard'
import Footer from './pages/Footer'

function App() {
  return (
    <>
    <Switch>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
    {/* <Footer /> */}
    </>
  );
}

export default App;
