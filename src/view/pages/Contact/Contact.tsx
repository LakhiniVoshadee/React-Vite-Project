import './Contact.css'
import {useForm} from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {

    const{register,handleSubmit,formState:{errors}} = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        console.log("Form submitted successfully:", data);
        alert(`Submitted successfully!\nEmail: ${data.subject}\nSubject: ${data.subject}\nMessage: ${data.message}`);
    };


    return (
        <div className="form-container">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register('email',{
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address"
                        }
                    })
                    }/>
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="subject" id="subject" {...register('subject',{
                        required: "Subject is required",
                        pattern: {
                            value: /^[a-zA-Z0-9\s]+$/,
                            message: "Subject can only contain letters and numbers"
                        }
                    })
                    }/>
                    {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message"  {...register('message',{
                        required: "Message is required",
                        minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters long"
                        },
                        maxLength: {
                            value: 500,
                            message: "Message cannot exceed 500 characters"
                        }
                    })}></textarea>
                </div>
                <button className="submit-btn" type="submit">Send Message</button>
            </form>

        </div>
    );
}