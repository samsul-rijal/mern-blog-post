import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, getListBlog } from '../actions/blogAction'
import { Form, Button } from '../components'

function AddBlog() {
    const { addBlogResult, addBlogLoading, addBlogError } = useSelector((state) => state.BlogReducer)
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        title: '',
        body: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addBlog(form))
    }

    useEffect(() => {
        if (addBlogResult) {
            dispatch(getListBlog())
        }
    }, [addBlogResult, dispatch])

  return (
    <div>
        <h4>Add Blog</h4>
        <Form 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            title={form.title} 
            body={form.body} 
            error={addBlogError}
            button={<Button className="btn btn-primary" name="Add Blog" loading={addBlogLoading}/>} 
        />
    </div>
  )
}

export default AddBlog