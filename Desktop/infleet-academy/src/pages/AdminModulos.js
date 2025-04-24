import React, { useEffect, useState } from 'react';
import { criarModulo, listarModulos, deletarModulo, atualizarModulo } from '../services/moduloService';

export default function AdminModulos() {
  const [modulos, setModulos] = useState([]);
  const [novoModulo, setNovoModulo] = useState({ titulo: '', descricao: '', videoURL: '' });

  useEffect(() => {
    buscarModulos();
  }, []);

  const buscarModulos = async () => {
    const lista = await listarModulos();
    setModulos(lista);
  };

  const handleCriar = async () => {
    if (!novoModulo.titulo) return;
    await criarModulo({ ...novoModulo, ativo: true });
    setNovoModulo({ titulo: '', descricao: '', videoURL: '' });
    buscarModulos();
  };

  const handleAtualizar = async (id) => {
    const novoTitulo = prompt("Novo título:");
    if (novoTitulo) {
      await atualizarModulo(id, { titulo: novoTitulo });
      buscarModulos();
    }
  };

  const handleDeletar = async (id) => {
    await deletarModulo(id);
    buscarModulos();
  };

  return (
    <div>
      <h2>Administração de Módulos</h2>
      <input placeholder="Título" value={novoModulo.titulo} onChange={e => setNovoModulo({ ...novoModulo, titulo: e.target.value })} />
      <input placeholder="Descrição" value={novoModulo.descricao} onChange={e => setNovoModulo({ ...novoModulo, descricao: e.target.value })} />
      <input placeholder="URL do Vídeo" value={novoModulo.videoURL} onChange={e => setNovoModulo({ ...novoModulo, videoURL: e.target.value })} />
      <button onClick={handleCriar}>Adicionar Módulo</button>

      <ul>
        {modulos.map(mod => (
          <li key={mod.id}>
            <strong>{mod.titulo}</strong> — {mod.descricao}
            <button onClick={() => handleAtualizar(mod.id)}>Editar</button>
            <button onClick={() => handleDeletar(mod.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
