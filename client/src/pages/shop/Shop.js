import styles from './Shop.module.css';
import { Item } from './Item';

export default function Shop() {
    return (
        <div className={styles.wrapper}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}
