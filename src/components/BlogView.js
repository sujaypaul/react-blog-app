import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { LikeProvider } from '../context/provider/LikesProvider';

const BlogView = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state);
    const currentBlog = blogs.find(blog => blog.id === parseInt(id));

    const { find } = LikeProvider();
    const { toggle } = LikeProvider();
    const [like, setLike] = useState(find(id));
    const toggleLike = () => {
        toggle(id);
        if (like === 1) {
            setLike(0)
        } else {
            setLike(1)
        }
    }

    const deleteblog = (id) => {
        dispatch({ type: "DELETE_BLOG", payload: id });
        navigate("/");
        toast.error("Post deleted successfully")
    }


    return (
        <div>

            {
                currentBlog ? (
                    <>
                        <div className='container-fluid' >
                            <div className='row'>
                                <div className='col-sm-2'>
                                    <Link to="/" className='text-decoration-none link-secondary'>
                                        <i className="fa fa-home fs-1" aria-hidden="true"></i>
                                        <span className='fs-4 h1'>&nbsp;Home</span>
                                    </Link>
                                </div>
                                <div className='col-sm-10 text-end'>
                                    <div className='row justify-content-end'>
                                        <div className='col-sm-1 text-end px-0 py-2 text-danger'>
                                            {like === 1 ?
                                                <i className="fa fa-heart fs-3" onClick={() => toggleLike(id)} type="button" ></i>
                                                : <i className="fa fa-heart-o fs-3" onClick={() => toggleLike(id)} type="button" value="like"></i>}
                                        </div>
                                        <div className='col-sm-1 py-2'>
                                            <Link to={`/edit/${currentBlog.id}`} className='link-secondary'>
                                                <i className="fa fa-pencil fs-3" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;
                                        <div className='col-sm-1 text-start px-0'>
                                            <button type="button" onClick={() => deleteblog(currentBlog.id)}
                                                className='link-danger px-4 text-decoration-none btn btn-link'>
                                                <i className="fa fa-trash fs-3" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <br />
                        <div className='container shadow-lg bg-white bg-opacity-50 rounded-5'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-5 mx-0 mt-3 text-center'>
                                    <img src={currentBlog.image}
                                        className="img-fluid" alt=" " />
                                </div>
                            </div>
                            <div className='row justify-content-center display-4 fw-bold text-dark'>
                                {currentBlog.title}
                            </div>
                            <div className='row-sm3 text-end'>
                                <div className='badge text-bg-dark fs-6 fst-italic bg-opacity-100 text-wrap'>{currentBlog.category}</div>
                            </div>
                            <hr /><br />
                            <div className='row justify-content-center mb-3 fs-5'>
                                <div className='col-lg-10 mb-5 justify-content-center'>
                                    {currentBlog.content}
                                </div>
                            </div>
                        </div>

                    </>
                ) : (
                    <div>

                        <div className='row mx-0'>
                            <div className='col-sm-2'>
                                <Link to="/" className='text-decoration-none link-secondary'>
                                    <i className="fa fa-home fs-1" aria-hidden="true"></i>
                                    <span className='fs-4 h1'>&nbsp;Home</span>
                                </Link>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <span><br /><br /><br /><br /><br /><br /><br /><br /></span>
                            <div className='h1 col-sm-5 text-center'>Blog post with id: {id} does not exist</div>
                        </div>

                    </div>
                )}
        </div>
    )
}

export default BlogView
