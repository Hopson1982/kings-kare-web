import ProductList from "../component/ProductList"
import {server} from "../routeConfig"
import handler from "./api";


export default function ProductsPage({ listProducts }) {
    return (
        <div>
            <ProductList listProducts={listProducts} />
        </div>
    )
}

export const getStaticProps = async () => {
    // console.log(handler.get);
    // handler.get(async (req, res) => {

    //     let cursor = await req.db.collection('products').find()
    //     const doc = await cursor.toArray();
    //     // console.log(doc);
    //     res.json(doc);
    // });
    const response = await fetch( server + '/api');

    const listProducts = await response.json();

    return {
        props: {
            listProducts
        }
    }
}