import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <meta name="google-site-verification" content="JjOWWM8cXompIfzqCKn8zJU8qmIsbkwfwJLXznu3HCU" />

      <meta name="theme-color" content="#7F52FF" />

      <meta name="application-name" content="KHipster - Kotlin Hipster" />

      <meta name="msapplication-TileColor" content="#7F52FF" />
      <meta name="msapplication-navbutton-color" content="#7F52FF" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml?v=3" />

      <meta name="apple-mobile-web-app-status-bar-style" content="#7F52FF" />
      <meta name="apple-mobile-web-app-title" content="KHipster - Kotlin Hipster" />

      <meta name="description" content="Kotlin based Spring boot application generator" />

      {/* OG metas */}
      <meta name="description" content="Kotlin based Spring boot application generator" />

      <meta property="og:site_name" content="khipster.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Kotlin based Spring boot application generator" />
      <meta property="og:url" content="https://khipster.dev"></meta>
      <meta property="og:image" content="/khip.svg" />
      <meta property="og:title" content="KHipster - Kotlin Hipster" />

      <meta name="twitter:site" content="@kotlinhipster" />
      <meta name="twitter:creator" content="@sendilkumarn" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="Kotlin based Spring boot application generator" />
      <meta name="twitter:image" content="/khip.svg" />
      <meta name="twitter:title" content="KHipster - Kotlin Hipster" />


      {/* other meta */}
      <meta name="monetization" content="$ilp.uphold.com/g93yjjNfykrj" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
