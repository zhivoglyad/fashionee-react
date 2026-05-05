import styles from './Shop.module.scss'
import Checkbox from './Checkbox';

const ColorsFilter = (props) => {
    const {
        filters,
        selectedColors,
        setSelectedColors,
    } = props

    const colors = [...filters.colors];

    const toggleColor = (color) => {
        const colorLower = color.toLowerCase();
        setSelectedColors(prev =>
            prev.includes(colorLower)
                ? prev.filter(c => c !== colorLower)
                : [...prev, colorLower]
        )
    };

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Colors</div>
            <div className={styles.sidebarContent}>
                <div className={styles.colors}>
                    {colors.map((color) => (
                        <Checkbox key={color.toLowerCase()}
                            divClassName={styles.color}
                            inputClassName={styles.colorCheckbox}
                            name='color'
                            value={color.toLocaleLowerCase()}
                            id={color.toLocaleLowerCase()}
                            labelClassName={styles.colorName}
                            htmlFor={color.toLocaleLowerCase()}
                            color={color}
                            checked={selectedColors.includes(color.toLowerCase())}
                            onChange={() => toggleColor(color)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColorsFilter