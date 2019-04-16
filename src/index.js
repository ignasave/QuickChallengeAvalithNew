import App from './containers/app'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import store, { history } from './store'

import 'sanitize.css/sanitize.css'
import Container from './styled'

const target = document.querySelector('#root')

render(
  <Container>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App/>
        </div>
      </ConnectedRouter>
    </Provider>
  </Container>
  ,
  target
)
