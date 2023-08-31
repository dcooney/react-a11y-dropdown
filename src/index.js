import React from 'react'
import {createRoot} from 'react-dom/client'
import Demo from './Demo'
import './index.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<Demo />)
