import React from 'react';
import useReviewsFood from '../../hooks/useReviewsFood';
import ReviewsAll from '../ReviewsAll/ReviewsAll';
import './Reviews.css'

const Reviews = () => {
    const [reviewsFood, setReviewsFood] = useReviewsFood();
    return (
        <div className='reviews-info'>
            {
                reviewsFood.map(review => <ReviewsAll key={review.id} review={review}></ReviewsAll>)
            }
        </div>
    );
};

export default Reviews;