import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import '../css/styles.scss'
require('../img/favicon.png')
import { AppRouter } from './AppRouter'

ReactDOM.render(<AppRouter />, document.getElementById('app'))
