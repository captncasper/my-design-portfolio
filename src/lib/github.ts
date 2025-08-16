interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

export async function getProjects(): Promise<Repository[]> {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_TOKEN) {
    console.error("GitHub token is not set in environment variables.");
    return [];
  }

  try {
    const response = await fetch('https://api.github.com/users/captncasper/repos?sort=pushed&per_page=6', {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 } // Revalidate data every hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos: Repository[] = await response.json();
    
    // Filter out repositories you don't want to show, like your portfolio repo itself
    const filteredRepos = repos.filter(repo => repo.name !== 'my-design-portfolio');
    
    return filteredRepos;
  } catch (error) {
    console.error("Failed to fetch projects from GitHub:", error);
    return [];
  }
}
