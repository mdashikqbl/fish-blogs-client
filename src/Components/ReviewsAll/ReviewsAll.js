import React from 'react';
import './ReviewsAll.css'

const ReviewsAll = (props) => {
    const { Customer, review, Rating, img } = props.review
    return (
        <div className='reviewall-info'>
            <img src={img} alt="" />
            <div>
                <h2>Name:{Customer}</h2>
                <p>Review:{review}</p>
                <p>Rating:{Rating}</p>
            </div>
        </div>
    );
};

export default ReviewsAll;