import React from 'react'

import "../styles/ProductReviewCard.css"

const ProductReviewCard = ({image,index,price,name,review}) => {
    return (
        <div className="ProductReviewCard">
            <img src={image} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span> 
            <b>{price}</b> 
        </div>
    )
}

export default ProductReviewCard
