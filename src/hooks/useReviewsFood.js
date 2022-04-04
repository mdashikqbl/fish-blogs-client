import { useEffect, useState } from "react"

const useReviewsFood = () => {
    const [reviewsFood, setReviewsFood] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviewsFood(data))
    }, []);
    return [reviewsFood, setReviewsFood];
};
export default useReviewsFood;