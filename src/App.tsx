import '@/config/i18n'
import Layout from '@/layout'
import Footer from '@v/Footer'
import Nav from '@v/Nav'
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import './base.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Layout />
      <Footer />
    </BrowserRouter>
  )
}

export default hot(module)(App)
