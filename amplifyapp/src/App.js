import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Pet Trainer Logo" />
        <h1>Welcome to Pet Trainer and Behavior Analyst</h1>
        <p>Your go-to app for monitoring and improving your pet's behavior and training.</p>
        <button>Create an account</button>
      </header>
      <nav className="App-nav">
        <ul>
          <li><a href="#login">Login</a></li>
          <li><a href="#register">Register</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#reports">Reports</a></li>
        </ul>
      </nav>
      <main className="App-main">
        <section id="benefits">
          <h2>Benefits</h2>
          <p>Your go-to app for monitoring and improving your pet's behavior and training.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>Copyright © 2024 Pet Trainer and Behavior Analyst</p>
      </footer>
    </div>
  );
}

export default App;
