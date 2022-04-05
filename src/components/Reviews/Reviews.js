import React from 'react';
import './Reviews.css'

const Reviews = ({ review }) => {
    const { name, picture, rating, comment } = review;
    return (
        <div className="card mx-2 my-5 " style={{ width: '22rem' }}>
            <img src={picture} className="card-img-top reviewer-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-subtitle mb-2 text-warning fw-bolder fs-4"> Rating :{rating}</h5>
                <p className="card-text text-start">{comment}</p>
            </div>

        </div>
    );
};

export default Reviews;