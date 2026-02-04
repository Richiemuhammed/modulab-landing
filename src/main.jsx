import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { PostHogProvider } from 'posthog-js/react'

const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

const posthogOptions = {
  api_host: posthogHost,
  capture_pageview: true,
  persistence: 'localStorage+cookie',
}

const AppWithProviders = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {posthogKey ? (
      <PostHogProvider apiKey={posthogKey} options={posthogOptions}>
        <AppWithProviders />
      </PostHogProvider>
    ) : (
      <AppWithProviders />
    )}
  </StrictMode>,
)
