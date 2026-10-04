import { useContext, useEffect } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Header from './Components/Header'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext'

function App() {

  const {fetchBlogsData} = useContext(AppContext);

  useEffect( () => {
    fetchBlogsData();
  },[]);
  
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App
