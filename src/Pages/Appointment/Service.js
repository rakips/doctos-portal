import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div >
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ? <span>{slots[0]} </span> : <span className='text-red-500'> No Booking Available  </span>
                        }
                    </p>
                    <p> {slots.length} {slots.length > 1 ? 'spaces' : 'space'}   are available </p>
                    <div class="card-actions justify-center">




                        <label
                            for="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            class="btn btn-primary  text-white uppercase">Book Appointment</label>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Service;