import Header from '@/containers/common/Header'
import Parent from '@/containers/Parent'
import store from '@/store'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

render(
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme()}>
      <Router>
        <>
          <Route path="/" component={Header} />
          <Route path="/" component={Parent} exact />
        </>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
