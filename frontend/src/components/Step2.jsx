// import React, { useState } from 'react'

const Step2 = ({ planType, setStep, selectedPlan, setSelectedPlan, addons, setAddons }) => {

    // Plans
    const plans = [
        {name : 'Basic' , price : 499},
        {name : 'Standard' , price : 999},
        {name : 'Premium' , price : 1499},
    ];


  return (
    <div className='bg-white shadow-md rounded-2xl p-4 sm:p-6'>
        <h2 className='text-xl font-bold mb-4'>Step 2 : Plan Selection</h2>

        <p className='text-gray-700 mb-4 text-lg'>Available Services :
            <span className='font-semibold text-orange-500 '> {planType}</span>
        </p>

        {/* Plans */}
        <div className='space-y-3 mb-3'>
            {plans.map((plan) => (
                <div 
                    key={plan.name}
                    className={`border p-3 rounded-xl cursor-pointer transition ${
                        selectedPlan?.name === plan.name ? 'border-orange-500 bg-orange-50 shadow-sm' : 'border-gray-300 hover:border-orange-300 hover:shadow-sm'
                    }`}
                    onClick={() => { 
                        setSelectedPlan(plan);
                        setAddons({ ott: false, dish: false }); // Reset add-ons when plan changes
                        }
                    }
                >
                    <h3 className='text-lg font-bold'>{plan.name}</h3>
                    <p className='text-gray-600'>₹{plan.price} / month</p>
                </div>
            ))}
        </div>

        {selectedPlan && (
            <p className="text-sm text-gray-500 mt-2 mb-3" >
                Selected Plan : {selectedPlan.name}
            </p>
        )}

        <hr className=" border-gray-400" />

        {/* Add-ons */}
        {selectedPlan && (
            <div className='mt-2'>
                <h3 className='text-lg font-bold mb-2'>Add-ons:</h3>

                {/* OTT */}
                <label className=' flex items-center mt-2'>
                    <input
                        type="checkbox"
                        checked={addons.ott}
                        disabled={selectedPlan.price <= 999}
                        onChange={(e) => setAddons({...addons, ott: e.target.checked})}
                    />

                    <span className='ml-2'>OTT (₹200)
                        {selectedPlan.price <= 999 && (
                            <span className='text-red-500 text-sm ml-1'>(Requires Premium)</span>
                        )}
                    </span>
                </label>

                 {/* DishTV */}
                <label className=" flex items-center mt-2">
                    <input
                    type="checkbox"
                    checked={addons.dish}
                    onChange={(e) =>
                        setAddons({ ...addons, dish: e.target.checked })
                    }
                    />
                    <span className="ml-2">DishTV (₹150)</span>
                </label>                


            </div>
        )}

         {/* Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 sm:justify-between mt-6'>

                    <button
                        onClick={() => setStep(1)}
                        className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg '
                    >← Back</button>

                    <button
                        disabled={!selectedPlan}
                        onClick={() => setStep(3)}
                        className={`w-full sm:w-auto py-2 px-4 rounded-lg font-semibold transition shadow-sm ${!selectedPlan
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-orange-500 hover:bg-orange-600 text-white'
                        }`}
                    >Next →</button>

            </div>      

        
    </div>
  )
}

export default Step2