import {Button, Grid, makeStyles} from '@material-ui/core'
import {WarShips} from '../game-elements/war-ships'

export const SectionCreateSea = () => {
  const styles = useStyles()
  const ships = new Array(10).fill(<WarShips />)

  return (
    <Grid container className={styles.box} justify='space-around'>
      <Grid container justify='space-around'>
        {ships}
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
      >Reset</Button>

      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
      >OK</Button>

    </Grid>
  )
}

const useStyles = makeStyles({
  box: {
    width: '95%',
    minHeight: '100px',
    marginTop: '10px',
    background: '#A1FAA4',
  },
  button: {
    height: '35px',
    marginTop: '15px',
    marginBottom: '10px',
  },
})
