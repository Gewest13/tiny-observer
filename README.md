
# Tiny Intersection Observer 🔭

Tiny library to observe intersecting elements!




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
  function // when element is intersecting
  element  // element to observe
  function // optional: when element isn't intersecting
  options  // optional: { rootMargin, treshold }
);

observeOnce(
  function // when element is intersecting
  element  // element to observe
  options  // optional: { rootMargin, treshold }
);
```

[Intersection Observer Options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#:~:text=callback%20is%20invoked.-,Intersection%20observer%20options,-The%20options%20object)

## Examples

```js
import {observe, observeOnce} from 'tiny-intersection-observer';

observe(
  parallaxImages(), 
  document.querySelector('.element'), 
  resetParallax(), // optional
  {rootMargin: '100px', threshold: 0.2} // optional
);

observeOnce(
  inViewAnimation(), 
  document.querySelector('.element'), 
  {threshold: 1} // optional
);
```


