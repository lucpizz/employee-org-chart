![GitHub License](https://img.shields.io/badge/MIT-License-informational) ![GitHub License](https://img.shields.io/badge/Node-JavaScript-informational) ![GitHub License](https://img.shields.io/badge/React-Framework-informational) ![GitHub License](https://img.shields.io/badge/Material_UI-CSS_Framework-informational) ![GitHub License](https://img.shields.io/badge/JavaScript-Programming_Language-informational)

# Budget-Tracker

## Table of Contents

- [Description](#description)
- [Site Structure](#site-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#question)
- [License](#license)

---

## Description

This program is a simple and intuitive budget tracker. You input your transactions (deposit, withdrawls, payments, etc.), it stores them, and you can view the dashboard for your stats.

## Site Structure

```bash

```

### File Descriptions

- .gitignore (ignore files to upload into Github)
- LICENSE (MIT license)
- README.md (contains the description of the program and files)
- models directory
  - transaction.js (Mongoose Schema)
- package.json & package-lock.json (Node configuration list program details, scripts, license, and dependencies packages)
- public directory
  - db.js (onClick listener for each transaction type)
  - icons directory (pictures)
  - index.html (landing html (main webpage) for budget tracker app)
  - index.js (JavaScript code that initializes the landing page with budget tracker data)
  - manifest.webmanifest (creates the progressive web apps (PWA))
  - service-worker.js (sets the applciation architect and cache services)
  - style.css (adds style, color, and organizes the webpages)
- routes directory
  - api.js (JavaScript code for API gets, creates, and deletes user input)
- server.js (JavaScript code that envokes and establishes the express service

---

## Installation

1. Create this repostiory by using the GitHub forking process onto your computer
2. Install NPM the Node Project Manager to your program directory
3. Install dependecies to your program directory (npm install "package name"):
   - Node
   - Nodemon
   - Express
   - Eslint
   - Mongoose
   - Morgan
   - Dotenv
4. Start your MongoDB server and connect to localhost.
5. Run your server "node server.js"

---

## Usage

This program is designed to view and quickly access employee information.

---

## Contributing

GitHub Username - lucpizz

Please list your name here if you are contributing to this project.

---

## Questions

Please contact me at lucpizz@gmail.com for any questions regarding this program.

---

## License

MIT License

Copyright (c) 2021 Luca Pizzoferrato

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.