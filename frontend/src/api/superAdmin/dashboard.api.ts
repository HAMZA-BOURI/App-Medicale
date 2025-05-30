import api from '../axios';

export const getHospitalStats = async () => {
  try {
    const response = await api.get('/super-admin/dashboard/hospital-stats');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getFinancialOverview = async () => {
  try {
    const response = await api.get('/super-admin/dashboard/financial-overview');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getUserStats = async () => {
  try {
    const response = await api.get('/super-admin/dashboard/user-stats');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getSystemAlerts = async () => {
  try {
    const response = await api.get('/super-admin/dashboard/system-alerts');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
