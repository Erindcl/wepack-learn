import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Home from './pages/Home'

const render = () => {
	ReactDom.render(
		<AppContainer>
			<Home />
		</AppContainer>,
		document.getElementById('root')
	)
}

if (module.hot) {
	module.hot.accept(() => {
		render()
	})
}

render()