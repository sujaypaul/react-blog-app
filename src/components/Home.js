import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NoPost from './NoPost';



const Home = () => {

    const blogs = useSelector((state) => state);

    return (
        <div className="container">

            <div className="row">
                <div className='col-md-12 my-4 text-end'>
                    <Link to="/add" className='btn btn-dark shadow'>
                        Add Post
                    </Link>
                </div>

                {blogs.length > 0 ? null : <><NoPost /></>}
                {
                    blogs.map((blog, id) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col text-center'>
                                            <img src={blog.image}
                                                className="img-fluid img-thumbnail" alt="blog " />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col text-start px-4'>
                                            <div className="card-title pt-2 pb-0 mb-0">
                                                <div className='h4 mb-0'>{blog.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row-sm-3 text-end pb-3'>
                                        <div className='badge text-bg-secondary fst-italic text-wrap'>
                                            {blog.category}
                                        </div>
                                    </div>

                                    <div className="card-text text-start px-3 text-secondary">
                                        <p>{blog.content.substring(0, 35)}....</p>
                                    </div>

                                    <Link to={`blog/${blog.id}`} className="btn btn-outline-primary rounded-0 float-end">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
