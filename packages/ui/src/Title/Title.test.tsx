import { render } from '@testing-library/react';
import { Title } from './Title';

describe('Title component', () => {
  test('Should be rendered', () => {
    const { container } = render(<Title />);
    expect(container).toBeInTheDocument();
  });
});
