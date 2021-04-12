// Import screen watcher
import { render, screen, within } from '@testing-library/react';

// Import our app file
import App from '../App';

describe('App', () => {
    beforeEach(() => {
        // Render the App component before each test
        render(<App />);
    })

    it('renders a heading with the app name', () => {
        const heading = screen.queryAllByText('heading');
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toContain("Choonsic");
    })
})