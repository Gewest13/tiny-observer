
# Tiny Intersection Observer 🔭

Tiny library to observe intersecting elements!
Based on: [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)


## Features

- Continuously observe element when its intersecting or not
- Observe element only on first intersection



## Installation

npm:

```bash
  npm install tiny-intersection-observer --save
```

yarn:

```bash
  yarn add tiny-intersection-observer
```
## Usage

```js
observe(
  element,  // element to observe
  function, // when element is intersecting
  function, // optional: when element isn't intersecting
  options  // optional: { rootMargin, threshold }
);

observeOnce(
  element,  // element to observe
  function, // when element is intersecting
  options  // optional: { rootMargin, threshold }
);
```

[Intersection Observer Options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#:~:text=callback%20is%20invoked.-,Intersection%20observer%20options,-The%20options%20object)

## Examples

```js
import { observe, observeOnce } from 'tiny-intersection-observer';

observe(
  document.querySelector('.element'),
  parallaxImages(), 
  resetParallax(), // optional
  { rootMargin: '100px', threshold: 0.2 } // optional
);

observeOnce(
  document.querySelector('.element'), 
  inViewAnimation(), 
  { threshold: 1 } // optional
);
```


