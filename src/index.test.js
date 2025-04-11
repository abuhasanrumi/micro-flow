import { debounce, throttle, dynamic } from './index.js';
import { describe, it, expect, vi } from 'vitest';

describe('debounce', () => {
  it('calls function once after wait', async () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced();
    debounced();
    await new Promise(resolve => setTimeout(resolve, 150));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe('throttle', () => {
  it('limits calls to once per wait', async () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled(); // t=0, should call
    await new Promise(resolve => setTimeout(resolve, 50));
    throttled(); // t=50, too soon
    await new Promise(resolve => setTimeout(resolve, 100)); // t=150
    throttled(); // t=150, should call
    await new Promise(resolve => setTimeout(resolve, 50)); // Ensure all timeouts resolve
    expect(fn).toHaveBeenCalledTimes(2);
  });
});

describe('dynamic', () => {
  it('adjusts wait based on frequency', async () => {
    const fn = vi.fn();
    const dynamicFn = dynamic(fn, { baseWait: 50, maxWait: 200 });
    dynamicFn(); // t=0, schedules with wait=50
    await new Promise(resolve => setTimeout(resolve, 60)); // t=60
    dynamicFn(); // t=60, schedules with wait=~72
    await new Promise(resolve => setTimeout(resolve, 250)); // t=310, extra buffer
    expect(fn).toHaveBeenCalledTimes(2);
  });
});