export const Social = ({ title, description, href }: SocialProps) => {
    const img = new URL('/khip.png', href).href;
    const imgAlt =
      'Image of KHipster logo';

    return (
      <>
        {/*  Open Graph: https://ogp.me/  */}
        <meta property="og:url" content={href} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img} />
        <meta property="og:image:alt" content={imgAlt} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="418" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="khipster.dev" />
        <meta property="og:locale" content="en_US" />
  
        {/*  Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kotlinhipster" />
        <meta name="twitter:creator" content="@sendilkumarn" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:image:alt" content={imgAlt} />
      </>
    );
  };
  
  interface SocialProps {
    title: string;
    description: string;
    href: string;
  }