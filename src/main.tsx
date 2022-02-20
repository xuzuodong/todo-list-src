import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store'

;(window as any).__DEV__ = process.env.NODE_ENV === 'development'

const app = document.getElementById('app')

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    app
)
