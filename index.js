const blessed = require('blessed');

// Creating terminal app
const screen = blessed.screen({
    smartCSR: true,
    mouse: true,
    title: 'Calculator',
});

// Exit
screen.key(['C-c'], (ch, key) => {
    return process.exit(0);
});

screen.render();