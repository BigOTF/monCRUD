import { useState, useEffect } from 'react'
import Header from './components/Header';
import Forms from './components/forms/Forms';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');  

  useEffect(() => {

    const fetchDatabase = async() => {
      try {
        const res = await fetch('http://localhost:3000');
        const data = await res.json();
        console.log(data);
      } catch(err) {
        console.log(err);
      }
    }
    fetchDatabase()
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ title, content }) 
      })
    } catch(err) {
      console.log(err);
    }
  }


  return (
    <div>
      <Header />
      <Forms title={title} setTitle={setTitle} content={content} setContent={setContent} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default App;