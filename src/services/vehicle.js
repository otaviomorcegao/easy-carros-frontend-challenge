import api from './api';

export const getList = async () => {
  try {
    const res = await api.get('/vehicle');

    if (res.status === 200) return res.data.data;

    throw new Error('Erro ao busca lista de veículos');
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createVehicle = async (vehicleData) => {
  try {
    const res = await api.post('/vehicle', vehicleData);

    if (res.status === 200) return true;

    throw new Error('Erro ao inserir novo veículo');
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteVehicle = async (id) => {
  try {
    const res = await api.delete(`/vehicle/${id}`);

    if (res.status === 204) return true;

    throw new Error('Erro ao excluir novo veículo');
  } catch (err) {
    console.log(err.message);
    return null;
  }
};
