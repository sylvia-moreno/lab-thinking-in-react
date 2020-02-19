import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
    return (
        props.products.map((product, i) => {
            return <ProductRow product={product} key={i} />
        })
    )
}

export default ProductTable