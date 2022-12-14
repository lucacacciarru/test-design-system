import { render } from '@testing-library/react';
import { Button } from './Button';

describe('test', () => {
  test('test', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });
});
