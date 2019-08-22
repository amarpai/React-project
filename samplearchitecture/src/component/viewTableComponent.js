// Functional component (not required to use this)

import React, { useState, useEffect } from 'react';
import AlertDialogu from '../component/dialogComponent'
import { lightBlue } from '@material-ui/core/colors';

const ViewTableComponent = (props) => {

  const [counter, setCounter] = useState(0)
  const [openDialogu, setOpenDialogu] = useState(false)

  // if props changed call the effect
  useEffect(() => {
    console.log("use effect")
  }, [props.data.customerId])

  const clickEvent = () => {
    alert("i am clicked")
  }

  return (
    <div >
      <ul onClick={clickEvent}>
        <li>
          {props.data.customerId}
        </li>
        <li>
          {props.data.customerName}
        </li>
        <li>
          {props.data.customerAge}
        </li>
        <li>
          {props.data.customerCountry}
        </li>
      </ul>
      <div style={{ backgroundColor: 'yellow' }}>{counter}</div>
      <button style={{ marginRight: '5px' }} onClick={() => setCounter(counter + 1)}>Increment</button>
      <button style={{ marginRight: '5px' }} onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button style={{ marginRight: '5px' }} onClick={() => setCounter(0)}>Reset</button>
      <button style={{ marginRight: '5px' }} onClick={() => setOpenDialogu(true)}>Open Dialog</button>
      <AlertDialogu open={openDialogu} setOpenDialogu={setOpenDialogu} />

    </div>
  )
}

export default ViewTableComponent;