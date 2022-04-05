import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='container'>
            <div className="row pt-5 my-3">
                <div className="col-md-6 pt-5">
                    <h1 className='fw-bolder display-1 text-start'>Books are the <span className='text-success'>Best Friends</span></h1>
                    <p className='text-start'>Reading books can enrich your knowledge, outlook and attitudes. But if you do not encourage people to read books then the knowledge, outlook and attitudes will be confined in you and no one will care about knowledge, outlook and attitudes. For that reliable reviews can do a lot. So write reviews to know more and write reviews to spread.</p>
                    <Link to="/reviewpage">
                        <div class="d-grid gap-2 d-md-flex justify-content-start my-4">
                            <button class="btn btn-primary btn-lg" type="button">Explore Reviews</button>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img className='w-100 h-100 rounded' src={'https://img.freepik.com/free-psd/abstract-background-with-opened-book_23-2149085907.jpg?w=826&t=st=1649146958~exp=1649147558~hmac=0b4c9c0c11e9ddb8920a4cacd38d8525c74aac557ee5b068871f57000e2ca315'} alt="" />
                </div>
            </div>
            <div className="row row-col-md-3 mb-5">
                <h1 className='fw-bolder display-4 my-5 text-info border-bottom border-5 '>Public Reviews about the Book</h1>
                {
                    reviews.slice(0, 3).map(review => <Reviews key={review.id} review={review}></Reviews>)
                }
            </div>

            <Link to='/reviewpage'>
                <div className="d-grid gap-2 col-6 mx-auto my-5">
                    <button className="btn btn-primary" type="button">See all reviews</button>
                </div>
            </Link>
        </div>
    );
};

export default Home;