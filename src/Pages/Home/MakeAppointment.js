import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }

        } className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-140px] ' src={doctor} alt="" />
            </div>

            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary'> Appointment </h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today </h2>
                <p className='text-white py-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo sint eum hic voluptatem voluptatibus, modi omnis odit. Nam consequatur ipsum rem earum exercitationem fugiat voluptate impedit totam repudiandae in eos nulla consectetur porro doloremque, blanditiis aspernatur vitae provident enim?</p>
                <PrimaryButton className='py-50' > Get Started </PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;