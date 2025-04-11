export function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

export function throttle(fn, wait) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      fn(...args);
      last = now;
    }
  };
}

export function dynamic(fn, { baseWait, maxWait }) {
  let lastExecution = 0;
  return (...args) => {
    const now = Date.now();
    const sinceLast = now - lastExecution;
    const wait = Math.min(Math.max(baseWait, sinceLast * 1.2), maxWait);
    setTimeout(() => {
      fn(...args);
      lastExecution = Date.now();
    }, wait);
  };
}