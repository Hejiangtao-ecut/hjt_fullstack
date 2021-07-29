import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts';
import PageNations from './components/pageNation';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  // 页码
  const [currentPage, setCurrentPage] = useState(1);
  // 总页数
  const [totalPage, setTotalPage] = useState(100);
  // 单页信息条数
  const [prePageNum, setPrePageNum] = useState(10);

  useEffect(() => {
    const req = async () => {
      setLoading(true);
      // 获取数据
      const res = await axios.get('http://localhost:1236/posts', { currentPage, prePageNum });
      setPosts(res.data.content);
      setTotalPage(res.data.totalPage);
      setLoading(false);
    }
    req();
  }, [currentPage])
  
  function requestPosts(page) {
    if (page === '...') {
      return
    }
    setCurrentPage(page);
  }

  return (
    <div className="container">
      <h1 className="my-project-title">我的文章</h1>
      <Posts loading={loading} posts={posts} />
      <PageNations totalPage={totalPage} requestPosts={requestPosts} currentPage={currentPage} />
    </div>
  );
}

export default App;
