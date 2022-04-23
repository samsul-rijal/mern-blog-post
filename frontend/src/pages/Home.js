import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListBlog } from '../actions/blogAction'
import {ListBlog} from '../components'

function Home() {
    const { getListBlogResult, getListBlogLoading, getListBlogError } = useSelector((state) => state.BlogReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListBlog())
    }, [dispatch])

    return (
        <div>
            <h4 className='mt-5 mb-3'>List Blog</h4>
            <div className='d-flex flex-wrap justify-content-between'>
            {getListBlogResult ? (
                getListBlogResult.map((blog) => {
                    return (
                        <div key={blog.id}>
                            <ListBlog title={blog.title} body={blog.body} />
                        </div>
                    )
                })
            ) : getListBlogLoading ? (
                <p>Loading . . . </p>
            ) : (
                <p>{getListBlogError ? getListBlogError : "Data Kosong"}</p>

            )}
            </div>
        </div>
    )
}

export default Home