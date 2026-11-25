export const veille = {
  theme: "L’intelligence artificielle générative appliquée au développement logiciel",
  problematique:
    "Comment l’IA générative transforme-t-elle les pratiques de développement (génération de code, agents autonomes, tests et revue), et quelles sont ses limites ?",
  motivation:
    "Ce sujet est directement lié à mon orientation vers le développement. Les assistants de code s’intègrent déjà aux outils que j’utilise, comme VS Code, PHP et Git.",
  outils: ['Perplexity AI — résumé hebdomadaire par e-mail'],
  methode:
    "Je privilégie les sources officielles et les médias spécialisés, puis je recoupe les informations avec leur source d’origine.",
  enseignements: [
    "Les outils proposent de plus en plus de modèles et peuvent choisir celui qui convient à une tâche.",
    "Les agents prennent en charge des actions plus autonomes, ce qui rend leur sécurisation et la vérification de leurs résultats essentielles.",
    "Les instructions, agents spécialisés et autres réglages par dépôt permettent d’adapter l’assistant au projet.",
  ],
  articles: [
    {
      date: '2026-10-14',
      titre: 'Les assistants de code évoluent vers des agents autonomes',
      source: 'Tech-Insider.org',
      url: 'https://tech-insider.org/github-copilot-cli-computer-use-preview-2026/',
      resume:
        'Copilot CLI, Codex CLI, Claude Code et OpenCode rivalisent sur des fonctions d’agents capables d’interagir avec des applications. Cette évolution augmente les possibilités, mais aussi l’importance du contrôle humain.',
    },
    {
      date: '2026-10-13',
      titre: 'Personnaliser Copilot pour un dépôt',
      source: 'Blockchain.news',
      url: 'https://blockchain.news/news/github-copilot-repository-customization-guide-october-2026',
      resume:
        'Le guide présente plusieurs moyens d’adapter Copilot au contexte d’un dépôt : instructions, agent skills, agents personnalisés et serveurs MCP.',
    },
    {
      date: '2026-10-09',
      titre: 'Sécurité et modèles locaux dans Copilot',
      source: 'GitHub Changelog',
      url: 'https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5/',
      resume:
        'Le sandboxing local limite les accès des agents, tandis que Copilot CLI peut découvrir des modèles locaux via Ollama. Ces évolutions illustrent l’attention portée à la sécurité et à l’exécution locale.',
    },
    {
      date: '2026-10-02',
      titre: 'De nouveaux modèles et usages pour Copilot',
      source: 'GitHub Changelog',
      url: 'https://github.blog/changelog/2026-10-02-github-copilot-weekly-releases-september-28/',
      resume:
        'Les nouveautés comprennent davantage de modèles, des workflows réutilisables et un aperçu de « computer use », qui permet à Copilot de piloter des applications.',
    },
  ],
};
