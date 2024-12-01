import React from 'react';
    import './App.css';

    const App = () => {
      return (
        <div className="container">
          <div className="overlay"></div>
          <h1 className="logo">Note Whisper</h1>
          <div className="form-container">
            <input type="email" placeholder="Email address" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button className="sign-in-button">Sign In</button>
            <a href="#" className="forgot-password">Forgot your password?</a>
            <p className="sign-up-prompt">Need an account? <a href="#">Sign up</a></p>
          </div>
          <p className="intro-message">Share your thoughts, stories, and secrets anonymously.</p>
          <footer className="footer">© 2023 Note Whisper. All rights reserved.</footer>
        </div>
      );
    };

    export default App;
