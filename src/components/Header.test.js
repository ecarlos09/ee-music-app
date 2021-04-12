// Import screen watcher
import { render, screen, within } from '@testing-library/react';

// Import our app file
import Header from './Header';

describe('Header', () => {
    beforeEach(() => {
        // Render the Header component before each test
        render(<Header />);
    })

    it('renders a heading containing the app name', () => {
        const heading = screen.queryByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toContain("Choonsic");
    })
})