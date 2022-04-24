import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import { Input, Button, Gap } from '../../atoms';

import {register} from '../../../actions/userAction'
import {useDispatch, useSelector } from 'react-redux';

function Register(props) {

    const {registerResult,registerLoading,registerError}=useSelector((state)=> state.UserReducer)
    const dispatch= useDispatch()

    const [form, setForm]=useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(register(form))
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <p className='mx-auto'>{registerResult ? 'Register Success' : registerError}</p>
                <Modal.Body>
                    <Input label="Name" name="name" value={form.name} onChange={handleChange} />
                    <Gap height={12} />
                    <Input label="Email" name="email" value={form.email} onChange={handleChange} />
                    <Gap height={12} />
                    <Input label="Passsword" name="password" value={form.password} onChange={handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-grid gap-2 col-12">
                        <Button
                            name="Register"
                            loading={registerLoading}
                            className="btn btn-primary col-12"
                            variant="primary"
                            onClick={handleSubmit}
                        />
                    </div>
                </Modal.Footer>
                <div className='mx-auto'>
                    <p onClick={props.switchModal} style={{ cursor: 'pointer' }}>Sudah punya akun? login disini</p>
                </div>
            </Modal>
        </div>
    )
}

export default Register