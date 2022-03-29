export const observe = (inFn: () => void, el: HTMLElement, outFn?: () => void, opts?: { rootMargin?: string, threshold?: number }) => {
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) inFn();
    else if (outFn) { outFn(); }
  }, { ...opts }).observe(el);
};

export const observeOnce = (fn: () => void, el: HTMLElement, opts?: { rootMargin?: string, threshold?: number }) => {
  new IntersectionObserver(([entry], observer) => {
    if (entry.isIntersecting) fn(); observer.unobserve(entry.target);
  }, { ...opts }).observe(el);
};
