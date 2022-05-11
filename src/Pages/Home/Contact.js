import React from 'react';
import background from '../../assets/images/appointment.png';
import PrimaryButton from '../../Pages/Shared/PrimaryButton';
const Contact = () => {
    return (


        <section style={{ background: `url(${background})` }

        } className='justify-center items-center text-center  '>
            <div className='pt-10'>
                <h3 className='text-primary text-lg text-bold'>Contact Us</h3>
                <h2 className='text-white text-xl'>Stay connected with us</h2>
            </div>

            <div className='py-10'>
                <input type="text" placeholder="Name" class="input input-bordered input-sm w-full max-w-xs  mb-5 py-5" />
                <br />

                <input type="text" placeholder="Email" class="input input-bordered input-md w-full max-w-xs  mb-5" />
                <br />

                <input type="text" placeholder="Your Comment" class="input input-bordered input-lg w-full max-w-xs py-10 mb-5" /> <br />
                <PrimaryButton> Submit </PrimaryButton>

            </div>



        </section>









    );
};

export default Contact;