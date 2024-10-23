import React, { useState, useEffect, useRef } from "react";

const Game = () => {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [grid, setGrid] = useState([]);
  const [running, setRunning] = useState(false);
  const [zoom, setZoom] = useState(20);
  const [speed, setSpeed] = useState(500); // speed in ms
  const runningRef = useRef(running); // useRef to track running state across renders
  const [mouseDown, setMouseDown] = useState(false);

  const generateEmptyGrid = () => {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
  };

  useEffect(() => {
    setGrid(generateEmptyGrid());
  }, [rows, cols]);

  const toggleCellState = (rowIndex, colIndex) => {
    const newGrid = grid.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        if (rIdx === rowIndex && cIdx === colIndex) {
          return cell ? 0 : 1;
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  const runGame = () => {
    if (!runningRef.current) return;

    setGrid((oldGrid) => {
      return oldGrid.map((row, r) =>
        row.map((cell, c) => {
          const neighbors = countNeighbors(oldGrid, r, c);
          if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
            return 0;
          }
          if (cell === 0 && neighbors === 3) {
            return 1;
          }
          return cell;
        })
      );
    });

    setTimeout(runGame, speed); // dynamically set speed
  };

  const countNeighbors = (grid, x, y) => {
    let neighbors = 0;
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];

    dirs.forEach(([dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
        neighbors += grid[newX][newY];
      }
    });

    return neighbors;
  };

  const handleZoomChange = (e) => {
    setZoom(parseInt(e.target.value));
  };

  const handleSpeedChange = (e) => {
    setSpeed(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Conway's Game of Life</h1>

      <div className="flex space-x-4 mb-4">
        <div className="form-control">
          <label className="label">Rows</label>
          <input
            type="range"
            min="10"
            max="50"
            value={rows}
            className="range range-primary"
            onChange={(e) => setRows(parseInt(e.target.value))}
          />
        </div>
        <div className="form-control">
          <label className="label">Columns</label>
          <input
            type="range"
            min="10"
            max="50"
            value={cols}
            className="range range-primary"
            onChange={(e) => setCols(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="form-control mb-4">
        <label className="label">Zoom</label>
        <input
          type="range"
          min="10"
          max="40"
          value={zoom}
          className="range range-secondary"
          onChange={handleZoomChange}
        />
      </div>

      {/* Speed slider */}
      <div className="form-control mb-4">
        <label className="label">Speed (ms per generation)</label>
        <input
          type="range"
          min="100"
          max="1000"
          step="100"
          value={speed}
          className="range range-accent"
          onChange={handleSpeedChange}
        />
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${zoom}px)`,
        }}
        onMouseUp={() => setMouseDown(false)} // Reset mouseDown when mouse is released
        onMouseLeave={() => setMouseDown(false)} // Ensure drag stops when mouse leaves grid
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onMouseDown={() => {
                toggleCellState(rowIndex, colIndex);
                setMouseDown(true); // Mark mouse as down
              }}
              onMouseEnter={() => {
                if (mouseDown) {
                  toggleCellState(rowIndex, colIndex); // Select while dragging
                }
              }}
              className={`border border-gray-300 rounded-sm ${
                cell ? "bg-black" : "bg-white"
              }`}
              style={{
                width: zoom + "px",
                height: zoom + "px",
              }}
            />
          ))
        )}
      </div>

      {/* Start/Stop button */}
      <div className="flex-1 flex justify-center space-x-2 mb-10">
        <button
          onClick={() => {
            setRunning(!running);
            runningRef.current = !running;
            if (!running) {
              runGame();
            }
          }}
          className="btn btn-primary mt-4"
        >
          {running ? "Stop" : "Start"}
        </button>

        {/* Reset button */}
        <button
          onClick={() => setGrid(generateEmptyGrid())}
          className="btn btn-secondary mt-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Game;