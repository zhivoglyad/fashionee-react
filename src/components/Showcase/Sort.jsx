import styles from './Shop.module.scss'

const Sort = (props) => {
    const {
        sortType,
        onChangeSort,
    } = props

    return (
        <div className={styles.sort}>
            <select className={styles.input} value={sortType} onChange={(e) => onChangeSort(e.target.value)}>
                <option value='RELEVANCE'>By relevance</option>
                <option value='NAME_ASC'>from A to Z</option>
                <option value='NAME_DESC'>from Z to A</option>
                <option value='PRICE_ASC'>from low to high</option>
                <option value='PRICE_DESC'>from high to low</option>
            </select>
        </div>
    )
}

export default Sort