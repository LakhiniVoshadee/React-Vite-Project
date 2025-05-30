import { useForm } from "react-hook-form";

type LoginFormData = {
    email: string;
    password: string;
}

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
    const onSubmit = (data: LoginFormData) => {
        console.log("Login submitted successfully:", data);
        alert(`Login submitted!\nEmail: ${data.email}\nPassword: ${data.password}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Login</h1>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            placeholder="Enter your email"
                            {...register('email', {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            placeholder="Enter your password"
                            {...register('password', {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long"
                                }
                            })}
                        />
                        {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mt-4"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-gray-600 text-sm mt-6">
                    Don't have an account? <a href="/signup" className="text-blue-500 hover:text-blue-600 transition-colors duration-200">Sign Up</a>
                </p>
            </div>
        </div>
    );
}