import { useForm } from "react-hook-form";
import { useState } from "react";
import {backendApi} from "../../../api.ts";

type FormData = {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
};

export function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [serverError, setServerError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
        try {
            const contactData = { ...data, id: Math.floor(Math.random() * 1000000) };
            // Use the correct endpoint: /contact/save (singular)
            const response = await backendApi.post("/contacts/save", contactData);
            setSuccessMessage("Message sent successfully!");
            setServerError(null);
            reset();
            console.log("Form submitted successfully:", response.data);
        } catch (error: any) {
            setSuccessMessage(null);
            if (error.response?.status === 400) {
                setServerError(error.response.data.error || "All fields are required");
            } else {
                setServerError("Failed to connect to the server. Please ensure the backend is running.");
            }
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="max-w-[500px] mx-auto my-10 p-5 bg-white rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] text-base transition-shadow duration-300 hover:shadow-lg">
            <h1 className="pt-20 pb-8 text-2xl font-bold text-gray-800 text-center">Contact Us</h1>
            {successMessage && <div className="text-green-500 text-sm mb-4 text-center">{successMessage}</div>}
            {serverError && <div className="text-red-500 text-sm mb-4 text-center">{serverError}</div>}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-700 font-medium">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition-all duration-200"
                        {...register("name", {
                            required: "Name is required",
                            pattern: {
                                value: /^[a-zA-Z\s]+$/,
                                message: "Name can only contain letters and spaces"
                            }
                        })}
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-1.5">{errors.name.message}</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-gray-700 font-medium">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        className="p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition-all duration-200"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^\+?[1-9]\d{1,14}$/,
                                message: "Invalid phone number"
                            }
                        })}
                    />
                    {errors.phone && <span className="text-red-500 text-sm mt-1.5">{errors.phone.message}</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-700 font-medium">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition-all duration-200"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1.5">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="subject" className="text-gray-700 font-medium">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        className="p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition-all duration-200"
                        {...register("subject", {
                            required: "Subject is required",
                            pattern: {
                                value: /^[a-zA-Z0-9\s]+$/,
                                message: "Subject can only contain letters, numbers, and spaces"
                            }
                        })}
                    />
                    {errors.subject && <span className="text-red-500 text-sm mt-1.5">{errors.subject.message}</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-gray-700 font-medium">Message:</label>
                    <textarea
                        id="message"
                        className="p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition-all duration-200 resize-y min-h-[100px]"
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message: "Message must be at least 10 characters long"
                            },
                            maxLength: {
                                value: 500,
                                message: "Message cannot exceed 500 characters"
                            }
                        })}
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-sm mt-1.5">{errors.message.message}</span>}
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white py-2.5 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all duration-200 cursor-pointer"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}