import React from 'react';
import useReviews from '../../hooks/useReviews';
import AllReviews from '../AllReviews/AllReviews';

const ReviewPage = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="container">
            <div className="row row-cols-3">
                {
                    reviews.map(review => <AllReviews key={review.id} review={review}></AllReviews>)
                }

            </div>
        </div>
    );
};

export default ReviewPage;