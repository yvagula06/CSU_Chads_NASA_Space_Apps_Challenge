import React from 'react';

import Navbar from '../components/Navbar';
import '../styles/About.scss';
import Developers from './Developers';

function About() {
  return (
    <div className='about'>
      <Navbar />
      <div className='main'>
        The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and
        Space Administration (NASA), which succeeded in preparing and landing the first humans on the Moon from 1968 to 1972.
        <br />
        <br />
        When we started working on this project, it was just for fun. As we dived deep into it, we realized how little we know compared to what we thought. Our
        aim is to share whatever we have learned so far with everyone. We want to make everybody aware about the people who went to moon, did not went just for
        fun, but for some scientific purposes too, that the space which looks quiet is not a calm place. What might look calm to our eyes might be very chaotic
        in reality. The Moon, our Earth’s true companion has it’s own secrets. Hiding in it’s belly the moonquakes which makes it ring like a bell. Alas! We
        thought there is no sound on the moon. Let’s explore this fascinating place on our app ‘Moonquake Visualized’.
      </div>
      <Developers />
    </div>
  );
}

export default About;
