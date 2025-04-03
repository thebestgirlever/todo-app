import styles from './Item.module.css';
import Delete from '../assets/delete.svg'

interface ItemProps { 
    text: string;
    completed: boolean; 
    onDelete: () => void;
    onDone: () => void;
}

function Item({ text, completed, onDelete, onDone }: ItemProps) { 

    return (
        <div className={styles.task}>
            <input type="checkbox" checked={completed} onClick={onDone} />
            <label className={styles.text}>{text}</label>
            <img className={styles.delete} src={Delete} onClick={onDelete} alt="Icon" />
        </div>
    );
}

export default Item;
