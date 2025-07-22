import { Route, Routes } from 'react-router-dom'
import NewsPage from './pages/NewsPage'
import DetailNewsPage from './pages/DetailNewsPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<NewsPage />} />
			<Route path='/news/:id' element={<DetailNewsPage />} />
		</Routes>
	)
}

export default App
