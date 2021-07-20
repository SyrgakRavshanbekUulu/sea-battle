import {Grid, makeStyles} from '@material-ui/core'
import {WarShips} from '../game-elements/war-ships'

export const SectionCreateSea = () => {
  const styles = useStyles()
  return (
    <Grid container className={styles.box} justify='space-around'>
      <WarShips />
      <WarShips />
      <WarShips />
      <WarShips />
      <WarShips />
      <WarShips />
      <WarShips />
      <WarShips />
      <WarShips />
      <WarShips />
    </Grid>
  )
}

const useStyles = makeStyles({
  box: {
    height: '25%',
    width: '95%',
    marginTop: '10px',
    background: 'green',
  },
})
