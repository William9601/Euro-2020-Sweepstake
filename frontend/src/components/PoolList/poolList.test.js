import { render, screen } from '@testing-library/react';
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
    // const listOutput = document.querySelector('div');
    // console.log('-----------------------', listOutput);
    // // <ListItemText primary={pool.nanoId} key={pool.id} />
    // expect(listOutput).toBe(mockData.nanoId);
  });
});
// expect(received).toBe(expected) // Object.is equality
//     Expected: "TnvJTGu10x"
//     Received: <div><div /></div>

// Expected: "TnvJTGu10x"
//     Received: <div><div class="pool-list__container"><div class="pool-list__header"><h5 class="MuiT
// ypography-root MuiTypography-h5">Active Pools</h5><nav class="MuiList-root pool-list__item MuiList-
// padding"><div /></nav></div></div></div>
