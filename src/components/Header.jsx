import logo from '/logo-name.svg'
import { useState } from 'react'

function Header() {
  const [now, setNow] = useState(new Date())
  // const now = new Date()

  setInterval(() => setNow(new Date()), 1000)
  const name = 'Result'
  return (
    <header>
      <img src={logo} alt={name} />
      {/* <h3>Agat nahui</h3> */}
      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header
