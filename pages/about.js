import Head from 'next/head';

function About({ user }) {
  return (
    <div>
      <h1>Welcome to the About Page!</h1>
      <p>
        The author of this page is {user.name}, check meta tags in the view source!
      </p>
      <Head>
        <title>{user.name} - About Page</title>

        {/* HTML meta tags */}

        <meta
          name="description"
          content="Hey google, bing, altavista, etc this is my about page, please rank me nice!"
        />
        <meta name="robots" content="index, follow" />
        {/* This is going to render a different author meta tag per each user */}
        <meta name="author" content={user.name} />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eperedo" />
        <meta name="twitter:title" content="Learning NextJs" />
        <meta
          name="twitter:description"
          content="Hey twitter users! This is my about page built with NextJs!"
        />

        {/* Facebook meta tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Hello Facebook! This is my about page built with NextJs!"
        />
        <meta property="og:site_name" content="Learning NextJs" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta
          property="og:image"
          content="https://picsum.photos/id/607/200/300"
        />
        <meta property="article:published_time" content="2019-06-22" />
        <meta
          property="article:author"
          content="https://facebook.com/my-profile"
        />
      </Head>
    </div>
  );
}

async function getInitialProps({ query }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${query.userId}`);
  const user = await response.json();
  // This method always needs to return an plain JS object.
  // The object is going to be the props of our page component.
  return { user };
}

About.getInitialProps = getInitialProps;

export default About;
