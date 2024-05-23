import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Pet Trainer and Behavior Analyst</h1>
        <p>
          Your go-to app for monitoring and improving your pet's behavior and training.
        </p>
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
        <section id="login">
          <h2>Login</h2>
          <p>Login to access your pet's training progress and behavior analysis.</p>
        </section>
        <section id="register">
          <h2>Register</h2>
          <p>Create an account to start monitoring and improving your pet's behavior today!</p>
        </section>
        <section id="dashboard">
          <h2>Dashboard</h2>
          <p>View your pet's training and behavior progress, get real-time alerts and insights.</p>
        </section>
        <section id="reports">
          <h2>Behavior Reports</h2>
          <p>Access detailed reports about your pet's behavior and health based on advanced AI analysis.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>Copyright © 2024 Pet Trainer and Behavior Analyst</p>
      </footer>
    </div>
  );
}

export default App;
