import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className='mt-5 text-center'>
                <h2 className='text-3xl'>Contact with me</h2>
                <form action="https://formspree.io/abirdas422@gmail.com" method="post" className='grid lg:w-3/4 px-10 mx-auto mt-2'>

                    <div className="form-control w-full my-2">
                        {/* <label className="label"> <span className="label-text">Your Name</span></label> */}
                        <input type="text" id="name" name="name" placeholder="Your Name*" required className="input input-bordered w-full" />
                    </div>
                    {/* <br /> */}

                    <div className="form-control w-full my-2">
                        {/* <label className="label"> <span className="label-text">Product Name</span></label> */}
                        <input type="text" id="email" name="email" placeholder="Your Email*" required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full my-2">
                        {/* <label className="label"> <span className="label-text">Description</span></label> */}
                        <textarea id="message" name="message" placeholder="Your Message*" required className="textarea textarea-bordered" rows="5" cols="10"></textarea>
                    </div>

                    <div className="text-center">
                        <input className='btn btn-primary w-full my-4 max-w-md ' value="Send Mail" type="submit" />
                    </div>


                </form>
            </div >
        </section>
    );
};

export default Contact;