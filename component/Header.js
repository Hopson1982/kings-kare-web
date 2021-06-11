import headerStlyes from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <Image className={headerStlyes.logo}
                src='/images/KingsKareLogo.png'
                alt="KingsKareLogo"
                height={200}
                width={200} />
            <h1 className={headerStlyes.title}>
                <span>King's</span> Kare
            </h1>
            <p>Get the best hair care products from King's Kare.</p>
        </>
    )
}

export default Header
