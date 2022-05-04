import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
  id: 1,
  avatar: AVTR1,
  name: 'Tina Snow',
  review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio velit quaerat corporis cupiditate facilis ullam. Laboriosam expedita harum neque a eos, beatae error odio ut sunt sed ratione illum inventore deserunt officia numquam esse?'
  },
  {
  id: 2,
  avatar: AVTR2,
  name: 'John Terner',
  review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio velit quaerat corporis cupiditate facilis ullam. Laboriosam expedita harum neque a eos, beatae error odio ut sunt sed ratione illum inventore deserunt officia numquam esse?'
  },
  {
  id: 3,
  avatar: AVTR3,
  name: 'Mickel Dion',
  review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio velit quaerat corporis cupiditate facilis ullam. Laboriosam expedita harum neque a eos, beatae error odio ut sunt sed ratione illum inventore deserunt officia numquam esse?'
  },
  {
  id: 4,
  avatar: AVTR4,
  name: 'Celine Jackson',
  review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio velit quaerat corporis cupiditate facilis ullam. Laboriosam expedita harum neque a eos, beatae error odio ut sunt sed ratione illum inventore deserunt officia numquam esse?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
        data.map(({id, name, avatar, review}) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
            )
        })
        }
      </Swiper>
    </section>
  )
}



export default Testimonials
