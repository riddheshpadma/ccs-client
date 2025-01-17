import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";

import FormStep from "../../assets/img/getstartedstep.png"
import Background from '../../assets/img/getstartedbg.jpg'

const Index = () => {
    const { handleSubmit, register } = useForm();
    const [step, setStep] = useState(0); // Start with step 0 (intro)
    const totalSteps = 3;

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const onSubmit = (data) => {
        console.log(data); // Handle form submission here
        alert("Form submitted successfully!");
    };

    return (
        <div>
            <section className="h-screen">
                <div className="flex justify-end items-end bg-secondaryColor">
                    <div className="flex flex-1 flex-col justify-end  bg-secondaryColor h-screen">
                        <div className="fixed top-0 left-0 p-5 md:p-10">
                            <Link to="/">
                                <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full shadow hover:bg-gray-50 hover:-translate-x-2 transition-all ease-in-out duration-700">
                                    <IoArrowBack size={24} />
                                </button>
                            </Link>
                        </div>
                        {/* Intro Section */}
                        {step === 0 && (
                            <div className="relative flex flex-col justify-between h-fit z-10 text-left p-10">
                                <div className="">
                                    <img src={FormStep} alt="" className="w-full md:max-w-md" />
                                </div>
                                <div className="max-w-xl">
                                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                                        Let's Build Something Incredible Together
                                    </h1>
                                    <p className="text-lg mb-16">
                                        We’re excited to hear about your vision! Let's kick-start the process by
                                        understanding your needs.
                                    </p>
                                </div>
                                <div>
                                    <button
                                        className="px-12 py-4 bg-tirtaryColor text-primaryColor hover:text-white font-semibold rounded-lg shadow-md hover:bg-primaryColor transition-all ease-in-out duration-700"
                                        onClick={() => setStep(1)} // Move to Step 1
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Form Section */}
                        {step > 0 && (
                            <div className="p-10">
                                <div className="flex flex-col justify-start items-start text-primaryColor">
                                    <h1 className="text-2xl md:text-5xl font-bold text-primaryColor mb-6">
                                        Let’s Get Started Together
                                    </h1>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                                        <div
                                            className="bg-tirtaryColor h-2 rounded-full"
                                            style={{ width: `${(step / totalSteps) * 100}%` }}
                                        ></div>
                                    </div>

                                    <div className="w-full ">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            {/* Step 1: Basic Information */}
                                            {step === 1 && (
                                                <div className="space-y-4">
                                                    <h2 className="text-left text-xl md:text-2xl mb-10 font-semibold text-gray-800">
                                                        Step 1: Basic Information
                                                    </h2>
                                                    <div className="flex-1 flex flex-col justify-center items-center space-y-4  max-w-xl ">
                                                        <input
                                                            type="text"
                                                            placeholder="Your Name"
                                                            {...register("name", { required: "Name is required" })}
                                                            className="input-field"
                                                        />
                                                        <input
                                                            type="email"
                                                            placeholder="Email Address"
                                                            {...register("email", { required: "Email is required" })}
                                                            className="input-field"
                                                        />
                                                        <input
                                                            type="tel"
                                                            placeholder="Phone Number"
                                                            {...register("phone", { required: "Phone number is required" })}
                                                            className="input-field"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                            {step === 2 && (
                                                <div className="space-y-4">
                                                    <h2 className="text-left text-2xl mb-10 font-semibold text-gray-800">
                                                        Step 2: Business Details
                                                    </h2>
                                                    <div className="flex-1 flex flex-col justify-center items-center space-y-4  max-w-xl ">
                                                        <input
                                                            type="text"
                                                            placeholder="Company Name"
                                                            {...register("companyName", { required: "Company name is required" })}
                                                            className="input-field"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Business Type"
                                                            {...register("businessType", { required: "Business type is required" })}
                                                            className="input-field"
                                                        />
                                                        <input
                                                            type="url"
                                                            placeholder="Website (Optional)"
                                                            {...register("website")}
                                                            className="input-field"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {step === 3 && (
                                                <div className="space-y-4">
                                                    <h2 className="text-left text-2xl mb-10 font-semibold text-gray-800">
                                                        Step 3: Project Goals
                                                    </h2>
                                                    <div className="flex-1 flex flex-col justify-center items-center space-y-4  max-w-xl ">
                                                        <textarea
                                                            placeholder="What do you want to achieve with this project?"
                                                            {...register("projectGoals", { required: "This field is required" })}
                                                            className="input-field h-32 resize-none"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Estimated Budget (Optional)"
                                                            {...register("budget")}
                                                            className="input-field"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                        </form>
                                    </div>
                                </div>
                                {/* Navigation Buttons */}
                                <div className="mt-14 flex justify-between">
                                    {step >= 1 && (
                                        <button
                                            type="button"
                                            className="px-8 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400"
                                            onClick={prevStep}
                                        >
                                            Back
                                        </button>
                                    )}
                                    {step < totalSteps ? (
                                        <button
                                            type="button"
                                            className="px-8 py-2 bg-tirtaryColor text-white rounded-lg shadow hover:bg-[#b68125] transition-all ease-in-out duration-500"
                                            onClick={nextStep}
                                        >
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="px-8 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
                                        >
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative flex-1 flex-col justify-end items-center hidden md:block h-screen"
                        style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: '100vh'
                        }}
                    >
                        <div className="absolute inset-0 bg-primaryColor bg-opacity-75 z-0"></div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
