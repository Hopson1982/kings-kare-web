import React from 'react';
import { render } from '@testing-library/react';
import Header from '../component/Header';

it('Renders header with image, h1, p', () => {
    const { queryByText, getByRole } = render(
        <Header />,
    )
    expect(getByRole('img', { name: /KingsKareLogo/i })).toBeTruthy();

    expect(getByRole('heading', { name: /King's Kare/i })).toBeTruthy();

    expect(queryByText('Get the best hair care products from King\'s Kare.')).toBeTruthy();
})