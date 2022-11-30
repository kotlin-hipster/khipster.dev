import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { Social } from './social';
import { Vendor } from './vendor';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const { href } = useLocation();
  const head = useDocumentHead();
  const title = head.title ? `${head.title} - KHipster` : `KHipster - Kotlin JHipster generator`;
  const description =
    head.meta.find((m) => m.name === 'description')?.content ||
    `Kotlin based Spring boot application generator 🎉!`;

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={href} />
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

      {import.meta.env.PROD && (
          <Social title={title} description={description} href={href} />
          <Vendor />
      )}

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
