import {useState, useEffect} from 'react';
import styles from './Clock.module.css';

function Relogio(){
    const [currentDate, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className={styles.clock}>
            <p className={styles.hour}>{currentDate.toLocaleTimeString('pt-br')}</p>
            <p className={styles.date}>{currentDate.toLocaleDateString('pt-br')}</p>
        </div>
    )
}

export default Relogio;