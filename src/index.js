import React from 'react';
import ReactDOM from 'react-dom';
import {getUser} from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'

import App from './App'

import './api'

//读取local中保存user，缓存到内存中
const user = getUser()
memoryUtils.user = user
ReactDOM.render( <App/> , document.getElementById('root'));