import React from 'react';
import useReviews from '../../hooks/useReviews';
import AllReviews from '../AllReviews/AllReviews';

const ReviewPage = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="container">
            <h1 className='fw-bolder display-4 mt-4 mb-5 text-info border-bottom border-5'>Reviews from book lovers worldwide</h1>
            <div className="row row-cols-md-3">
                {
                    reviews.map(review => <AllReviews key={review.id} review={review}></AllReviews>)
                }

            </div>
        </div>
    );
};

export default ReviewPage;