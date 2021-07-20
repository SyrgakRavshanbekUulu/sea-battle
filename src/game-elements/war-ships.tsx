import { makeStyles, IconButton } from "@material-ui/core"
import { DirectionsBoat } from "@material-ui/icons"

export const WarShips = () => {
  const styles = useStyles()
  return(
    <div className={styles.ship}>
      <IconButton draggable={true}><DirectionsBoat color='secondary'/></IconButton>
    </div>
  )
}

const useStyles = makeStyles({
  ship: {
    width: '40px',
    height: '40px',
  }
})