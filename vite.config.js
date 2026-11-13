import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Actions provides GITHUB_REPOSITORY as "owner/repository".
// This makes project-page URLs work without manually editing the repo name.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName
  ? `/${repositoryName}/`
  : '/';

export default defineConfig({
  plugins: [react()],
  base,
});
