import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import page from './page';

jest.mock('axios');

describe('page component', () => {
  const users = [
    { _id: '1', Name: 'John Doe' },
    { _id: '2', Name: 'Jane Smith' },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: users });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the search input', () => {
    const { getByPlaceholderText } = render(<page />);
    expect(getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders the broker list', async () => {
    const { getByText } = render(<page />);
    await waitFor(() => {
      users.forEach(user => {
        expect(getByText(user.Name)).toBeInTheDocument();
      });
    });
  });

  it('filters the broker list based on search query', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<page />);
    const query = 'john';
    fireEvent.change(getByPlaceholderText('Search...'), { target: { value: query } });
    await waitFor(() => {
      expect(getByText(users[0].Name)).toBeInTheDocument();
      expect(queryByText(users[1].Name)).not.toBeInTheDocument();
    });
  });

  it('fetches user data on mount', async () => {
    render(<page />);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/user/get');
    });
  });
});