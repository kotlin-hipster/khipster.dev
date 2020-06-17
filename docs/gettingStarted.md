---
id: gettingStarted
title: Getting Started
sidebar_label: Getting Started
---

# Setup

1. Install Java 11 and above. Check out [sdkman](https://sdkman.io) for easily managing your JDK.
1. Install Kotlin. Check out [official guide](https://kotlinlang.org/docs/tutorials/command-line.html) 
1. Install NodeJS. Use the latest LTS version if possible from [here](https://nodejs.org/)
1. Install KHipster `npm install -g generator-jhipster-kotlin`

🎉 Setup is complete. Time to create the application.

---

# 🚀 Generate

Create an empty directory to generate the application:

`mkdir kotlinApp`

Go to that directory:

`cd kotlinApp/`

To generate your application, type:

`khipster`

Answer the prompts asked by the generator to create the application. Those prompts are listed [here](#prompts).

Once the application is generated, based on the selected build tool you can launch the application using:

* Maven
  - Linux/MacOS/Windows Powershell - `./mvnw`
  - Windows Cmd - `mvnw`
* Gradle
  - Linux/MacOS/Windows Powershell - `./gradlew`
  - Windows Cmd - `gradlew`

:::note

**Note** if you are using Maven and changed front end files after first run of the `./mvnw` command then you must run `./mvnw -Pwebpack` to see the latest front end version (Gradle detects front end changes automatically and recompiles front end if needed).

:::

The application will be available on [http://localhost:8080](http://localhost:8080)

:::important 

if you want to have "live reload" of your JavaScript/TypeScript code, you will need run `npm start` or `yarn start`. You can go to the [Using JHipster in development](https://www.jhipster.tech/development/) page for more information.

If you are using "live reload" then you can speed up server start up by excluding client side tasks by `./mvnw -P-webpack` or `./gradlew -x webpack`. It speeds up especially `Gradle`.

:::

## Prompts

_Some prompts change depending on the previous choices you have made._

### Which _type_ of application would you like to create?

Your type of application depends on whether you wish to use a microservices architecture or not. A full explanation on microservices is [available here](https://www.jhipster.tech/microservices-architecture/), if unsure use the default `Monolithic application`.

You can either use:

*   Monolithic application: this a classical, one-size-fits-all application. It's easier to use and develop, and is our recommended default.
*   Microservice gateway: in a microservices architecture, this is an edge server that routes and secures requests.
*   Microservice application: in a microservices architecture, this is one of the services.
*   JHipster UAA server: in a microservices architecture, this is an OAuth2 authentication server that secures microservices. Refer to the [JHipster UAA documentation](https://www.jhipster.tech/using-uaa/) for more information.

### What is the base name of your application?

This is the name of your application.

### What is your default Java package name?

Your application will use this as its root package.

### Do you want to use the JHipster Registry to configure, monitor and scale your application?

The [JHipster Registry](https://www.jhipster.tech/jhipster-registry/) is an Open Source tool used to manage your application at runtime.

It is required when using a microservices architecture (this is why this question is only asked when generating a monolith).

### Which _type_ of authentication would you like to use?

Answers to this question depend on previous answers. For example, if you selected the [JHipster Registry](https://www.jhipster.tech/jhipster-registry/) above, you can only use JWT authentication.

Here are all the possible options:

*   JWT authentication: use a [JSON Web Token (JWT)](https://jwt.io/), which is the default choice and what most people use.
*   OAuth 2.0 / OIDC Authentication: this uses an OpenID Connect server, like [Keycloak](http://www.keycloak.org/) or [Okta](https://developer.okta.com), which handles authentication outside of the application. This is **more secured** than JWT, but it requires to set up an OpenID Connect server, so it's a bit more complex. Please note that by default KHipster will synchronize the user data from the OpenID Connect server, and for this it will need a database.
*   HTTP Session Authentication: the classical session-based authentication mechanism, which is what people usually do with [Spring Security](http://docs.spring.io/spring-security/site/index.html).
*   Authentication with JHipster UAA server: this uses a [JHipster UAA server](https://www.jhipster.tech/using-uaa/) that must be generated separately, and which is an OAuth2 server that handles authentication outside of the application.

You can find more information on our [securing your application](https://www.jhipster.tech/security/) page.

### Which _type_ of database would you like to use?

You can choose between:

- An SQL database (H2, MySQL, MariaDB, PostgreSQL, MSSQL, Oracle), which you will access with Spring Data JPA
- [MongoDB](https://www.jhipster.tech/using-mongodb/)
- [Cassandra](https://www.jhipster.tech/using-cassandra/)
- [Couchbase](https://www.jhipster.tech/using-couchbase/)
- [Neo4j](https://www.jhipster.tech/using-neo4j/)
- No database (only available when using a [microservice application](https://www.jhipster.tech/microservices-architecture/) with JWT authentication)

### Which _production_ database would you like to use?

This is the database you will use with your "production" profile. To configure it, please modify your `src/main/resources/config/application-prod.yml` file.

If you want to use Oracle, you might need to be aware of current limitations when [using Oracle database](https://www.jhipster.tech/using-oracle/).

### Which _development_ database would you like to use?

This is the database you will use with your "development" profile. You can either use:

*   H2, running in-memory. This is the easiest way to use KHipster, but your data will be lost when you restart your server.
*   H2, with its data stored on disk. This is a better option than running in-memory, as you won't lose your data upon application restart.
*   The same database as the one you chose for production: it's a bit more complex to set up, but it should be better in the end to work on the same database as the one you will use in production. This is also the best way to use liquibase-hibernate as described in [the development guide](https://www.jhipster.tech/development/).

To configure it, please modify your `src/main/resources/config/application-dev.yml` file.

### Do you want to use the Spring cache abstraction?

The Spring cache abstraction allows to use different cache implementations: you can use [ehcache](http://ehcache.org/) (local cache), [Caffeine](https://github.com/ben-manes/caffeine) (local cache), [Hazelcast](http://www.hazelcast.com/) (distributed cache), [Infinispan](http://infinispan.org/) (distributed cache), [Memcached](https://memcached.org/) (another distributed cache) or [Redis](https://redis.io/) (configured as a single server cache). This can have a very positive impact on your application's performance, and hence it is a recommended option.

### Do you want to use Hibernate 2nd level cache?

This option will only be available if you selected to use an SQL database (as KHipster will use Spring Data JPA to access it) and selected a cache provider in the previous question.

[Hibernate](http://hibernate.org/) is the JPA provider used by KHipster, and it can use a cache provider to greatly improve its performance. As a result, we highly recommend you to use this option, and to tune your cache implementation according to your application's needs.

### Would you like to use Maven or Gradle?

You can build your generated Java application either with [Maven](http://maven.apache.org/) or [Gradle](http://www.gradle.org/). Maven is more stable and more mature. Gradle is more flexible, easier to extend, and more hype.

### Which other technologies would you like to use?

This is a multi-select answer, to add one or several other technologies to the application. Available technologies are:

#### API first development using swagger-codegen

This option lets you do [API-first development](https://www.jhipster.tech/doing-api-first-development) for your application by integrating the [Swagger-Codegen](https://github.com/swagger-api/swagger-codegen) into the build.

#### Search engine using ElasticSearch

[Elasticsearch](https://github.com/elastic/elasticsearch) will be configured using Spring Data Elasticsearch. You can find more information on our [Elasticsearch guide](https://www.jhipster.tech/using-elasticsearch/).

#### Clustered HTTP sessions using Hazelcast

By default, KHipster uses a HTTP session only for storing [Spring Security](http://docs.spring.io/spring-security/site/index.html)'s authentication and authorisation information. You can choose to put more data in your HTTP sessions.
Using HTTP sessions will cause issues if you are running in a cluster, especially if you don't use a load balancer with "sticky sessions".
If you want to replicate your sessions inside your cluster, choose this option to have [Hazelcast](http://www.hazelcast.com/) configured.

#### WebSockets using Spring Websocket

Websockets can be enabled using Spring Websocket. We also provide a complete sample to show you how to use the framework efficiently.

#### Asynchronous messages using Apache Kafka

Use [Apache Kafka](https://www.jhipster.tech/using-kafka/) as a publish/subscribe message broker.

### Which _Framework_ would you like to use for the client?

The client-side framework to use.

You can either use:

*   Angular
*   React
*   No Client

### Would you like to use a Bootswatch theme?

The client theme to use.

You can use any themes from [Bootswatch](https://bootswatch.com/) or keep the default one.

### Would you like to use the Sass stylesheet preprocessor for your CSS?

[Sass](https://sass-lang.com/) a great solution to simplify designing CSS. To be used efficiently, you will need to run a [Webpack](https://webpack.js.org) dev server, which will be configured automatically.

### Would you like to enable internationalization support?

By default KHipster provides excellent internationalization support, both on the client side and on the server side. However, internationalization adds a little overhead, and is a little bit more complex to manage, so you can choose not to install this feature.

Please note that KHipster covers only UI internationalization. For data internationalization, you will need to code it yourself in JPA/Hibernate layer.

### Which testing frameworks would you like to use?

By default KHipster provide Java unit/integration testing (using Spring's JUnit support) and JavaScript unit testing (using Jest). As an option, you can also add support for:

*   Performance tests using Gatling
*   Behaviour tests using Cucumber
*   Angular integration tests with Protractor

You can find more information on our ["Running tests" guide](https://www.jhipster.tech/running-tests/).

### Would you like to install other generators from the JHipster Marketplace?

The [JHipster Marketplace](https://www.jhipster.tech/modules/marketplace/) is where you can install additional modules, written by third-party developers, to add non-official features to your project.

---
