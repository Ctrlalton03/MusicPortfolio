import '../Css/ContactPage.css';

const ContactPage = () => {

    return (
        <div className='ContactPageContainer'>
            <div className='ContactContent'>
                <h1></h1>
            </div>
            <div className="Form">
            <h1>Contact Me</h1>
            <form className="ContactForm">
                <div className='ContactforminsideContainer'>
                    <div className='ContactFormInput'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder='Full Name' required/>
                    </div>
                    <div className='ContactFormInput'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder='Email Address' required/>
                    </div>
                    <div className='ContactFormInput'>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone"  placeholder='Phone Number' />
                    </div>
                    <div className='ContactFormInput'>
                        <label htmlFor="email">Subject:</label>
                        <input type="text" id="subject" name="subject" placeholder='Subject' required/>
                    </div>
                </div>
                <div className='ContactFormInput_Message'>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder='Enter Your Message Here'></textarea>
                    </div>

                
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );



};

export default ContactPage;