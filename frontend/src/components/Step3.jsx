import React, { useState } from 'react'

const Step3 = ({ selectedPlan, addons, setStep}) => {

    const [form , setForm] = useState({
        name : '',
        phone : '',
        address : '',
    });

    // Pricing
    const basePrice = selectedPlan?.price || 0;
    const addonPrice = (addons.ott ? 200 : 0) + (addons.dish ? 150 : 0);
    const subtotal = basePrice + addonPrice;
    const gst = subtotal * 0.18;
    const total = subtotal + gst;

    // Handle form submission
    const handleSubmit = async () => {
        if(!form.name.trim() || !form.phone.trim() || !form.address.trim()){
            alert('Please fill all the required fields');
            return;
        }

        if(form.phone.length !== 10) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        const selectedAddons = [];
        if (addons.ott) selectedAddons.push("OTT");
        if (addons.dish) selectedAddons.push("DishTV");

         try {
            const response = await fetch("https://service-selection-portal.onrender.com/api/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: form.name,
                phone: form.phone,
                address: form.address,
                plan: selectedPlan.name,
                addons: selectedAddons,
                total: total,
            }),
            });

            const data = await response.json();

            if (response.ok) {
            alert("Form saved successfully!");

            // Reset form + go home
            setForm({ name: "", phone: "", address: "" });
            setStep(1);
            } else {
            alert(data.message || "Something went wrong");
            }

        } catch (error) {
            console.error(error);
            alert("Server error");
        }

        
    }

  return (
    <div className='bg-white shadow-md rounded-2xl p-4 sm:p-6'>

        <h2 className='text-lg sm:text-xl font-bold mb-4'>Step 3 : Checkout Summary</h2>


        {/* Bill */}
        {/* <div className='mb-5 border-b pb-3'> */}
        <div className='mb-5 bg-orange-50 border border-orange-100 rounded-xl p-4'>
            <p className='text-gray-600 text-sm sm:text-base'>Base Price : ₹{basePrice}</p>
            <p className='text-gray-600 text-sm sm:text-base'>Add-ons : ₹{addonPrice}</p>
            <p className='text-gray-600 text-sm sm:text-base'>GST(18%) : ₹{gst.toFixed(2)}</p>
            <hr className=" border-gray-400 mt-2" />
            <p className='font-bold text-base sm:text-lg text-orange-600 mt-1'>Total : ₹{total.toFixed(2)}</p>
        </div>

        {/* Lead Generation Form */}
        <div className='space-y-4 '>
            <input
                type="text"
                placeholder="Name"
                // className="border p-2 w-full rounded"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400"
                onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                }
            />

            <input
                type="text"
                placeholder="Phone No."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400"
                onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                }
            />

            <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400"
                onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                }
            />

        </div>

        {/* Buttons */}
        {/* <div className='flex justify-between mt-5'> */}
        <div className='flex flex-col sm:flex-row gap-3 sm:justify-between mt-5'>

            <button 
                onClick={() => setStep(2)}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition shadow-sm"
            >← Back</button>

            <button
                onClick={handleSubmit}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition shadow-sm"
            >Submit</button>

        </div>


    </div>
  )
}

export default Step3