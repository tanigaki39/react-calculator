import * as React from 'react'
import Button from '../Button'
import Display from '../Display'
//____________________________________________
//
const Component: React.FC = () => {
  const [operator, setOperator] = React.useState('')
  const [result, setResult] = React.useState(0)
  const [display, setDisplay] = React.useState('0')
  const [calcReady, setCalcReady] = React.useState(true)

  const calculate = (value: number) => {
    let newResult = result
    switch (operator) {
      case '+':
        newResult += value
        break
      case '-':
        newResult -= value
        break
      case '*':
        newResult *= value
        break
      case '/':
        newResult /= value
    }
    return newResult
  }

  const handleClickNumber = (value: string) => {
    if (display === '0') {
      setDisplay(value)
      setCalcReady(true)
    } else {
      if (!calcReady) {
        setDisplay(value)
        setCalcReady(true)
      } else {
        setDisplay(`${display}${value}`)
      }
    }
  }

  const handleClickOperator = (value: string) => {
    if (operator) {
      const newResult = calculate(Number(display))
      setResult(newResult)
    } else {
      setResult(Number(display))
    }

    setDisplay('0')
    setOperator(value)
  }

  const handleClickEqual = () => {
    const newResult = calculate(Number(display))
    setDisplay(`${newResult}`)
    setResult(0)
    setOperator('')
    setCalcReady(false)
  }

  return (
    <div>
      <Display
        value={display}
        formula={
          result ? (operator ? `${result} ${operator}` : `${result}`) : ''
        }
      />
      <div style={styles.buttons}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => (
          <Button key={item} value={`${item}`} onClick={handleClickNumber} />
        ))}
      </div>
      <div style={styles.operations}>
        {['+', '-', '*', '/'].map((item) => (
          <Button key={item} value={`${item}`} onClick={handleClickOperator} />
        ))}
      </div>
      <Button value={`=`} onClick={handleClickEqual} />
    </div>
  )
}
//____________________________________________
//
const styles = {
  result: {
    background: '#f5f5f5',
    padding: 16,
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
  },
  operations: {
    display: 'flex',
  },
}
//____________________________________________
//
export default Component
