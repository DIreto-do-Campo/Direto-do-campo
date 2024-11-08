
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Context } from './contexts/context'



createRoot(document.getElementById('root')!).render(
  <Context>
    <App />
  </Context>

)
