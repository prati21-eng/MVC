const fs = require('fs');
const path = require('path');

const log = (filename) => {

  return (req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFile(filename, log, (err) => {
      if (err) console.error('Log write error:', err);
    });
    next();
  };
};

module.exports = log;
