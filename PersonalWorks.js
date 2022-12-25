import React from 'react';

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

export default PersonalWorks;
