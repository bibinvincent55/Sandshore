import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teacher from './images/teacher.png';
import main from './images/main.png';
import students from './images/students.png';
import './ComicDialog.css';
import next from './images/next.png';
import copy from './images/copy.png';
import villain from './images/villain.png';
import pookalam from './images/pookalam.png';

function Conversation() {
  const [clickCount, setClickCount] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  // ... (rest of the state variables)

  const navigate = useNavigate(); // Get the navigate function

  // ... (handleAnswer and toggleDialog functions remain the same)

  const renderComponents = () => {
    return (
      <>
        {/* Your JSX code with updated styles */}
      </>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: '50px' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Design Rights</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className='container'>{renderComponents()}</div>
    </>
  );
}

export default Conversation;
