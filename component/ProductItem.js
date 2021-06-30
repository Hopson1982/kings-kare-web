import productStyles from '../styles/Product.module.css'

const ProductItem = ({ product }) => {
    return (
        <div className={productStyles.card}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>add to cart</button>
        </div>
    )
};

export default ProductItem