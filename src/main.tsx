import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Signal ready state to Figma Make preview frame and parent container
if (typeof window !== 'undefined') {
  ;(window as any).__FIGMA__ = Object.assign((window as any).__FIGMA__ ?? {}, { ready: true })
  window.dispatchEvent(new CustomEvent('figma.ready'))
  document.dispatchEvent(new CustomEvent('figma.ready'))
  try {
    window.parent?.postMessage({ type: 'figma.ready' }, '*')
  } catch {
    // ignore cross-origin restrictions
  }
}
