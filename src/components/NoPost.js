import React from 'react'

const NoPost = () => {
    return (
        <div className='container'>
            <br />
            <div className='row justify-content-center my-5'>
                <div className=' col-sm-6 py-5 text-center text-secondary shadow-lg p-3 mb-5 rounded'>
                    <span className='display-5  fw-bold'>
                        Create a new post
                    </span>
                    <br />
                    <span className='display-6 '>
                        click "Add Post"
                    </span>
                </div>

            </div>

        </div>
    )
}

export default NoPost
