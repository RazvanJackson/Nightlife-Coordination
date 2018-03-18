import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import boxes_reducer from '../reducers/boxes-reducer'

const middleware = applyMiddleware(thunk, createLogger())


export default createStore(boxes_reducer,middleware)