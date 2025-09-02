import { Project } from '../types/github';

function getSelectedProjects(): Project[] {
  return [
    {
      id: 7,
      name: "ProConnect",
      description: "Plataforma inovadora que conecta profissionais autônomos a clientes que buscam serviços de qualidade, permitindo cadastrar, gerenciar e divulgar seus serviços.",
      language: "Next.js",
      stars: 0,
      forks: 0,
      url: "https://github.com/billiezinha/ProConnect",
      createdAt: "2024-01-15",
      topics: ["nextjs", "react", "supabase", "networking", "collaboration"]
    },
    {
      id: 1,
      name: "dentista-connect",
      description: "Um sistema de agendamento odontológico completo com gerenciamento de agendamentos, visualização de horários e painel administrativo para dentistas.",
      language: "Next.js",
      stars: 0,
      forks: 0,
      url: "https://github.com/billiezinha/dentista-connect",
      createdAt: "2024-05-15",
      topics: ["nextjs", "react", "supabase", "prisma", "odontologia"]
    },
    {
      id: 2,
      name: "sensor",
      description: "Aplicativo Expo que utiliza o sensor de luz do dispositivo para sugerir músicas com base na iluminação do ambiente.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      url: "https://github.com/billiezinha/sensor",
      createdAt: "2024-03-01",
      topics: ["react-native", "expo", "sensors", "typescript"]
    },
    {
      id: 3,
      name: "chinelada_sideral",
      description: "Um divertido jogo em Java inspirado no clássico Space Invaders, onde a Senhora Chinela defende sua paz doméstica de uma horda de moleques travessos.",
      language: "Java",
      stars: 0,
      forks: 0,
      url: "https://github.com/billiezinha/chinelada_sideral",
      createdAt: "2023-10-20",
      topics: ["java", "game", "swing", "space-invaders"]
    },
    {
      id: 4,
      name: "billie_by_billiezinha",
      description: "Uma página de fã dedicada à artista Billie Eilish, criada para divulgar seu trabalho e discografia.",
      language: "HTML",
      stars: 0,
      forks: 0,
      url: "https://github.com/billiezinha/billie_by_billiezinha",
      createdAt: "2023-08-05",
      topics: ["html", "css", "fan-page", "frontend"]
    },
    {
      id: 5,
      name: "mochila",
      description: "Um script em Python que resolve o clássico Problema da Mochila utilizando uma abordagem de busca gulosa.",
      language: "Python",
      stars: 0,
      forks: 0,
      url: "https://github.com/billiezinha/mochila",
      createdAt: "2023-06-12",
      topics: ["python", "algorithms", "knapsack-problem"]
    }
  ];
}

export async function fetchGitHubRepos(): Promise<Project[]> {
  try {
    const projects = getSelectedProjects();
    return projects;
  } catch (error) {
    console.error('Erro ao carregar os projetos:', error);
    return getSelectedProjects();
  }
}