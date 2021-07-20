import {AppBar, Toolbar, Button, Grid, makeStyles} from "@material-ui/core"
import {DirectionsBoat, SportsEsports} from "@material-ui/icons"

export const Navbar = () => {
  const styles = useStyles()
  return (
    <AppBar position='static'>
      <Grid container className={styles.grid} justify='space-between'>
        <Toolbar className={styles.toolbar}>
            <Button startIcon={<DirectionsBoat fontSize="large" />}>
              Sea Battle
            </Button>

            <Button startIcon={<SportsEsports fontSize="large" />}>
              New Game
            </Button>             
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
  }
})