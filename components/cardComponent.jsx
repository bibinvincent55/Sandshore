import React, { useState } from 'react';
import './card.css';

import abibas from './images/abibas.png';
import adibas from './images/adibas.png';
import adidas from './images/adidas.png';
import puma1 from './images/puma1.png';
import puma2 from './images/puma2.png';
import puma3 from './images/puma3.png';
import nike1 from './images/Nike1.png';
import nike2 from './images/Nike2.png';
import nike3 from './images/Nike3.png';

const cardSets = [
  {
    question: 'Which of the following is the original symbol of Adidas?',
    cards: [
      { image: abibas, name: 'Card 1' },
      { image: adibas, name: 'Card 2' },
      { image: adidas, name: 'Card 3' },
    ],
    correctIndex: 2,
  },
  {
    question: 'Which of the following is the original symbol of PUMA?',
    cards: [
      { image: puma1, name: 'Card 4' },
      { image: puma2, name: 'Card 5' },
      { image: puma3, name: 'Card 6' },
    ],
    correctIndex: 1,
  },
  {
    question: 'Which of the following is the original symbol of NIKE?',
    cards: [
      { image: nike1, name: 'Card 7' },
      { image: nike2, name: 'Card 8' },
      { image: nike3, name: 'Card 9' },
    ],
    correctIndex: 0,
  },
];

function CardComponent() {
  const [setIndex, setSetIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [displayAppreciation, setDisplayAppreciation] = useState(false);
  const totalSets = 3; // Total number of sets

  const handleCardClick = (cardIndex) => {
    if (cardIndex === cardSets[setIndex].correctIndex) {
      if (setIndex === totalSets - 1) {
        setProgress(progress + 1);
        alert('Correct answer!');
        setDisplayAppreciation(true);
      } else {
        alert('Correct answer!');
        setSetIndex(setIndex + 1);
        setProgress(progress + 1);
      }
    } else {
      alert('Wrong answer!');
    }
  };

  return (
    <div className="center">
      {displayAppreciation ? (
        <div className="appreciation">
          <h2>Know About Trademark</h2>
          <p>
            Think of a trademark like a special badge for your favorite superheroes. Just like how Superman has an "S" on his chest, companies have special signs or names to show that their products or services are from them. These signs could be a logo, a name, or even a jingle you hear in their ads.
          </p>
          {/* Other paragraphs... */}
          <button onClick={() => (window.location.href = '/')}>Go Back to Main Page</button>
        </div>
      ) : (
        <>
          <h3>{cardSets[setIndex].question}</h3>
          <div className="card-container1">
            {cardSets[setIndex].cards.map((card, index) => (
              <div className="card1" key={index} onClick={() => handleCardClick(index)}>
                <img src={process.env.PUBLIC_URL + card.image} alt={card.name} className="card-image1" />
                <h2 className="card-name1">{card.name}</h2>
              </div>
            ))}
          </div>
          <div className="progress-bar1">
            <div className="progress1" style={{ width: `${(progress / totalSets) * 100}%` }}>
              {progress * 25} points
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CardComponent;
