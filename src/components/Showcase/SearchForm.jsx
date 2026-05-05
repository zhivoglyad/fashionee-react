import styles from './Shop.module.scss'
import search from '../../assets/icons/search.svg'

const SearchForm = (props) => {
    const {
        searchValue,
        setSearchValue,
    } = props

    return (
        <div className={styles.searchForm}>
            <form onSubmit={e => e.preventDefault()}>
                <input
                    type='text'
                    placeholder='Search'
                    className={`${styles.search} ${styles.input}`}
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)} />
                <img src={search} alt='Search Icon' className={styles.searchIcon} />
            </form>
        </div>
    )
}

export default SearchForm