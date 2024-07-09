'use client'
import { useState, useRef, useContext } from 'react';
import { useImagePageContext } from '@/Contexts/ImagePageContext';

export default function Form() {
    const [file, setFile] = useState<File | null>(null);
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>('');
    const {init} = useImagePageContext()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('text', text || '');

        const res = await fetch('/api/images/post', {
            method: 'POST',
            body: formData,
        });

        init();

        if (ref.current) {
            console.log('c');
            ref.current.value = '';
        }
        setLoading(false);
    };

    return (
        <div>
            <h1>Upload a File</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <input type="text" onChange={handleTextChange} ref={ref}/>
                <button type="submit">Upload</button>
            </form>
            {loading && <p>Loading...</p>}
        </div>
    );
}