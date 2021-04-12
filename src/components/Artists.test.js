// Import screen watcher
import { render, screen, within } from '@testing-library/react';

// Import our app file
import Artists from './Artists';

describe('Artists', () => {
    beforeEach(() => {
        // Render the Artists component before each test
        render(<Artists />);
    })

    it('renders a table', () => {
        const table = screen.queryByRole('table');
        expect(table).toBeInTheDocument();
    })
})