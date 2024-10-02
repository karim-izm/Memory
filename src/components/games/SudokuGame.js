import React from 'react';

const SudokuGame = () => {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src="https://cdn.htmlgames.com/DailySudoku/" // The URL of the game page
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allowFullScreen
        title="Ultimate Sudoku"
      />
    </div>
  );
};

export default SudokuGame;
