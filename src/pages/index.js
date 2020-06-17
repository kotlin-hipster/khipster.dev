import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import classnames from 'classnames';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import styles from './styles.module.css';

const features = [
  {
    title: 'Developer Platform',
    content:
      "Generate Full Stack application (along with tests). Sets up complete development environment along with your build tools.",
  }, 
  {
    title: 'Cloud Native Application',
    content:
      'Cloud Native by default along with Docker configuration files. You can generate Docker compose scripts and K8s templates. Supports multiple cloud providers.',
  },
  {
    title: 'No Lock-In; Customizable',
    content:
      'Under the hood, we use Spring Boot, Angular / React, Webpack, and other amazing tools. You can customize and tailor the app as per your requirement.',
  },
];

const lines = [
  'npm i -g generator-jhipster-kotlin',
  'mkdir kt-app && cd kt-app',
  'khipster',
  '// answer the prompts'
]

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Set up a modern Full Stack web app by running a single command.'}
    >
      <div className={classnames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
               <Link
                 className={classnames(
                   'button button--outline button--secondary button--lg',
                   styles.getStarted,
                 )}
                 to={useBaseUrl('docs/')}>
                 Get Started
               </Link>
             </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div
                  key={idx}
                  className={classnames('col col--4', styles.feature)}
                >
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>Get started in seconds</h2>
              <p>
                KHipster
                lets you <strong>focus on code, not build tools</strong>.
                <br />
                <br />
                To create a project called <i>kt-app</i>, run this command:
              </p>
              <CodeBlock className="language-sh">
                  {lines.join('\n')}
              </CodeBlock>
            </div>
            <div className="col col--5 col--offset-1">
              <a href="https://asciinema.org/a/dvESXUMGHqxCORGqpz1294kf6" target="_blank"><img src="https://asciinema.org/a/dvESXUMGHqxCORGqpz1294kf6.svg" /></a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
