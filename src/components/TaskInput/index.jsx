import { useState } from 'react';
import styles from './TaskInput.module.css';

export function TaskInput({ addTask }){
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value.trim()) return;
        addTask(value);
        setValue('');
    };

    return (
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <input
             type="text" 
             value={value}
             onChange={e => setValue(e.target.value)}
             placeholder="Digite sua tarefa..."
             className={styles.input} 
             />

             <button type="submit" className={styles.button}>Adicionar</button>
        </form>
    )
};