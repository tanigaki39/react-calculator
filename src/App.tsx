import React from 'react'
import Calculator from './components/Calculator'
//____________________________________________
//
function App() {
  return (
    <div style={styles.wrapper}>
      <Calculator />
    </div>
  )
}
//____________________________________________
//
const styles = {
  wrapper: {
    width: '100%',
    height: '100vh',
    background: '#fafafa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
//____________________________________________
//
export default App
