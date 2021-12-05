import React from 'react'
import './style.css'
function index({ data }) {
    return (
        <div className="container">
            {data.map((product, index) => (
                <div className="flex_products" key={index}>
                    <div className="content">
                        <div className="content_title">
                            <h2>{product.head_title}</h2>
                            <p>{product.head_detail}</p>
                        </div>
                        <div className="content_icon">
                            <div className="row_icon">
                                <div className="icon">
                                    <img src={product.img} />
                                    <span>{product.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
export default index