import React from 'react';
import { Navbar, Welcome , Dock, Home} from './components';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Resume, Safari, Terminal , Finder, Text, ImageWindowContent, Contact} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder />
      <Text />
      <ImageWindowContent />
      <Contact />
      <Home />
    </main>
  )
}

export default App