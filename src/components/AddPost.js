import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const AddPost = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();   //prevent refresh

        const checkTitle = blogs.find(
            (blog) => blog.title === title && title
        );
        if (checkTitle) {
            return toast.error("Post already exists !")
        }

        const data = {
            id: blogs.length,
            title,
            image,
            category,
            likeStatus: 0,
            content
        };

        dispatch({ type: "ADD_BLOG", payload: data });
        toast.success("Post added successfully !");
        navigate("/");
    };

    const reset = () => {
        setTitle("");
        setImage("");
        setCategory("");
        setContent("");
    }

    return (
        <div>
            <Link to="/" className='text-decoration-none link-secondary py-2 px-2'>
                <i className="fa fa-home fs-1" aria-hidden="true"></i>
                <span className='fs-5 h1'>&nbsp;Home</span>
            </Link>
            <div className='container'>

                <form onSubmit={handleSubmit}>
                    <div className='row justify-content-center'>
                        <div className='form-group col-sm-9 fs-5'>
                            <label className='form-label h5'>Title :</label>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='form-group col-sm-9'>
                            <input type="text" className='form-control border border-dark'
                                placeholder='Blog Title (max 20 characters)'
                                size="100" required
                                value={title} onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-7'>
                            <div className='row justify-content-end'>
                                <div className='form-group col-lg-9  fs-5'>
                                    <label className='form-label h5'>Image URL :</label>
                                </div>
                            </div>
                            <div className='row justify-content-end'>
                                <div className='form-group col-sm-9'>
                                    <input type="url" className='form-control border border-dark'
                                        placeholder='Image url'
                                        value={image} onChange={e => setImage(e.target.value)}
                                        size="100" required />
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row justify-content-start'>
                                <div className='form-group col-sm-6 mx-0 fs-5'>
                                    <label className='form-label h5'>Category :</label>
                                </div>
                            </div>
                            <div className='row justify-content-start'>
                                <div className='form-group col-sm-6 mx-0'>
                                    <input type="text" className='form-control border border-dark'
                                        placeholder='category'
                                        value={category} onChange={e => setCategory(e.target.value)}
                                        size="100" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='form-group col-sm-9 fs-5'>
                            <label className='form-label h5'>Content :</label>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='form-group col-sm-9'>
                            <textarea type="text" className='form-control border border-dark'
                                placeholder='start writing blog content'
                                value={content} onChange={e => setContent(e.target.value)}
                                cols="102" rows="9" required />
                        </div>
                    </div>
                    <br />
                    <div className='row justify-content-center'>
                        <div className='form-group col-sm-1'>
                            <input type="submit" value="Submit" className='btn btn-block btn-dark' />
                        </div>
                        <div className='form-group col-sm-1'>
                            <input type="reset" onClick={() => reset()} value="Clear" className='btn btn-block btn-danger' />
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default AddPost
