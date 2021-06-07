import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport"
                content="width=device-width,initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charet="utf-8" />
            <link rel="icon" href="/images/KingsKareLogo.png" />
            <title>{title}</title>å
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Kings Kare',
    keywords: 'Hair care, hair oil, hair products',
    description: 'Get the best hair care products from King\'s Kare'
}

export default Meta