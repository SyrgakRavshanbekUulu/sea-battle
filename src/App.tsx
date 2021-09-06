import {makeStyles} from '@material-ui/core';
import {Route, Switch} from 'react-router-dom';
import {Navbar} from './components/header';
import {HomePage} from './pages/home';
import {NewGame} from './pages/newGame';

function App() {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/new-game' exact component={NewGame}/>
      </Switch>
    </div>
  )
}

const useStyles = makeStyles({
  main: {
    // margin: 'auto',
  },
});

export default App;
