import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { KhipsterLogo } from '~/components/logo/khipster-logo';

export default component$(() => {
  return (
    <>
      <div class="m-auto flex flex-col items-center align-center px-8 pt-48 pb-12 text-center text-black md:w-[650px]">
        <div class="flex items-end align-baseline justify-between">
          <KhipsterLogo />
          <h1 class="font-bold pt-8 text-5xl tracking-wider">KHipster</h1>
        </div>
        <h2 class="font-title pt-8 md:text-2xl text-lg sm:text-xl">Kotlin based JHipster generator</h2>
      </div>


      <div class="m-auto px-4 text-gray-800 md:w-[650px] md:px-0">
        <div class="relative rounded-xl p-1 md:p-2 from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r md:text-xl">
            <div class="flex flex-col space-y-2 overflow-x-auto px-2 md:px-8 py-6 bg-white md:overflow-hidden">
                <code class="whitespace-pre">npm i -g generator-jhipster-kotlin</code>
                <code class="whitespace-pre">mkdir app && cd app</code>
                <code class="whitespace-pre">khipster</code>
            </div>

            <div class="absolute inset-0 flex items-center invisible md:visible" style="z-index: -1; margin: 0">
                <div class="left-6 -mr-8 sm:mr-2 mt-8 h-full w-full translate-x-4 scale-y-95 transform rounded-xl from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r"></div>
            </div>
        </div>
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to KHipster',
};
