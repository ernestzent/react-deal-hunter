import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../hooks/useDebounce';

describe('Custom Hook: useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('debe retornar el valor inicial inmediatamente', () => {
    const { result } = renderHook(() => useDebounce('Batman', 500));
    expect(result.current).toBe('Batman');
  });

  test('debe actualizar el valor solo después de que pase el tiempo de delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'Bat', delay: 500 } }
    );

    rerender({ value: 'Batman', delay: 500 });

    expect(result.current).toBe('Bat');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('Batman');
  });
});