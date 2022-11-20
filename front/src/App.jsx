import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import Home from './pages/Home'
import Article from './pages/Article'
import blog from './redux/blog'

const queryClient = new QueryClient()

function App() {
  return (
	  <QueryClientProvider client={queryClient}>
		<Provider store={blog}>
		  <BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='article/:articleId' element={<Article />} />
			</Routes>
		  </BrowserRouter>
	  </Provider>
	  </QueryClientProvider>
  );
}

export default App;
