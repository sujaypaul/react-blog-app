import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddPost from './components/AddPost';
import BlogView from './components/BlogView';
import EditPost from './components/EditPost';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MyProvider from './context/provider/LikesProvider';

const App = () => {
  return (
    <div className="App">
      <ToastContainer theme='colored' />
      <Navbar />
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route path='/add' element={<AddPost />} />

        <Route path='/edit/:id' element={<EditPost />} />

        <Route
          path='/blog/:id'
          element={
            <MyProvider>
              <BlogView />
            </MyProvider>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
