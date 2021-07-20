import {Button, Grid, makeStyles, TextField} from '@material-ui/core'

export const UserName = () => {
  const styles = useStyles()
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
        />
        <TextField
          variant="outlined"
          label="gamer 2"
          type="text"
        />
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        className={styles.startButtton}
      >START</Button>
    </Grid>
  )
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
