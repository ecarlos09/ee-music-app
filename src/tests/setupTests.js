import React from 'react';

// Import libraries for rendering components and simulating user events
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Import the Jest DOM library
import '@testing-library/jest-dom/extend-expect';

// Make libraries available globally for easy access
global.React = React;
global.render = render;
global.userEvent = userEvent;