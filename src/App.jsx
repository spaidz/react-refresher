import React from 'react';
import Card from './Card.jsx';
import profilePic1 from './assets/profile1.jpg';
import profilePic2 from './assets/profile2.jpg';
import profilePic3 from './assets/profile3.jpg';

function App() {
  return (
    <div>
      <Card name="Gaveen" profilePic={profilePic1} desc="I am a software engineer"/>
      <Card name="John Doe" profilePic={profilePic2} desc="I am a graphic designer"/>
      <Card name="Jane Smith" profilePic={profilePic3} desc="I am a project manager"/>
    </div>
  );
}


export default App
