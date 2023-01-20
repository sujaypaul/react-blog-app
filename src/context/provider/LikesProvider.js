import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

const MyContext = createContext();



function MyProvider({ children }) {
    const blogs = useSelector((state) => state);

    const find = (id) => {
        const blog = blogs.find(like => like.id === parseInt(id));
        if (blog) {
            return blog.likeStatus;
        }
        else {
            return null;
        }
    }

    const toggle = (id) => {
        const blog = blogs.find(like => like.id === parseInt(id));
        if (blog.likeStatus === 1) {
            blog.likeStatus = 0;
        } else {
            blog.likeStatus = 1;
        }
    }

    const value = {
        find,
        toggle
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
}

export function LikeProvider() {
    return useContext(MyContext);
}

export default MyProvider