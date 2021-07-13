
const ticTacToe = require('./game/game');

module.exports = (app) => {
  app.use('/api/v1/games', ticTacToe);
};
