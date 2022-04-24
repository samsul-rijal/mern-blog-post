import React,{useState} from 'react'
import Register from './Register';
import Login from './Login';

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
                {props.btnLogin}
            </span>
            <Login show={showLogin} handleClose={handleCloseLogin} switchModal={switchModalLogin} />
            
            <span variant="primary" onClick={handleShowRegister}>
                {props.btnRegister}
            </span>
            <Register show={showRegister} handleClose={handleCloseRegister} switchModal={switchModalRegister}/>
        </>
    )
}

export default ModalComponent