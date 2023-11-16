import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import propertyDetails from './page';

jest.mock('axios');

describe('propertyDetails component', () => {
  const users = [
    { _id: '1', Name: 'John Doe', Email: 'john@example.com', Gender: 'Male' },
    { _id: '2', Name: 'Jane Smith', Email: 'jane@example.com', Gender: 'Female' },
  ];
  const params = { _id: '1' };

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: users });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the user name', async () => {
    const { findByText } = render(<propertyDetails params={params} />);
    const name = await findByText(users[0].Name);
    expect(name).toBeInTheDocument();
  });

  it('renders the user email and gender', async () => {
    const { findByText } = render(<propertyDetails params={params} />);
    const email = await findByText(`Email: ${users[0].Email}`);
    const gender = await findByText(`Gender: ${users[0].Gender}`);
    expect(email).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
  });

  it('fetches user data on mount', async () => {
    render(<propertyDetails params={params} />);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/user/get');
    });
  });

  it('finds the correct user based on params', async () => {
    const { findByText } = render(<propertyDetails params={params} />);
    const name = await findByText(users[0].Name);
    expect(name).toBeInTheDocument();
  });
});