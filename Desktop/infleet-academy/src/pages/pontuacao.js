// src/pages/Pontuacao.js
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Pontuacao() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    async function fetchPontuacoes() {
      const querySnapshot = await getDocs(collection(db, "pontuacoes"));
      const dados = [];
      querySnapshot.forEach(doc => {
        dados.push(doc.data());
      });
      setRanking(dados);
    }
    fetchPontuacoes();
  }, []);

  return (
    <div>
      <h2>Ranking de Pontuação</h2>
      <ul>
        {ranking.map((user, i) => (
          <li key={i}>{user.nome}: {user.pontos} pts</li>
        ))}
      </ul>
    </div>
  );
}
