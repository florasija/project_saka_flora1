import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './UserList.css';

const fetchUsers = async () => {

  return [
    { id: 1, name: 'Nikola Tesla' },
    { id: 2, name: 'Albert Einstein' },
    { id: 3, name: 'Al Haytham' },
    { id: 4, name: 'Niels Bohr' },
  ];
};

const UserList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <ul className="user-list">
      {data.map((user) => (
        <li key={user.id} className="user-item">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
