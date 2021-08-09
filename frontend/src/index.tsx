// React
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'

// Third party
import { Toaster } from 'react-hot-toast'
import 'semantic-ui-css/semantic.min.css'

// Project
import App from './App'
import store from './stores'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
