import Head from 'next/head';
import Link from 'next/link';

// import CustomButtom from '../components/CustomButton';

function Home({ users }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <p key={user.id}>{user.name}</p>
          <Link href={`/about?userId=${user.id}`} as={`/users/${user.id}/about`}><a>About</a></Link>
        </div>
      ))}
      <style global jsx>{`
        p {
          color: blue;
        }
      `}</style>
    </div>
  );
}

async function getInitialProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { users };
}

Home.getInitialProps = getInitialProps;

export default Home;
