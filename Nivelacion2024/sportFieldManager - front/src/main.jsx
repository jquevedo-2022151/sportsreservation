import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-rom/client'
import { App } from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
