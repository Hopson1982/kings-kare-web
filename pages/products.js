import ProductList from "../component/ProductList"

export default function ProductsPage({ listProducts }) {
    return (
        <div>
            <ProductList listProducts={listProducts} />
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api');
//    const response = await fetch('https://kings-kare-web-16i2k3o2r-hopson1982.vercel.app//api');

    

    const listProducts = await response.json();

    return {
        props: {
            listProducts
        }
    }
}