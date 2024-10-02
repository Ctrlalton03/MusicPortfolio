import '../Css/ContactPage.css';

const ContactPage = () => {

    return (
        <div className='ContactPageContainer'>
            <h1>Contact Me</h1>
            <form className="ContactForm">
                <div className='ContactforminsideContainer'>
                    <div className='ContactFormInput'>
                        <label htmlFor="name">First Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className='ContactFormInput'>
                        <label htmlFor="name">Last Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className='ContactFormInput'>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div className='ContactFormInput'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                </div>
                <div className='ContactFormInput_Message'>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );



};

export default ContactPage;