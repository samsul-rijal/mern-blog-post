import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import { Input, Button, Gap } from '../atoms';

function ModalComponent(props) {

    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const switchModalLogin = () => {
        setShowLogin(false)
        setShowRegister(true)
    }
    const [showRegister, setShowRegister] = useState(false);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const switchModalRegister = () => {
        setShowRegister(false)
        setShowLogin(true)
    }

    return (
        <>
            <span variant="primary" onClick={handleShowLogin}>
                {props.titleLogin}
            </span>

            <Modal show={showLogin} onHide={handleCloseLogin}>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input label="Email" />
                    <Gap height={12}  />
                    <Input label="Passsword" />
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-grid gap-2 col-12">
                        {/* <Button name="Close" className="btn btn-danger col-12" onClick={handleCloseLogin} /> */}
                        <Button name="Login" className="btn btn-primary col-12" variant="primary" onClick={handleCloseLogin} />
                    </div>
                </Modal.Footer>
                <div className='mx-auto'>
                    {/* <p onClick={switchModalRegister} style={{cursor: 'pointer'}}>Sudah punya akun?  daftar disini</p> */}
                    <p onClick={switchModalLogin} style={{cursor: 'pointer'}}>Belum punya akun? daftar disini</p>
                </div>
            </Modal>

            <span variant="primary" onClick={handleShowRegister}>
                {props.titleRegister}
            </span>

            <Modal show={showRegister} onHide={handleCloseRegister}>
                <Modal.Header>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input label="Email" />
                    <Gap height={12}  />
                    <Input label="Passsword" />
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-grid gap-2 col-12">
                        <Button name="Register" className="btn btn-primary col-12" variant="primary" onClick={handleCloseRegister} />
                        {/* <Button size="lg" name="Close" className="btn btn-danger col-12" onClick={handleCloseRegister} /> */}
                    </div>
                </Modal.Footer>
                <div className='mx-auto'>
                    <p onClick={switchModalRegister} style={{cursor: 'pointer'}}>Sudah punya akun? login disini</p>
                </div>
            </Modal>
        </>
    )
}

export default ModalComponent