# Frontend test

## Table of contents

- [Frontend test](#frontend-test)
  - [Table of contents](#table-of-contents)
    - [Overview](#overview)
    - [Objectives](#objectives)
    - [Requirements](#requirements)
    - [Plus Points](#plus-points)
    - [Outcomes](#outcomes)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

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

### Local development

- Clone the project from GitHub.
- Run `npm install` to install the dependencies.
- Run `gulp` to start the project.

### Screenshot

![Screenshot](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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


- Create the homepage JavaScript functionality.
- SCSS sorted alphabetically.

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Browsersync + Sass + Gulp in 15 minutes](https://www.youtube.com/watch?v=q0E1hbcj-NI&ab_channel=CoderCoder) - This helped me understand how to use Browsersync with Sass and Gulp.
- [Easily test your site across all browsers](https://www.youtube.com/watch?v=pRpsi1Z5YY0&ab_channel=KevinPowell) - This helped me test my site across all browsers (Chrome, Firefox, Edge, Safari, Opera, etc.)
- [Reliable end-to-end testing for modern web apps.](https://playwright.dev/) - This is tool I used to test my site across all browsers (Chrome, Firefox, Edge, Safari, Opera, etc.)
- [HTML, CSS Search Boxes Examples](https://templateyou.com/free-css-search-boxes/)

## Author

- LinkedIn - [Kiur Jullis](https://www.linkedin.com/in/kiur-jullis-89b4929b/)
- GitHub - [Kiur Jullis](https://github.com/77ccreed)
