import React from "react";
import Game from "../components/game";
import ReactPlayer from 'react-player';
import Video from "../../public/homevideo.mp4";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-between w-full max-w-6xl">
        {/* Text Content */}
        <article className="prose max-w-xl mr-8">
          <h1>Conway's Game of Life</h1>
          <p>
            Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input from humans.
          </p>
          <p>
            The game is played on an infinite grid of cells, where each cell can be either alive (1) or dead (0). The state of each cell changes from one generation to the next based on the following rules:
          </p>
          <ul>
            <li><strong>Underpopulation:</strong> Any live cell with fewer than two live neighbors dies.</li>
            <li><strong>Overpopulation:</strong> Any live cell with more than three live neighbors dies.</li>
            <li><strong>Reproduction:</strong> Any dead cell with exactly three live neighbors becomes a live cell.</li>
            <li><strong>Survival:</strong> Any live cell with two or three live neighbors lives on to the next generation.</li>
          </ul>
          <p>
            These simple rules can lead to incredibly complex behaviors and patterns, from still lifes and oscillators to spaceships and chaotic structures.
          </p>
        </article>

        {/* ReactPlayer styled and aligned */}
        <div className="flex-none w-1/2 ml-8"> 
          <ReactPlayer
            url={Video}
            className="react-player"
            width="100%"
            height="auto"  // Adjusted to auto for proper scaling
            playing={true}
            loop={true}
            muted={true}
            controls={false}
            style={{ borderRadius: '12px', overflow: 'hidden' }}  
          />
        </div>
      </div>

      <div className="mt-8 w-full">
        <Game />
      </div>
    </div>
  );
};

export default Home;
