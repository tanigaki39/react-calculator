/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
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
    <button css={styles.button} onClick={handleClickButton}>
      {value}
    </button>
  )
}
//____________________________________________
//
const styles = {
  button: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    padding: '1.5em',
    backgroundColor: '#eee',
    border: 0,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#e5e5e5',
    },
  }),
}
//____________________________________________
//
export default Button
