import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    year: '',
    branch: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleNext = () => {
    if (currentStep < 3 && validateForm()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, college, year, branch } = formData;
    if (currentStep === 0 && !name) return false;
    if (currentStep === 1 && !college) return false;
    if (currentStep === 2 && !year) return false;
    if (currentStep === 3 && !branch) return false;
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      navigate('/dashboard');
    }
  };

  return (
    <div className="profile-container">
      {loading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="profile-preview">
            {!profilePic ? (
              <div className="upload-placeholder" onClick={() => document.getElementById('file-input').click()}>
                <p>Upload the profile picture</p>
              </div>
            ) : (
              <img
                src={profilePic}
                alt="Profile Preview"
                className="profile-avatar"
                onClick={() => document.getElementById('file-input').click()}
              />
            )}
            <input
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
          <form className="profile-form" onSubmit={handleSubmit}>
            {currentStep === 0 && (
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="profile-input"
                />
              </div>
            )}
            {currentStep === 1 && (
              <div className="form-group">
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  placeholder="Enter your college name"
                  className="profile-input"
                />
              </div>
            )}
            {currentStep === 2 && (
              <div className="form-group">
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="Enter your year of study"
                  className="profile-input"
                />
              </div>
            )}
            {currentStep === 3 && (
              <div className="form-group">
                <input
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  placeholder="Enter your branch"
                  className="profile-input"
                />
              </div>
            )}
            <div className="form-navigation">
              {currentStep > 0 && (
                <button type="button" onClick={handlePrevious}>
                  Previous
                </button>
              )}
              {currentStep < 3 ? (
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="submit" className="submit-button">
                  Save
                </button>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
