import React from 'react';
import PropTypes from 'prop-types';

import EmptyPieceSVG from '../game-pieces/empty-svg/EmptyPieceSVG';

export default function GameSquare({
  x,
  y,
  width,
  height,
  position,
  children,
  playerMoveHandler,
}) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      id={`${position}-square`}
      onClick={() => playerMoveHandler(position)}
    >
      {children}
    </svg>
  );
}

GameSquare.propTypes = {
  children: PropTypes.element,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  playerMoveHandler: PropTypes.func.isRequired,
};

GameSquare.defaultProps = {
  children: <EmptyPieceSVG />,
};
