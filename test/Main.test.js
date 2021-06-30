import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index'

it('Renders main with image, footer', () => {
    const { getByRole, getByText } = render(
        <Home />,
    )
    expect(getByRole('img', { name: /hair oil picture/i })).toBeTruthy();

    // footer role = contentinfo
    expect(getByRole('contentinfo')).toBeTruthy();
})