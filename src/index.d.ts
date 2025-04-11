export interface DynamicOptions {
  baseWait: number;
  maxWait: number;
}

export declare function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void;

export declare function throttle<T extends (...args: any[]) => any>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void;

export declare function dynamic<T extends (...args: any[]) => any>(
  fn: T,
  options: DynamicOptions
): (...args: Parameters<T>) => void;