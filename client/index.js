import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import IndexPage from './pages/index-page'
import NotFoundPage from './pages/notfound-page'

import store from './store/store'


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route exact path='/' component={IndexPage}/>
                <Route path='*' component={NotFoundPage} />
            </Switch>
        </Provider>
    </BrowserRouter>
, document.querySelector('#root'))