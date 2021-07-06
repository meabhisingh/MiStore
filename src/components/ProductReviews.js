import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
    return (
        <div className="ProductReviews">
           
        {productReviews.map((item,index)=>(

<ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />


        ))}
             
        </div>
    )
}

export default ProductReviews
