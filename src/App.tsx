import {makeStyles} from '@material-ui/core';
import {GameContent} from './game-content';
import {Navbar} from './components/header';
import {UserName} from './components/start-game/user-name';

function App() {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <Navbar />
      <UserName />
      <div className={styles.gameZone}>
        <GameContent />
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  gameZone: {
    marginTop: '30px',
  },
  main: {
    // margin: 'auto',
  },
});

export default App;
