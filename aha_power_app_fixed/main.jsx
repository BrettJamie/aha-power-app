import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Aha Power Solutions</h1>
      <p>Your trusted solar energy partner.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
