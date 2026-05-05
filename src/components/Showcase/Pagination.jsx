import styles from './Shop.module.scss'
import { useMemo } from 'react'
import leftPaginArrow from '../../assets/icons/left-pagin-arrow.svg'
import rightPaginArrow from '../../assets/icons/right-pagin-arrow.svg'

const Pagination = (props) => {
    const {
        activePage,
        setActivePage,
        totalPages,
    } = props

    const pagination = useMemo(
        () => Array.from({ length: totalPages }, (_, i) => i + 1),
        [totalPages]
    );

    const handlePrev = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
        }
    };

    const handleNext = () => {
        if (activePage < pagination.length) {
            setActivePage(activePage + 1);
        }
    };

    return (
        <div className={styles.pagination}>
            <div className={styles.buttonLeft} onClick={handlePrev}>
                <img src={leftPaginArrow} alt='Arrow left' />
            </div>
            <div className={styles.pages}>
                {pagination.map((page) => (
                    <div key={page} className={`${styles.page} ${activePage === page ? styles.activePage : ''}`} onClick={() => setActivePage(page)}>{page}</div>
                ))}
            </div>
            <div className={styles.buttonRight} onClick={handleNext}>
                <img src={rightPaginArrow} alt='Arrow right' />
            </div>
        </div>
    )
}

export default Pagination