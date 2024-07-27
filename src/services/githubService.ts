// src/services/githubService.ts
import axios from 'axios';
import { Repository } from '../types/github';

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'alimkhodr';

export const fetchRepositories = async (): Promise<Repository[]> => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/${USERNAME}/repos`);
        const repos = response.data;

        // Adicione uma etapa para buscar as linguagens de cada repositório
        const reposWithLanguages = await Promise.all(repos.map(async (repo: Repository) => {
            const languagesResponse = await axios.get(`${GITHUB_API_URL}/repos/${USERNAME}/${repo.name}/languages`);
            const languages = Object.keys(languagesResponse.data);

            return { ...repo, languages };
        }));

        return reposWithLanguages;
    } catch (error) {
        console.error('Erro ao buscar os repositórios', error);
        return [];
    }
};
