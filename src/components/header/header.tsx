import { component$ } from '@builder.io/qwik';
import { GitHubLogo } from '../logo/github-logo';

export default component$(() => {
  return (
    <header class="flex">
      <nav class="absolute flex w-full items-center justify-end gap-4 px-6 py-4 font-medium text-gray-800">
        <a href="https://github.com/jhipster/jhipster-kotlin" target="_blank" rel="noopener" class="hover:text-blue-600">
         <GitHubLogo />
        </a>
      </nav>
    </header>
  );
});
