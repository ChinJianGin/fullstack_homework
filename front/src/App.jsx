import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import './App.css'
import Home from './pages/Home'
import Article from './pages/Article'

function App() {
  return (
	  <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path='articles'>
				<Route path='id/:articleId' element={<Article />} />
			</Route>
		</Routes>
	  </BrowserRouter>
  );
}

export default App;
