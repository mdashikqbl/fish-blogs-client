import React from 'react';
import './ReviewHome.css'

const ReviewsHome = (props) => {
    const { Customer, review, Rating, img } = props.review
    return (
        <div className='review-home'>
            <img src={img} alt="" />
            <div>
                <h2>Name:{Customer}</h2>
                <p>Review:{review}</p>
                <p>Rating:{Rating}</p>
            </div>
        </div>
    );
};

export default ReviewsHome;