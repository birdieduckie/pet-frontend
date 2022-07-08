import { createRoot } from 'react-dom/client'

import { App } from './screens/App/App'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App num={1234} />)

if (module.hot) {
  module.hot.accept()
}
