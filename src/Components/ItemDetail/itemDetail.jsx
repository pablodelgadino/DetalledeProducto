import React from 'react';
import './itemDetail.css'

export const ItemDetail = ({data}) => {
    return (

<div className='detail_cakes'>
    <img className='detail_cakes_img' src={data.img} alt="" />
    <div>
    <h1>{data.title}</h1>
    </div>
</div> 
    
    );
}

export default ItemDetail;