import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import styles from './App.scss'

function App() {
  return (
    <Router >
        <div className={styles['page__container']}>
          <Header/>
          <Switch>
            <Route exact path='/'>
                <h1>Home Page</h1>
            </Route>

            <Route path='/signup'>
              <SignUpPage/>
            </Route>

            <Route path='/login'>
              <LogInPage/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
