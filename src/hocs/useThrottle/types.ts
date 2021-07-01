export interface IThrottleOptions<T> {
  callback: (value: T) => void;
  throttle?: number;
}
