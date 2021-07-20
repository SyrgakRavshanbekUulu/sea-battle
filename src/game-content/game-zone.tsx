import {Grid, makeStyles} from '@material-ui/core'
import {Square} from './square'

const state = new Array<number>()
state[99] = 0
state.fill(0)

export const GameZone = () => {
  const styles = useStyles()
  const squaries = []
  for (let i:number = 0; i < 100; i++) {
    squaries[i] = <Square
      state={state[i]}
      key={i}
      onClick={() => state[i] = 1}/>
  }
  return (
    <Grid container direction="column" alignItems="center">
      <h2>Gamer</h2>
      <Grid container className={styles.box}>
        {squaries}
      </Grid>
    </Grid>
  )
}
const onClick = (e: Event) => {
  console.log(e.target)
}
const useStyles = makeStyles({
  box: {
    width: '80%',
    height: '70%',
    background: '#d1d1d1',
    marginTop: '10px',
  },
})
