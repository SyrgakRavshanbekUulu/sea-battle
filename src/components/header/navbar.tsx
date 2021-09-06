import {AppBar, Toolbar, Button, Grid, makeStyles} from '@material-ui/core'
import {DirectionsBoat, SportsEsports} from '@material-ui/icons'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  const styles = useStyles()
  return (
    <AppBar position='static' className={styles.main}>
      <Grid container className={styles.grid} justify='space-between'>
        <Toolbar className={styles.toolbar}>
          <Link to='/' style={{textDecoration: 'none'}}>
            <Button startIcon={<DirectionsBoat fontSize="large" />}>
                Sea Battle
            </Button>
          </Link>
          <Link to='/new-game' style={{textDecoration: 'none'}}>
            <Button startIcon={<SportsEsports fontSize="large" />}>
                  New Game
            </Button>
          </Link>
        </Toolbar>
      </Grid>
    </AppBar>
  )
}

const useStyles = makeStyles({
  grid: {
    maxWidth: '1440px',
    margin: 'auto',
  },
  toolbar: {
    minWidth: '1200px',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
  main: {
    marginBottom: '30px',
  },
})
