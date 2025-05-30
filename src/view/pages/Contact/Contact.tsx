import { useForm } from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        console.log("Form submitted successfully:", data);
        alert(`Submitted successfully!\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`);
    };

    return (
        <div className="max-w-[500px] mx-auto my-10 p-5 bg-white rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] text-base transition-shadow duration-300 hover:shadow-lg">
            <h1 className="pt-20 pb-8 text-2xl font-bold text-gray-800 text-center">Contact Us</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-700 font-medium">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition-all duration-200"
                        {...register('email', {
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
                        {...register('subject', {
                            required: "Subject is required",
                            pattern: {
                                value: /^[a-zA-Z0-9\s]+$/,
                                message: "Subject can only contain letters and numbers"
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
                        {...register('message', {
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