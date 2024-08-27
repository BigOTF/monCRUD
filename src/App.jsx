import { useState, useEffect } from 'react'
import Header from './components/Header';
import Forms from './components/forms/Forms';
import PostForm from './components/PostForm';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');  
  const [post, setPost] = useState([]);

  useEffect(() => {

    const fetchDatabase = async() => {
      try {
        const response = await fetch('http://localhost:3000');
        const data = await response.json();
        return setPost(data.todo)
      } catch(err) {
        console.log(err);
      }
    }
    (async() => await fetchDatabase())();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, content: [{value: content}]})
      });
      const newPost = await response.json();
      setPost((prevPosts) => [...prevPosts, newPost]);

      setTitle('');
      setContent('');

    } catch(err) {
      console.log(err);
    }
  }

  const deletPost = async(id) => {
    try {
      const response = fetch(`http://localhost:3000/delete/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        return setPost((prev) => {
          return prev.filter((post) => post._id !== id);
        })
       
      } else {
        console.error('Failed to delete the post');
      }
     
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='pb-[600px]'>
      <Header />
      <Forms title={title} setTitle={setTitle} content={content} setContent={setContent} handleSubmit={handleSubmit}/>
      <PostForm post={post} deletPost={deletPost}/>
    </div>
  )
}

export default App;