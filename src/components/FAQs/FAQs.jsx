// FAQ.jsx
import React, { useState } from 'react';
import './FAQs.css';

const faqs = [
  {
    question: 'Are your rooms air-conditioned?',
    answer: 'Yes, all our rooms are fully air-conditioned for your comfort.',
  },
  {
    question: 'Can I book a room online?',
    answer: 'Yes, you can book directly through our website or via popular booking platforms.',
  },
  {
    question: 'Do you allow pets?',
    answer: 'We allow small pets with prior notice. Additional charges may apply.',
  },
  {
    question: 'Is parking available at Always Hotel?',
    answer: 'Yes, we offer free on-site parking for all guests.',
  },
  {
    question: 'What are your check-in and check-out times?',
    answer: 'Check-in is from 2 PM, and check-out is by 11 AM.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); // first one open (like your image)

  const toggle = (i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="faq">
      <div className="faq-intro">
        <span>FAQs</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here you'll find helpful info about booking, facilities, and staying at Always Hotel.
          If your question isn't listed, feel free to contact us directly.
        </p>
      </div>


      <div className="faq__list" role="list">
        {faqs.map((item, i) => {
          const open = activeIndex === i;
          return (
            <div className={`faq__item ${open ? 'is-open' : ''}`} key={i} role="listitem">
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="faq__question-text">{item.question}</span>
                {/* Chevron icon (CSS handles rotation) */}
                <span className="faq__chevron" aria-hidden="true"></span>
              </button>

              <div
                id={`faq-panel-${i}`}
                className="faq__answer"
                role="region"
                aria-labelledby={`faq-button-${i}`}
                style={{ maxHeight: open ? '200px' : '0' }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}