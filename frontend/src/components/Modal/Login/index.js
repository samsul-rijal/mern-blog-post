import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import { Input, Button, Gap } from '../../atoms';

function Login(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input label="Email" />
                    <Gap height={12} />
                    <Input label="Passsword" />
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-grid gap-2 col-12">
                        {/* <Button name="Close" className="btn btn-danger col-12" onClick={handleCloseLogin} /> */}
                        <Button name="Login" className="btn btn-primary col-12" variant="primary" onClick={props.handleClose} />
                    </div>
                </Modal.Footer>
                <div className='mx-auto'>
                    {/* <p onClick={switchModalRegister} style={{cursor: 'pointer'}}>Sudah punya akun?  daftar disini</p> */}
                    <p onClick={props.switchModal} style={{ cursor: 'pointer' }}>Belum punya akun? daftar disini</p>
                </div>
            </Modal>
        </div>
    )
}

export default Login