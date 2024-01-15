import Router from './routes'
import './App.css'

function App() {
  return (
    <div className="GuidepointDesign">
      <div className="GuidepointDesignBody" data-bs-theme="light">
        <header className="bg-yellow p-5 mb-0 mb-md-5">
          <a href="https://guidepoint.com" target="_blank" className="h1">
            GUIDEPOINT
          </a>
        </header>
        <div>
          <Router />
        </div>
        <p className="read-the-docs">
          Made by Candelo
        </p>
      </div>
    </div>
  )
}

export default App
