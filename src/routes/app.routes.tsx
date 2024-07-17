import { Routes, Route } from 'react-router-dom'
import { Search } from '../pages/search'
import { Dashboard } from '../pages/dashboard'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Search />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}