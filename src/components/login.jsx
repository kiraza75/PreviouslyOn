import React, { useRef, useState } from 'react';
import axios from '../config';
import md5 from 'md5';
import { useHistory } from "react-router-dom";
import { API_KEY } from '../config';


const LogForm = props => {
    const [input, setInput] = useState({
        mail: "",
        password: "",
    })
    const refEmail = useRef();
    const refPass = useRef();

    const handleChange = e => {

        let inputValue = e.target.value
        console.log(inputValue)
        
        setInput({
            ...input,
            [e.target.name]: inputValue
        })
        console.log(input);
    }
    const getAccess =  e => {

        e.preventDefault();
        const user = {
            client_id: API_KEY,
            login: input.mail,
            password: md5(input.password)
        };


        axios.post(`/members/auth`, user)
            .then(res => {
                console.log(res.data.user)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_id', res.data.user.id)
                props.history.push('/home')
            });

    }

    return (
        <>
            <form>
                <input type="text" name="mail"  onChange={handleChange} />
                <input type="password" name="password" onChange={handleChange} />
                <button type="submit" onClick={getAccess}>Connexion</button>
            </form>
        </>
    );


}


export default LogForm;