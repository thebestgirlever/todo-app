import React from 'react';
import Item from './Item';
import styles from './List.module.css';

interface Task {
    text: string;
    id: number;
    completed: boolean;
}

interface ListProps {
    tasks: Task[];
    onDeleteTask: (id: number) => void;
    onToggleTask: (id: number) => void;
    title: string;  
}

const List: React.FC<ListProps> = ({ tasks, onDeleteTask, onToggleTask, title }) => {
    return (
        <div className={styles.list}>
            <h2 className={styles.title}>{tasks.length === 0 ? "" : title}</h2>
            {tasks.map((task) => (
                <Item
                    key={task.id}
                    completed={task.completed}
                    text={task.text}
                    onDelete={() => onDeleteTask(task.id)}
                    onDone={() => onToggleTask(task.id)}
                />
            ))}
        </div>
    );
};

export default List;
