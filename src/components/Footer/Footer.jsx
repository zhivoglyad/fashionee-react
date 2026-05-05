import styles from './Footer.module.scss'
import points130 from '../../assets/images/points130.svg'
import logo from '../../assets/icons/logo.svg'
import send from '../../assets/icons/send.svg'
import visa from '../../assets/icons/visa.svg'
import masterCard from '../../assets/icons/master-card.svg'
import payPal from '../../assets/icons/pay-pal.svg'
import payoneer from '../../assets/icons/payoneer.svg'
import points290 from '../../assets/images/points290.svg'
import FindUsLinks from '../FindUsLinks'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.pointsFooterLeft}>
                <img src={points130} alt='Points Footer' />
            </div>
            <div className={styles.container}>
                <div className={styles.footerInfo}>
                    <div className={`${styles.column} ${styles.column1}`}>
                        <div className={styles.logo}>
                            <img src={logo} alt='Logo' />
                        </div>
                        <div className={styles.aboutBrand}>
                            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
                        </div>
                        <FindUsLinks />
                    </div>
                    <div className={`${styles.column} ${styles.column2}`}>
                        <div className={styles.title}>About</div>
                        <ul className={styles.customList}>
                            <li className={styles.item}><a href=''>About us</a></li>
                            <li className={styles.item}><a href=''>Collections</a></li>
                            <li className={styles.item}><a href=''>Shop</a></li>
                            <li className={styles.item}><a href=''>Blog</a></li>
                            <li className={styles.item}><a href=''>Contact us</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.column} ${styles.column3}`}>
                        <div className={styles.title}>Useful links</div>
                        <ul className={styles.customList}>
                            <li className={styles.item}><a href=''>Privacy Policy</a></li>
                            <li className={styles.item}><a href=''>Terms of use</a></li>
                            <li className={styles.item}><a href=''>Support</a></li>
                            <li className={styles.item}><a href=''>Shipping details</a></li>
                            <li className={styles.item}><a href=''>FAQs</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.column} ${styles.column4}`}>
                        <div className={styles.title}>Newsletter</div>
                        <div className={styles.newsletterText}>
                            Subscribe to be the first to hear about deals, offers and upcoming collections.
                        </div>
                        <div className={styles.newsletterForm}>
                            <form action=''>
                                <label>
                                    <input type='text' placeholder='Enter your email' className={styles.input} />
                                    <img src={send} alt='Send' className={styles.sendIcon} />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <div>
                        © All right reserved. Fashionee 2020
                    </div>
                    <div className={styles.paymentMethodsContainer}>
                        <div>Payment methods:</div>
                        <div className={styles.paymentMethods}>
                            <div className={styles.paymentMethod}>
                                <img src={visa} alt='Visa' />
                            </div>
                            <div className={styles.paymentMethod}>
                                <img src={masterCard} alt='Master Card' />
                            </div>
                            <div className={styles.paymentMethod}>
                                <img src={payPal} alt='PayPal' />
                            </div>
                            <div className={styles.paymentMethod}>
                                <img src={payoneer} alt='Payoneer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.pointsFooterRight}>
                <img src={points290} alt='Points Footer' />
            </div>
        </footer>
    )
}

export default Footer