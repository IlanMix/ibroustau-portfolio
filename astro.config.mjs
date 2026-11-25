import { defineConfig } from 'astro/config';

// À adapter avec ton pseudo GitHub :
// - dépôt nommé "portfolio"            -> site: 'https://TON-PSEUDO.github.io', base: '/portfolio'
// - dépôt nommé "TON-PSEUDO.github.io" -> site: 'https://TON-PSEUDO.github.io', pas de base
export default defineConfig({
  site: 'https://IlanMix.github.io',
  base: '/portfolio',
});
