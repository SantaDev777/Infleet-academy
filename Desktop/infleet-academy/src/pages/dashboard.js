import React from 'react';
import { Link } from 'react-router-dom';

const modulos = [
  { id: 'JC400AD', titulo: 'JC400AD' },
  { id: 'JC450', titulo: 'JC450' },
  { id: 'JC400D', titulo: 'JC400D' },
];

export default function Dashboard() {
  return (
    <div>
      <h1>Bem-vindo à Infleet Academy</h1>
      <h2>Treinamentos disponíveis</h2>
      {modulos.map(mod => (
        <Link key={mod.id} to={`/modulo/${mod.id}`}>
          <div>{mod.titulo}</div>
        </Link>
      ))}
    </div>
  );
}
