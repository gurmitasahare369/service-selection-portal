import React, { useState } from 'react'

const Step1 = ({ setStep, setPlanType, setSelectedPlan, setAddons}) => {

    const [pincode, setPincode] = useState('');

    const handleSubmit =  () => {
        if(!pincode || pincode.length !== 6) {
            alert('Please enter a valid 6-digit pincode');
            return;
        }

        if(pincode.startsWith('370')){
            setPlanType('Fiber');
        }
        else{
            setPlanType('Wireless');
        }

        setSelectedPlan(null);
        setAddons({ ott: false, dish: false });

        setStep(2);
    };

  return (
    <div className='bg-white shadow-md rounded-2xl p-6'>
        <h2 className='text-xl font-bold mb-4'>Step 1: Coverage Check</h2>

        <input 
            type="text" 
            placeholder="Enter Pincode" 
            value={pincode} 
            onChange={(e) => setPincode(e.target.value)} 
            className='w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-1 focus:ring-orange-400 '
        />

        <button 
            onClick={handleSubmit}
            className='w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg '
        >
            Check Availability
        </button>

    </div>
  )
}

export default Step1