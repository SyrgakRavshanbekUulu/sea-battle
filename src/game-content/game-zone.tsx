import {Grid, makeStyles} from '@material-ui/core'
import { useState } from 'react'
import { Square } from './square'

let state = new Array<number>()
state[99] = 0
state.fill(0)

export const GameZone = () => {
  const styles = useStyles()
  const [staties, setStaties] = useState([])
  let squaries = []
  for (let i:number = 0; i < 100; i++) {
    squaries[i] = <Square state={state[i]} key={i} onClick={() => state[i] = 1}/>
  }
  return (
    <Grid container className={styles.box}>
      {squaries}
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
  }
})