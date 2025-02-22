import React, { useState } from 'react';

const FAQ = () => {
  // State to keep track of which question is open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Questions and answers data
  const faqData = [
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase.' },
    { question: 'How do I contact customer service?', answer: 'You can contact us through the Contact Us page or by email at support@example.com.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we offer international shipping to most countries.' },
    { question: 'What payment methods do you accept?', answer: 'We accept Visa, MasterCard, PayPal, and Apple Pay.' },
  ];

  // Toggle the visibility of the answer to the clicked question
  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); // Toggle between open and close
  };

  return (
    <div style={styles.container}>
      <h2>Frequently Asked Questions</h2>
      <div style={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} style={styles.faqItem}>
            <div 
              style={styles.question} 
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>
            {openQuestion === index && (
              <div style={styles.answer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  faqList: {
    marginTop: '20px',
  },
  faqItem: {
    marginBottom: '15px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  },
  question: {
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '18px',
  },
  answer: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#555',
    paddingLeft: '20px',
  },
};

export default FAQ;
