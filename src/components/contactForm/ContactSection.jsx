// import './ContactFormStyles.css'
import ContactHeading from './ContactHeading'
import FormBuilder from './FormBuilder'

const ContactSection = () => {

    const inputConfigurations = [{
        name: 'name',
        type: 'text',
        minLength: 2,
        maxLength: 100
    }, {
        name: 'email',
        type: 'email'
    }, {
        name: 'subject',
        type: 'text'
    }, {
        name: 'message',
        type: 'textarea',
        minLength: 10,
        maxLength: 500
    }
    ]

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     if(validateForm()){
    //         console.log(formData);
    //     }
    // }
    return (
        <section className="contact-section">
            <ContactHeading />
            <FormBuilder configurations={inputConfigurations} />
        </section>
    )
}

export default ContactSection
