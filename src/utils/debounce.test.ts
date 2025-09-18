import { debounce } from "./debounce";

jest.useFakeTimers();

describe("debounce", () => {
  it("should call de function after the delay", () => {
    const fn = jest.fn();

    const debounceFn = debounce(fn, 1000);

    debounceFn();

    jest.advanceTimersByTime(900);

    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1001);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
