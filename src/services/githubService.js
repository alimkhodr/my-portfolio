import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'alimkhodr';

export const fetchRepositories = async () => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/${USERNAME}/repos`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os repositórios', error);
        return [];
    }
};
