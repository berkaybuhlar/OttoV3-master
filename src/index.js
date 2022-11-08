import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import { themes } from './theme'
import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
      <ThemeProvider theme={themes}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </React.StrictMode>
)
