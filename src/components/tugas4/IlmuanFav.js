import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './IlmuanFav.css';

const fetchUsers = async () => {
  return [
    { id: 1, name: 'Nikola Tesla' },
    { id: 2, name: 'Albert Einstein' },
    { id: 3, name: 'Al Haytham' },
    { id: 4, name: 'Niels Bohr' },
  ];
};

const IlmuanFav = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['person'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <ul className="person-list">
      {data.map((person) => (
        <li key={person.id} className="person-item">
          {person.name}
        </li>
      ))}
    </ul>
  );
};

export default IlmuanFav;
