const blessed = require('blessed');

// Creating terminal app
const screen = blessed.screen({
    smartCSR: true,
    mouse: true,
    title: 'Calculator',
});

const container = blessed.box({
    parent: screen,
    content: 'Test',
    border: 'line',
})

blessed.button({
    content: 'Plus',
    parent: container,
    border: 'line',
    width: 10,
    height: 3,
    top: 2,
})

// Exit
screen.key(['C-c'], (ch, key) => {
    return process.exit(0);
});

screen.render();