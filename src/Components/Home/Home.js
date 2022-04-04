import React from 'react';
import './Home.css'
import logo from '../../fish.jpg'
import useReviewsFood from '../../hooks/useReviewsFood';
import ReviewsHome from '../ReviewsHome/ReviewsHome';
import { Link } from 'react-router-dom';


const Home = () => {
    const [reviewsFood, setReviewsFood] = useReviewsFood();
    const threeReviews = reviewsFood.slice(0, 3);

    return (
        <div className='home'>
            <div className='d-Flex'>
                <div className='text-info'>
                    <h1>FRESH FISH BLOG!</h1>
                    <p>Learning how to cook fish can be a particularly rewarding experience when you are preparing fresh fish that you just caught yourself. There are several tasty ways cook fish. This section provides an introduction to a few popular cooking methods and recipes.</p>
                    <button className='btn-demo'>Explore</button>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <h1 className='margin-top'>Reviews:{threeReviews.length}</h1>
            <div className='review-three'>

                {
                    threeReviews.map(review => <ReviewsHome key={review.id} review={review}>

                    </ReviewsHome>)
                }


            </div>
            <div className='see-all'>
                <a><Link to='reviews'>See All Reviews</Link></a>
            </div>
        </div>

    );
};

export default Home;