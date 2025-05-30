import api from '../axios';

export const getHospitals = async (params: any = {}) => {
  try {
    const response = await api.get('/super-admin/hospitals', { params });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getHospitalById = async (id: string) => {
  try {
    const response = await api.get(`/super-admin/hospitals/${id}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const createHospital = async (data: any) => {
  try {
    const response = await api.post('/super-admin/hospitals', data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const updateHospital = async (id: string, data: any) => {
  try {
    const response = await api.put(`/super-admin/hospitals/${id}`, data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteHospital = async (id: string) => {
  try {
    const response = await api.delete(`/super-admin/hospitals/${id}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
