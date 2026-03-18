import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {

  const [step, setStep] = useState(1);
  const [planType, setPlanType] = useState('');

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [addons, setAddons] = useState({
    ott: false,
    dish: false,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center"> 
      <div className="w-full max-w-md ">

        {/* Title */}
        <h1 className="text-4xl sm:text-3xl font-bold text-center mb-3">Service Selection Portal</h1>

        {/* Step Indicator */}
        <p className="text-center text-gray-500 mb-3">
          Step {step} of 3
        </p>

        {/* Step Rendering */}
        {step === 1 && (
          <Step1 
            setStep={setStep} 
            setPlanType={setPlanType}
            setSelectedPlan={setSelectedPlan}
            setAddons={setAddons} />
        )}

        {step === 2 && (
          <Step2 
            planType={planType} 
            setStep={setStep} 
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan}
            addons={addons} 
            setAddons={setAddons} />
        )}

        {step === 3 && (
          <Step3
            selectedPlan={selectedPlan}
            addons={addons}
            setStep={setStep}
          />
         )}
         
      </div>
    </div>
  );
}

export default App;