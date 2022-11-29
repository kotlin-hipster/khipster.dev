import { component$} from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="mx-auto mt-16 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
      <div class="border-t border-slate-900/5 py-4">
        <p class="mt-5 text-center text-sm leading-6 text-slate-500">
          © 2022-23 <a href="https://sendilkumarn.com" target="_blank" rel="noopener">sendilkumarn</a>. All rights reserved.
        </p>
        <div class="mt-4 flex items-center justify-center space-x-4 text-sm leading-6 text-slate-700">
          <a href="https://twitter.com/kotlinhipster" target="_blank" rel="noopener">Twitter</a>
          <div class="h-4 w-px bg-slate-500/20"></div>
          <a href="https://github.com/jhipster/jhipster-kotlin" target="_blank" rel="noopener">GitHub</a>
          <div class="h-4 w-px bg-slate-500/20"></div>
          <a href="https://jhipster.tech" target="_blank" rel="noopener">JHipster</a>
        </div>
      </div>
    </footer>
  );
});
