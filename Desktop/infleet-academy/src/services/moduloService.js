import { db } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const moduloRef = collection(db, "modulos");

export const criarModulo = async (modulo) => {
  await addDoc(moduloRef, modulo);
};

export const listarModulos = async () => {
  const snapshot = await getDocs(moduloRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const deletarModulo = async (id) => {
  await deleteDoc(doc(db, "modulos", id));
};

export const atualizarModulo = async (id, dados) => {
  await updateDoc(doc(db, "modulos", id), dados);
};
