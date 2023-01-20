import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';




const EditPost = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state);

    const currentBlog = blogs.find(blog => blog.id === parseInt(id));

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (currentBlog) {
            setTitle(currentBlog.title);
            setImage(currentBlog.image);
            setCategory(currentBlog.category);
            setContent(currentBlog.content);
        }
    }, [currentBlog]);

    const handleSubmit = (e) => {
        e.preventDefault();   //prevent refresh

        const checkTitle = blogs.find(
            (blog) => blog.id !== parseInt(id) && blog.title === title
        );
        if (checkTitle) {
            return toast.error("Post already exists !")
        }

        const data = {
            id: parseInt(id),
            title,
            image,
            category,
            likeStatus: currentBlog.likeStatus,
            content
        }

        dispatch({ type: "UPDATE_BLOG", payload: data });
        toast.success("Post updated successfully !");
        navigate(-1);
    };

    const reset = () => {
        setTitle("");
        setImage("");
        setCategory("");
        setContent("");
    }


    return (
        <div>
            {
                currentBlog ? (
                    <>
                        <div className='row mx-0'>
                            <div className='col-sm-2'>
                                <button onClick={() => navigate(-1)} className='text-decoration-none btn btn-link link-secondary px-2 py-2'>
                                    <i className="fa fa-arrow-left fs-1" aria-hidden="true"></i>
                                    <span className='fs-5 h1'>&nbsp;Back</span>
                                </button>
                            </div>
                            <div className='col-lg-8  text-center'>
                                <div className='h2 py-2'>Edit post</div>
                            </div>
                        </div>


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

                    </>
                ) : (
                    <div>

                        <div className='row mx-0'>
                            <div className='col-sm-2'>
                                <button onClick={() => navigate(-1)} className='text-decoration-none btn btn-link link-secondary px-2 py-2'>
                                    <i className="fa fa-arrow-left fs-1" aria-hidden="true"></i>
                                    <span className='fs-5 h1'>&nbsp;Back</span>
                                </button>
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

export default EditPost
