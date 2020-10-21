import * as React from 'react'
//____________________________________________
//
type ButtonProps = {
  value: string
  onClick: (value: string) => void
}
//____________________________________________
//
const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  const handleClickButton = () => {
    onClick(value)
  }

  return (
    <button style={styles.button} onClick={handleClickButton}>
      {value}
    </button>
  )
}
//____________________________________________
//
const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    fontSize: 16,
  },
}
//____________________________________________
//
export default Button
