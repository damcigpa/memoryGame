'use client'
import React, { ChangeEventHandler, useState} from "react";

export default function User() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const handleNameInput: ChangeEventHandler<HTMLInputElement> = (event ) => {
        setName(event.target.value)
    }

    const handlePassInput: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPass(event.target.value)
    }

    const handleEmailInput: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value)
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const formData = new FormData();
     
        formData.append('name', name || '');
        formData.append('password', pass || '');
        formData.append('email', email || '');

        const res = await fetch('/api/user/post', {
            method: 'POST',
            body: formData,
        });

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' value={name} onChange={handleNameInput}/>
                <input type="text" name='password' value={pass} onChange={handlePassInput}/>
                <input type="text" name='email' value={email} onChange={handleEmailInput} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}