import { render } from '@testing-library/react';
import React from 'react';
import PoolList from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Tests data Render', () => {
  it('should correctly render mock data to screen', () => {
    const mockData = [
      {
        id: 1,
        nanoId: 'TnvJTGu10x',
        predictions: Array(0),
        user_pool: {},
      },
    ];
    const { getByText } = render(
      <Router>
        <PoolList data={mockData} />
      </Router>
    );
    getByText(mockData[0].nanoId);
  });
});
