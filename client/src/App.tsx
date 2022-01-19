import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PhoneList from './components/PhoneList'
import PhoneDetails from './components/PhoneDetails'
import PhoneForm from './components/PhoneForm'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<PhoneList />} />
            <Route path="new-phone" element={<PhoneForm />} />
            <Route path="phones/:id" element={<PhoneDetails />} />
            <Route path="phones/edit/:id" element={<PhoneForm />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
