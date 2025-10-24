'use client';

import { useEffect, useRef } from 'react';
import TypeIt from 'typeit-react';

export default function HeroTypewriter() {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
          <TypeIt
            options={{
              strings: ['Hussain Rana'],
              speed: 100,
              waitUntilVisible: true,
              cursor: false,
            }}
            getBeforeInit={(instance) => {
              return instance;
            }}
          />
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-white mb-6">
        <TypeIt
          options={{
            strings: ['Full-Stack Developer & Software Engineer'],
            speed: 50,
            startDelay: 1500,
            waitUntilVisible: true,
            cursor: false,
          }}
        />
      </p>
    </div>
  );
}
