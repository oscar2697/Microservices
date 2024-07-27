import PostCreate from './PostCreate'
import PostList from './PostList'

function App() {
  return (
    <div className='container'>
      <h1>Create a Post</h1>
      <PostCreate/>

      <hr/>

      <h1>Post</h1>
      <PostList/>
    </div>
  )
}

export default App
