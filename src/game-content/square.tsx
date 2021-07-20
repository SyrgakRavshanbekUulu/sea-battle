import {Button, makeStyles} from '@material-ui/core'
import {BlurOn, BrightnessHigh} from '@material-ui/icons'
import {useState} from 'react'
import {useEffect} from 'react'

type SquareProps = {
  color?: 'primary' | 'secondary' | 'default',
  state?: number,
  onClick?: () => void
}

export const Square = (props: SquareProps) => {
  const styles = useStyles()
  const [icon, setIcon] = useState<JSX.Element | null>(null)
  useEffect(() => {
    const icon = props.state === 0 ?
    <BlurOn fontSize="large"/> :
      props.state === 1 ?
      null:
    <BrightnessHigh fontSize="large"/>
    setIcon(icon)
  }, [props.state])
  return (
    <Button
      color={props.color || 'primary'}
      className={styles.button}
      onClick={props.onClick}
    >{icon}
    </Button>
  )
}

const useStyles = makeStyles({
  button: {
    width: '50px',
    height: '50px',
    background: 'yellow',
    border: '2px solid blue',
  },
})
