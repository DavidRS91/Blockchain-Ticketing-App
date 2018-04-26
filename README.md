# Blockcahin Ticketing App (Baldy)
Deployed Here: [Baldy Tickets](http://www.baldytickets.com)
Note: Please use a chrome browser.

Baldy is an Ethereum based event ticketing application. It was built as a proof of concept to show how the blockchain can be used to manage the creation and sale of tickets to live events.

## Getting Started

To run baldy on your local machine, follow these steps:
1. Clone this repo to your local machine
2. Run `$ npm install` to install all node packages.
3. In the ethereum directory run `$ node compile.js` to compile the event contracts
4. In the same directory, run `$ node deploy.js` and take note of the deployed project address that is logged to the console, it will be needed in the next step.
5. Rename config.js.sample to config.js and fill in all placeholders.
6. Run `$ npm run dev` to start the server and navigate to localhost:3029 in google chrome to view the webpage

## Prerequisites

- Infura account (https://infura.io/)
- Google API key (https://developers.google.com/maps/documentation/javascript/)
- Metamask account (https://metamask.io/)

