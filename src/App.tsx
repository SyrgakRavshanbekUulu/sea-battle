import { makeStyles } from '@material-ui/core';
import './App.css';
import { GameContent } from './game-content';
import { Navbar } from './header';

function App() {
  const styles = useStyles()
  return (
    <div className="App">
      <Navbar />
      <div className={styles.gameZone}>
        <GameContent />
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  gameZone: {
    marginTop: '30px',
  }
})

export default App;
