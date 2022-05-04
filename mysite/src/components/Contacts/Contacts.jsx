import React, { useRef } from 'react';
import './Contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c7t0gni', 'template_bmpfesa', form.current, 'Hl_mrBUuAefK4SO9G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kuchiyash93@mail.ru</h5>
            <a href="mailto:kuchiyash93@mail.ru" target='_black'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>@SergheiK</h5>
            <a href="https://t.me/SergheiK" target='_black'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+79653378022</h5>
            <a href="https://api.whatsapp.com/send/?phone=79653378022" target='_black'>Send a message</a>
          </article>
        </div>
        {/* end of contact form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
