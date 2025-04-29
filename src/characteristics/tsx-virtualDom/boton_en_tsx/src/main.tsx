import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import React from 'react'

const button2 = React.createElement('button', { onClick: () => alert('Hola mundo') }, 'Pulsame')

const button = createElement('button', { onClick: () => alert('Hola mundo') }, 'Pulsame')

createRoot(document.getElementById('root')!).render(button)
createRoot(document.getElementById('root2')!).render(button2)