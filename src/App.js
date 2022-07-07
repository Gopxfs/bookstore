import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksPage from './pages/Books';
import CategoriesPage from './pages/Categories';
import Navbar from './components/NavBar';

class App extends React.PureComponent {
  componentDidMount() {
    document.title = 'Bookstore';
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
   
      </>
    );
  }
}

export default App;
