import styles from './Shop.module.scss'
import bannerSeasonSale from '../../assets/images/banner-season-sale.svg'

const BannerSeasonSale = () => {
    return (
        <div>
            <a href='#'>
                <img src={bannerSeasonSale} alt='Banner Season Sale' className={styles.poster} />
            </a>
        </div>
    )
}

export default BannerSeasonSale