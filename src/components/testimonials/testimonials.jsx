import React from 'react'
import './testimonials.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const testimonials = ({ review, rating, name }) => {
    const stars = Array.from({ length: 5 }, (_, i) => i < rating)

    return (
        <div className='testimonial-card'>
            <p className='review'>"{review}"</p>
           <div className="testimonial-details">
             <span className='rating'>
                {stars.map((filled, i) => (
                    filled ? (
                        <AiFillStar key={i} />
                    ) : (
                        <AiOutlineStar key={i} />
                    )
                ))}
            </span>
            <span className='name'>{name}</span>
           </div>
        </div>
    )
}

export default testimonials


