import axiosClient from "./axios-client";

const authApi = {
    login: (email: string, password: string) => axiosClient.post('/auth/login', { email, password }),
    logout: () => axiosClient.post('/auth/logout'),
    register: (data: {
        email: string;
        password: string;
        name: string;
        phone: string;
    }) => axiosClient.post('/auth/register', { ...data }),
}

export default authApi;
