import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import './QuestionSection.css';
import { useNavigate } from 'react-router-dom';

const questions = [
  "Thanks for coming in, Let's start with your introduction first.",
  "What are your greatest strengths?",
  "What do you consider to be your weaknesses?",
  "Why do you want to work for our company?",
  "Where do you see yourself in five years?",
  "Tell me about a challenge you've faced at work, and how you dealt with it.",
  "How do you handle stress and pressure?",
  "Describe a time when you had to work as part of a team.",
  "What motivates you?",
  "Do you have any questions for me about the company or the role?"
];

const QuestionSection = ({ currentQuestionIndex, setCurrentQuestionIndex }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recordingCompleted, setRecordingCompleted] = useState(false);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!isRecording && recordedChunks.length > 0) {
      saveRecording();
    }
  }, [isRecording]);

  const handleStartRecording = () => {
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm'
    });
    mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const handleViewReport = () => {
    navigate('/dashboard'); // Redirect to the dashboard using useNavigate
  };


  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    setRecordingCompleted(true);
  };

  const handleDataAvailable = ({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  };

  const saveRecording = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'interview_recording.webm';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    setRecordedChunks([]);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
  };

  const handleButtonClick = () => {
    if (!isRecording && currentQuestionIndex === 0) {
      handleStartRecording();
    } else if (isRecording && currentQuestionIndex < questions.length - 1) {
      handleNextQuestion();
    } else if (isRecording && currentQuestionIndex === questions.length - 1) {
      handleStopRecording();
    } else if (recordingCompleted) {
      // Implement view report functionality here
      navigate('/scores');
    //  <button className="view-report-button" onClick={handleViewReport}>
    //           View Report
    //         </button>
    }
  };

  const getButtonText = () => {
    if (!isRecording && currentQuestionIndex === 0) return 'Start Recording';
    if (isRecording && currentQuestionIndex < questions.length - 1) return 'Next Question';
    if (isRecording && currentQuestionIndex === questions.length - 1) return 'Stop Recording';
    if (recordingCompleted) return 'View Report';
    return 'Start Recording';
  };

  return (
    <section className="question-section">
      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <p>{questions[currentQuestionIndex]}</p>
      <div className="interview-pictures">
        <div className="interview-picture">
          <div className="placeholder">Interviewer</div>
          <button className="back-button" onClick={handlePreviousQuestion} disabled={!isRecording || currentQuestionIndex === 0}>Back</button>
        </div>
        <div className="interview-picture">
          <Webcam audio={true} ref={webcamRef} className="webcam"/>
          <button className="start-next-stop-button" onClick={handleButtonClick}>
            {getButtonText()}
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;















/*

const questions = [
  "Thanks for coming in, Let's start with your introduction first.",
  "What are your greatest strengths?",
  "What do you consider to be your weaknesses?",
  "Why do you want to work for our company?",
  "Where do you see yourself in five years?",
  "Tell me about a challenge you've faced at work, and how you dealt with it.",
  "How do you handle stress and pressure?",
  "Describe a time when you had to work as part of a team.",
  "What motivates you?",
  "Do you have any questions for me about the company or the role?"
];

*/
