# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/desktop/Screenshot%20Frontend%20Mentor%20Loopstudios%20landing%20page.png)

### Links

- Solution URL: https://github.com/tmoris/loopstudios-landing-page
- Live Site URL: https://tmoris.github.io/loopstudios-landing-page/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

While working on this project i have learnt
how to; access elements in the DOM, use array function in JS, use CSS grid for styling page  and create reponsive layouts


For code snippets examples, see below:

```css
.features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "feature-header feature-header features-btn features-btn"
      "feature feature feature feature";
    grid-template-rows: auto 1fr;
    gap: 0.5em;
  }
```
```js
const navLinks = document.querySelectorAll('.navlist-link');
navToggle.addEventListener('click', () => {
document.body.classList.toggle('nav-open');
});

```

<!-- If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more. -->


### Useful resources

- [web.dev](https://web.dev/learn/css/) - This helped me learn mordern CSS techniques. I really liked the content and will use it going forward.
- [kevinpowell](https://courses.kevinpowell.co/conquering-responsive-layouts) - This is an amazing course which helped me finally understand responsive web design. I'd recommend it to anyone still learning this concept.



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@tmoris](https://www.frontendmentor.io/profile/tmoris)
- Twitter - [@tibenkanamoris](https://www.twitter.com/tibenkanamoris)


