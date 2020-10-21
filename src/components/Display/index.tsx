import * as React from 'react'
//____________________________________________
//
type DisplayProps = {
  formula: string
  value: string
}
//____________________________________________
//
const Display: React.FC<DisplayProps> = ({ formula, value }) => (
  <div>
    {formula && <div>{formula}</div>}
    <div>{value}</div>
  </div>
)
//____________________________________________
//
export default Display
