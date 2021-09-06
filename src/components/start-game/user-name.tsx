import {Button, Grid, makeStyles, TextField} from '@material-ui/core'
import {useState} from 'react'

export const UserName = () => {
  const styles = useStyles()
  const [gamer1, setGamer1] = useState('')
  const [gamer2, setGamer2] = useState('')
  return (
    <Grid
      className={styles.mainBox}
      container
      justify="center"
      direction="column"
    >
      <h2>Name of gamers</h2>
      <Grid
        className={styles.inputField}
        container
        justify="space-around"
      >
        <TextField
          variant="outlined"
          label="gamer 1"
          type="text"
          onChange={(event) => setGamer1(event?.target.value)}
        />
        <TextField
          variant="outlined"
          label="gamer 2"
          type="text"
          onChange={(event) => setGamer2(event?.target.value)}
        />
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        className={styles.startButtton}
        onClick={() => hundleClick(gamer1, gamer2)}
      >START</Button>
    </Grid>
  )
}

function hundleClick(gamer1: string, gamer2: string) {
  console.log('gamer1: ', gamer1)
  console.log('gamer2:', gamer2)
}

const useStyles = makeStyles({
  mainBox: {
    width: '800px',
    alignItems: 'center',
    background: '#A1FAA4',
    margin: 'auto',
    marginTop: '15px',
    borderRadius: '5px',
  },
  startButtton: {
    width: '70px',
    marginBottom: '15px',
  },
  inputField: {
    paddingBottom: '15px',
    paddingTop: '20px',
  },
})
