import React from 'react';

const ProductRow = (props) => (
    <div className="row">
        <span>{props.product.name}</span>
        <span>{props.product.price}</span>
    </div>
)

export default ProductRow;