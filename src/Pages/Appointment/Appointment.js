import React, { useState } from 'react';
import AbailableAppointment from './AbailableAppointment';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className='mb-20'>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AbailableAppointment date={date}></AbailableAppointment>

    </div>
  );
};

export default Appointment;