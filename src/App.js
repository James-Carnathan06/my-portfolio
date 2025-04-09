import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  const projects = [
    { title: 'Project One', desc: 'This is the first project description.' },
    { title: 'Project Two', desc: 'This is the second project description.' },
    { title: 'Project Three', desc: 'This is the third project description.' },
  ];

  return (
    <div>
      <header>
        <h1>James Carnathan</h1>
        <p>Lorem Ipsum</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} onClick={() => toggleProject(index)} style={{ cursor: 'pointer', marginBottom: '1rem' }}>
              <strong>{project.title}</strong>
              {activeProject === index && <p>{project.desc}</p>}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:jamescarnathan2006@gmail.com">jamescarnathan2006@gmail.com</a></p>
        <p><a href="https://www.linkedin.com/in/james-carnathan-8a54b835b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><a href="https://github.com/James-Carnathan06" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><a href="https://leetcode.com/u/JamesCarnathan06/" target="_blank" rel="noopener noreferrer">LeetCode</a></p>
      </section>

      <footer>
        &copy; 2025 James Carnathan. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
