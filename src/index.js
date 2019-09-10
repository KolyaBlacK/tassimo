import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import ContainerApp from './containers/ContainerApp'

render(
  <Provider store={store}>
    <ContainerApp />
  </Provider>,
  document.getElementById('root')
);
