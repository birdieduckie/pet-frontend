import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './core/App/App'

import { store } from 'store/store'

import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

if (module.hot) {
  module.hot.accept()
}
