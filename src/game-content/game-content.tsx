import {Grid, makeStyles, Paper} from '@material-ui/core'
import {SectionCreateSea} from './section-create-sea'
import {GameZone} from './game-zone'

export const GameContent = () => {
  const styles = useStyles()

  return (
    <Paper elevation={3} className={styles.content}>
      <Grid container justify="center">
        <SectionCreateSea />
        <GameZone />
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles({
  content: {
    margin: 'auto',
    width: '800px',
    height: '800px',
  },
})

