import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
            <h5 className='client__name'>Ernest Archiever</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tempora voluptatum ducimus, doloribus maiores labore cumque vero ab iusto vitae dolorem exercitationem non temporibus quasi. Aliquid debitis aperiam repellat error.</small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
