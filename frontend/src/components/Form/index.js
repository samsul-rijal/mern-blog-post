import React from 'react'
import { Input } from '../atoms'

function Form(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className='form-group'>
                    <Input label="Title" name="title" value={props.title} onChange={props.handleChange} />
                    {/* <label htmlFor="inputTitle" className='form-label'>Title</label> */}
                    {/* <input type="text" id='inputTitle' className='form-control' name='title' value={props.title} onChange={props.handleChange} /> */}
                </div>
                <div className='form-group'>
                    <Input label="Body" name="body" value={props.body} onChange={props.handleChange} />
                    {/* <label htmlFor="inputBody" className='form-label'>Body</label> */}
                    {/* <input type="text" id='inputBody' className='form-control' name='body' value={props.body} onChange={props.handleChange} /> */}
                </div>
                <p>{props.test}</p>
                {props.button}
                {/* <button type='submit' className='btn btn-primary mb-3'>{props.loading ? "Loading . . ." : <>{props.titleButton}</>}</button> */}
                <p>{props.error}</p>
            </form>
        </div>
    )
}

export default Form