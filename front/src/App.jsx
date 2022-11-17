import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import './App.css'
import Home from './pages/Home'
import Article from './pages/Article'

const queryClient = new QueryClient()

function App() {
  return (
	  <QueryClientProvider client={queryClient}>
		  <BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='article/:articleId' element={<Article />} />
			</Routes>
		  </BrowserRouter>
	  </QueryClientProvider>
  );
}

export default App;
