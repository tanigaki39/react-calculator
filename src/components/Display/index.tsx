/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
//____________________________________________
//
type DisplayProps = {
  formula: string
  value: string
}
//____________________________________________
//
const Display: React.FC<DisplayProps> = ({ formula, value }) => (
  <div css={styles.root}>
    {formula && <div css={styles.formula}>{formula}</div>}
    <div css={styles.value}>{value}</div>
  </div>
)
//____________________________________________
//
const styles = {
  root: css({
    height: 80,
    background: '#ccc',
    padding: '1em',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'right',
  }),

  value: css({
    fontSize: 24,
  }),

  formula: css({
    fontSize: 12,
    margiBottom: '1em',
  }),
}
//____________________________________________
//
export default Display
