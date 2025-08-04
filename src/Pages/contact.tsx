import '../Css/ContactPage.css';
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

const ContactPage: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const result = await emailjs.send(
                'service_i7n3fy8',
                'template_xjt87im',
                {
                  from_name: formData.name,
                  from_email: formData.email,
                  phone: formData.phone,
                  subject: formData.subject,
                  message: formData.message,
                },
                'HwjZroyrYNArQTEbx'
              );
              
              console.log('Email sent successfully:', result.text);
              setSubmitStatus('success');
              setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } catch (error) {
              console.error('Failed to send email:', error);
              setSubmitStatus('error');
            } finally {
              setIsSubmitting(false);
            }
          };

    return (



        <div className='ContactPageContainer'>
            <div className='ContactContent'>
                <h1></h1>
            </div>
            <div className="Form">
            <h1>Contact Me</h1>
            <form className="ContactForm" ref={formRef} onSubmit={handleSubmit}>
                <div className='ContactforminsideContainer'>
                    <div className='ContactFormInput'>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Full Name' required/>
                    </div>
                    <div className='ContactFormInput'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email Address' required/>
                    </div>
                    <div className='ContactFormInput'>
                        <label htmlFor="phone">Phone:</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className='ContactFormInput'>
                        <label htmlFor="email">Subject:</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                        />
                    </div>
                </div>
                <div className='ContactFormInput_Message'>
                        <label htmlFor="message">Message:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter Your Message Here"
                            required
                        />
                    </div>

                
                <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            Message sent successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            Failed to send message. Please try again.
          </div>
        )}
      
            </form>
            </div>
        </div>
    );



};

export default ContactPage;