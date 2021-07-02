import ProductList from "../component/ProductList"
import {serverAdd} from "../routeConfig"



export default function ProductsPage({ listProducts }) {
    return (
        <div>
            <ProductList listProducts={listProducts} />
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch( serverAdd + '/api');

    const listProducts =  await response.json();

    return {
        props: {
            listProducts
        }
    }
}