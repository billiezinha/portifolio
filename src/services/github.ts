import { GitHubRepo, Project } from '../types/github';

const GITHUB_USERNAME = 'billiezinha';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export async function fetchGitHubRepos(): Promise<Project[]> {
  try {
    const response = await fetch(`${GITHUB_API_URL}?sort=updated&per_page=20`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forks and private repos, then convert to our Project format
    const projects: Project[] = repos
      .filter(repo => !repo.private && repo.description) // Only public repos with descriptions
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'Sem descrição disponível',
        language: repo.language || 'Não especificado',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        url: repo.html_url,
        demo: repo.homepage || undefined,
        createdAt: repo.created_at,
        topics: repo.topics || []
      }))
      .slice(0, 6); // Show only top 6 projects
    
    return projects;
  } catch (error) {
    console.error('Erro ao buscar repositórios do GitHub:', error);
    // Return fallback data if API fails
    return getFallbackProjects();
  }
}

function getFallbackProjects(): Project[] {
  return [
    {
      id: 1,
      name: "ProConnect",
      description: "Projeto de conexão profissional desenvolvido para facilitar networking e colaboração entre desenvolvedores.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      url: "https://github.com/billiezinha/ProConnect",
      createdAt: "2024-01-15",
      topics: ["javascript", "networking", "collaboration"]
    }
  ];
}