import React, { useState } from 'react';
import FAQq from './FAQq';
import "../styles/Faq.css"
import Hnav from '../Components/Hnav';
import Mfooter from '../Components/Mfooter';

function Faq() {
    const [faqs, setfaqs] = useState([
        {
            question: 'This is my first visit to Medicon. What should i do?',
            answer: 'Speak to our front desk personnel and indicate that you are a first time visitor. The personnel will take you through the neccessary procedures.',
            open: false
        },
        {
            question: 'Can I see any Specialist without a referral?',
            answer: 'For some specialists, you can schedule appointments without referral. However, others require a referral letter to assess the patients current condition. ',
            open: false
        },
        {
            question: 'I am visiting a friend but i do not know the admission ward. What do i do?',
            answer: 'You can get the deatils of your patient from the Ward Reception once you arrive.',
            open: false
        },
        {
            question: 'How do I schedule a medical appointment with a specialist',
            answer: 'On top of the page beneath the tabs you would see the book an appointment button, you can click there to book an appointment. You can call us on +233-(0)24-184-3176 to schedule your appointments. You can also email us at mediconghana@gmail.com with your details and our customer service team will get back to you. ',
            open: false
        },
        {
            question: 'i have taken an appointment Online, where should I report when i get to the hospital',
            answer: 'Please approach any front desk personnel for futher guidance. Always bring your hospital card along.',
            open: false
        },
        {
            question: 'I have specific questions. How do I reach out',
            answer: 'Call us on +233-(0)24-184-3176 or send an Email to mediconghana@gmail.com.',
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }


    return (
        <div className="Bap">
            <Hnav />
            <div className="faqs">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                {faqs.map((faq, i) => (
                    <FAQq faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
            <Mfooter />
        </div>
    );
}

export default Faq