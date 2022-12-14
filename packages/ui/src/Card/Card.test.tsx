import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
  test('Should be rendered', () => {
    const { container } = render(<Card />);
    expect(container).toBeInTheDocument();
  });
});
