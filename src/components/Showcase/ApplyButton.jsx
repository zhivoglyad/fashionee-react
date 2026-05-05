import Button from '../Button'
import styles from './Shop.module.scss'

const ApplyButton = (props) => {
    const {
        applyFilters,
    } = props

    return (
        <div className={styles.sidebarItem}>
            <Button
                buttonClassName={styles.buttonApply}
                onClick={applyFilters}>
                Apply Filter
            </Button>
        </div>
    )
}

export default ApplyButton