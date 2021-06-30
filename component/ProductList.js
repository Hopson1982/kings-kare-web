import ProductItem from "./ProductItem";
import productStyles from '../styles/Product.module.css'

const ProductList = ({ listProducts }) => {
    return (
        <div className={productStyles.grid}>
            {listProducts.map(product => (
                <ProductItem key={product._id} product={product} />
            ))}
        </div>
    )
}

export default ProductList