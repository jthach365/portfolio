import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function Introduction() {
  return (
    <div className="introduction">
      <div>
        <h1>Hi, I'm Janet</h1>
        <p>I'm looking for internships</p>
        <Link to="/personal-works">Scroll down for personal work</Link>
      </div>
    </div>
  );
}

function PersonalWorks() {
  const works = [
    {
      id: 1,
      title: 'Work 1',
      image: '/image1.jpg',
      link: 'https://example.com/work1',
    },
    {
      id: 2,
      title: 'Work 2',
      image: '/image2.jpg',
      link: 'https://example.com/work2',
    },
    // Add more works here
  ];

  return (
    <div className="personal-works">
      {works.map((work) => (
        <a key={work.id} href={work.link} target="_blank" rel="noopener noreferrer">
          <img src={work.image} alt={work.title} />
        </a>
      ))}
    </div>
  );
}

function AboutMe() {
  return (
    <div className="about-me">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor metus euismod, dignissim
        leo et, tincidunt diam. Mauris eget mollis mi, quis ornare nibh. Aliquam placerat lacus ac elit
        fermentum aliquam. Nullam pulvinar, lacus sed iaculis suscipit, diam turpis maximus arcu, eget
        rutrum purus diam ac metus.
      </p>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Introduction} />
      <Route path="/personal-works" component={PersonalWorks} />
      <Route path="/about-me" component={AboutMe} />
    </Switch>
  );
}

export default App;

