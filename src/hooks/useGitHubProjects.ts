import { useState, useEffect } from 'react';
import { Project } from '../types/github';
import { fetchGitHubRepos } from '../services/github';

export function useGitHubProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        setError(null);
        const githubProjects = await fetchGitHubRepos();
        setProjects(githubProjects);
      } catch (err) {
        setError('Erro ao carregar projetos do GitHub');
        console.error('Erro ao carregar projetos:', err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return { projects, loading, error };
}