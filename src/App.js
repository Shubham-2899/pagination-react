import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './Components/Pagination';
import Posts from './Components/Posts';

function App() {
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(10);

    useEffect(()=>{
      const fetchPosts=async ()=>{
        setLoading(true);
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
      }
      fetchPosts();
    },[])

    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);

    const paginate=(pageNumber)=> setCurrentPage(pageNumber);

  return (
    <div className="App">
     <h2>Pagination</h2>
     <Posts posts={currentPosts} loading={loading}></Posts>
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
    </div>
  );
}

export default App;
