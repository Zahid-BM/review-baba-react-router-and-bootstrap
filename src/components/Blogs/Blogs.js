import React from 'react';

const Blogs = () => {
    return (
        <div className="container my-5">
            <h2 className="fw-bolder display-4 my-3 text-success border-bottom border-5  text-center text-secondary">Q & A for Bonus Marks</h2>
            <div className="row ">
                <div className="col-12 ">
                    <div className="accordion w-100 " id="accordionExample">

                        <div className="accordion-item my-2 ">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button bg-success text-white fw-bold " type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    What are Semantic tags ?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-secondary text-white text-start">
                                    <p>The word semantic means in easy words, something that we can understand to see the title/name what is the purposes and usages at a glance. If we can understand after having the name/title of anything that what does it do, what is the purposes and functions etc then we can call that a semantic name/title . In HTML language we are introduced with some meaningful tags name and we can easily understand after have a look on the tag name. The tags name in HTML has easily understandable the purposes of the tags is called HTML Semantic Tags. For example, header tag, main tag, mark tag, article tag  etc.  </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne1">
                                <button className="accordion-button bg-success text-white fw-bold " type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true"
                                    aria-controls="collapseOne1">
                                    What are the block, inline and in-line block elements ?
                                </button>
                            </h2>
                            <div id="collapseOne1" className="accordion-collapse collapse show"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-secondary text-white text-start">
                                    <p> Block elements block the whole horizontal space/width so that no other elements can stay horizontally alongside a block element. We can set height and weight to a block element. Example : all h1, divs are block elements. <br /> Inline element takes only the space that requires. And that's why we can write many inline elements in the same horizontal line. We can not set height and width to an inline element. Example : span, a and br etc are inline elements. <br />   And finally, inline-block elements are the block elements but behave like an inline element. We can add height and width to an inline-block elements.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Blogs;