import React from 'react';
import { render } from '@testing-library/react';
import Nav from ',,/component/Nav';
import { expect, it } from '@jest/globals';

it('Renders links to home and products',()=> {
    const {queryByText , getByRole } = render(
        <Nav/>
    )

    expect(getByRole('a', {}))
});