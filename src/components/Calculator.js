import React, { useState } from 'react'

function Calculator() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    function num1Handler(event) {
        setNum1(event.target.value)
    }
    function num2Handler(event) {
        setNum2(event.target.value)
    }

    function isInputValid() {
        if(num1 === '' && num2 === '') {
            setSuccessMsg('')
            setResult('')
            setErrorMsg('Error: Please enter both the numbers')
            return false;
        }
        if(num1 === '') {
            setSuccessMsg('')
            setResult('')
            setErrorMsg('Error: Please enter first number')
            return false;
        }
        if(num2 === '') {
            setSuccessMsg('')
            setResult('')
            setErrorMsg('Error: Please enter second number')
            return false;
        }
        
        if(isNaN(Number(num1)) && isNaN(Number(num2))) {
            setSuccessMsg('')
            setResult('')
            setErrorMsg('Error: Please enter valid numbers')
            return false;
        }
        if(isNaN(Number(num1))) {
            setSuccessMsg('')
            setResult('')
            setErrorMsg('Error: Please enter valid first number')
            return false;
        }
        if(isNaN(Number(num2))) {
            setSuccessMsg('')
            setResult('')
            setErrorMsg('Error: Please enter valid second number')
            return false;
        }

        return true;
    }

    function additionHandler() {
        if(isInputValid()) {
            const result = Number(num1) + Number(num2)
            setResult(`Result: ${result}`)
            setErrorMsg('')
            setSuccessMsg('Success: Your result is shown above')
        }
    }
    function subtractionHandler() {
        if(isInputValid()) {
            const result = Number(num1) - Number(num2)
            setResult(`Result: ${result}`)
            setErrorMsg('')
            setSuccessMsg('Success: Your result is shown above')
        }
    }
    function divisionHandler() {
        if(isInputValid()) {
            const result = Number(num1) / Number(num2)
            setResult(`Result: ${result}`)
            setErrorMsg('')
            setSuccessMsg('Success: Your result is shown above')
        }
    }
    function multiplyHandler() {
        if(isInputValid()) {
            const result = Number(num1) * Number(num2)
            setResult(`Result: ${result}`)
            setErrorMsg('')
            setSuccessMsg('Success: Your result is shown above')
        }
    }


  return (
    <div className='card'>
        {/* input field for number 1 */}
        <label htmlFor="num1">Number 1: </label>
        <input type="text" name="num1" id="num1" placeholder='Enter first number'
            value={num1} onChange={num1Handler}
        />
        
        {/* input field for number 2 */}
        <label htmlFor="num1">Number 2: </label>
        <input type="text" name="num1" id="num1" placeholder='Enter second number'
            value={num2} onChange={num2Handler}
        />

        {/* buttons */}
        <h3>Operations</h3>
        <div className='button-box'>
            <button onClick={additionHandler}>+</button>
            <button onClick={subtractionHandler}>-</button>
            <button onClick={divisionHandler}>/</button>
            <button onClick={multiplyHandler}>*</button>
        </div>

        {/* error message */}
        {errorMsg && <p className='error'>{errorMsg}</p>}

        {/* output */}
        {result && <p className='result'>{result}</p>}

        {/* success message */}
        {successMsg && <p className='success'>{successMsg}</p>}
    </div>
  )
}

export default Calculator