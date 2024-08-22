import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(() => {fetchBlogPosts();},[]);
  return (
    <div className='flex flex-col w-full h-full gap-y-6 justify-center items-center' >
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>
  );
}

export default App;
