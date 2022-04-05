import React from 'react';

const Home = () => {
    return (
        <div className='container'>
            <div className="row pt-5 my-5">
                <div className="col-md-6 pt-5">
                    <h1 className='fw-bolder display-1'>Books are the <span className='text-success'>Best Friends</span></h1>
                    <p className=''>Reading books can enrich your knowledge, outlook and attitudes. But if you do not encourage people to read books then the knowledge, outlook and attitudes will be confined in you and no one will care about knowledge, outlook and attitudes. For that reliable reviews can do a lot. So write reviews to know more and write reviews to spread.</p>
                </div>
                <div className="col-md-6">
                    <img className='w-100 h-100 rounded' src={'https://img.freepik.com/free-psd/abstract-background-with-opened-book_23-2149085907.jpg?w=826&t=st=1649146958~exp=1649147558~hmac=0b4c9c0c11e9ddb8920a4cacd38d8525c74aac557ee5b068871f57000e2ca315'} alt="" />
                </div>
            </div>
            <div className="col">

            </div>

        </div>
    );
};

export default Home;