

const ProductCard = ({product}) => {
    return (
        <div>
            
            <div>
            <h2>{product.name}</h2>
            <h2>{product.brand}</h2>
            </div>
        </div>
    );
};

export default ProductCard;