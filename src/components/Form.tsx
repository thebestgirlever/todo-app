import React, { useState } from 'react';
import styles from './Form.module.css';

interface FormProps {
    addTask: (text: string) => void; 
}

const Form: React.FC<FormProps> = ({ addTask }) => {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();  
        if (text.trim()) {
            addTask(text);  
            setText('');  
        }
    };

    return (
        <form className={styles.block} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className={styles.button} type="submit">Add</button>
        </form>
    );
};

export default Form;
