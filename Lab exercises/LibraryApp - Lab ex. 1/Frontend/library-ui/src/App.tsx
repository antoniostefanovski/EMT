import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home.component";
import { Header } from "./components/header/header.component";
import Authors from "./pages/authors/authors.component";
import Countries from "./pages/countries/contries.component";
import AddBook from "./pages/books/add-book.component";
import EditBook from "./pages/books/edit-book.component";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/books' element={<Home />}/>
        <Route path='/authors' element={<Authors />}/>
        <Route path='/countries' element={<Countries />}/>
        <Route path='/add-book' element={<AddBook />}/>
        <Route path='/edit-book/:id' element={<EditBook />}/>
      </Routes>
    </>
  );
}

export default App;
