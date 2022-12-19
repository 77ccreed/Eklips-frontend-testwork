# Frontend test

## Table of contents

- [Frontend test](#frontend-test)
  - [Table of contents](#table-of-contents)
    - [Overview](#overview)
    - [Objectives](#objectives)
    - [Requirements](#requirements)
    - [Plus Points](#plus-points)
    - [Outcomes](#outcomes)
  - [Results of the test](#results-of-the-test)
    - [How to run the project](#how-to-run-the-project)
    - [Screenshot of the project in the browser](#screenshot-of-the-project-in-the-browser)
  - [Built with](#built-with)
    - [My process](#my-process)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)

## Overview

### Objectives

The idea of this test is to show the knowledge of the user in the following areas:

- HTML integration (conversion of design into HTML)
- Front-end languages (HTML5, CSS3 and JS)
- Front-end practices and technologies (responsive design)
- Development practices (code versioning, testing and building)

### Input

Designs provided in Figma

- <https://www.figma.com/file/lyaZPDsXoKuVsRuPsBU2ti/Test?node-id=0%3A1&t=PYfGJYUdVFPJdXEA-0>

### Requirements

Convert design to one HTML5 / CSS3 / JS page (separate files for JS and CSS)
following the rules below:

- Host code under a GitHub repository
- Delivery should support both Desktop and Mobile view
- Page produced should be compatible with and tested on:
- Chrome, FF and Edge on the desktop, Chrome on Android, Safari on iOS
Mobile

### Plus Points

- There is only one CSS file that is compiled and minified from SASS or LESS
files
- Script files are minified using some sort of automated system (Gulp, Grunt,
Webpack)
- Page is fluid responsive
- There is readme in GitHub repository that describes how to use these
automated systems
- Page is WCAG AA complient

### Outcomes

- In order to evaluate the test we should only need to follow the steps below:
- Checkout the source from GitHub
- Open the page in a browser

## Results of the test

### How to run the project

- Clone the project from GitHub.
- Run `npm install` to install the dependencies.
- Run `gulp` to start the project.
- Go to `http://localhost:3000/` in your browser.

### Screenshot of the project in the browser

![Screenshot](./img/Screenshot.png)
![Mobile Screenshot](./img/Screenshot-mobile.png)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [Gulp](https://gulpjs.com/) - Task runner
- [Browsersync](https://browsersync.io/) - Live reload
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Autoprefixer](https://autoprefixer.github.io/) - CSS vendor prefixes

### My process

- Day 1: I looked at the design of the Figma file and read the assignment. I watched a video on how to set up a project using Gulp, Browsersync, Sass, and Autoprefixer. I set up the project and tried how to test it with Playwright. I wrote a draft README. All this took me about 2 hours.
- Day 2: I pulled images and SVG icons from the Figma design. I created a variables.scss file. It took me about 2 hours.
- Day 3: I wrote the HTML structure of the page. The footer of the page is styled first because it is easier to do. It took me about 4 hours.
- Day 4: I drafted the CSS styles for all the other components. Not everything is finished correctly. It took me about 6 hours.
- Day 5: I improved the CSS styles and the README file. It took me about 6 hours.
- Day 6: I finished designing all the components except the navbar. I've uploaded the repo to GitHub. I tried to upload the page to Netlify but it doesn't work. It could be an issue with the build process or configuration settings. All this took 8 hours of working time.
- Day 7: I rewrote the README. I wrote navbar views. I tried uploading the page to Netifly and GitHub but the page preview is not working. It took me about 8 hours.
- Day 8: I refactored the navbar styles. It took me about 4 hours.

### What I learned

The assignment was good practice on how to use nested SASS and write code quickly. It was also a great way to explore the different possibilities of SASS, such as applying styles to different kinds of elements and nesting different selectors. Overall, it was a great way to learn how to write more efficient and organized SASS code.

### Useful resources

- [Browsersync + Sass + Gulp in 15 minutes](https://www.youtube.com/watch?v=q0E1hbcj-NI&ab_channel=CoderCoder) - This helped me understand how to use Browsersync with Sass and Gulp.
- [Easily test your site across all browsers](https://www.youtube.com/watch?v=pRpsi1Z5YY0&ab_channel=KevinPowell) - This helped me test my site across all browsers (Chrome, Firefox, Edge, Safari, Opera, etc.)
- [Reliable end-to-end testing for modern web apps.](https://playwright.dev/) - This is tool I used to test my site across all browsers (Chrome, Firefox, Edge, Safari, Opera, etc.)
- [HTML, CSS Search Boxes Examples](https://templateyou.com/free-css-search-boxes/)
