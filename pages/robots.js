import Link from 'next/Link';

const Robots = (props) => {
  const { robots } = props;

  console.log(props);

  return (
    <div>
      <h1>Robots</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <div>
        {robots && robots.map(robot => (
          <li key={robot.id}>
          <Link href={`robots/${robot.id}`}>
            <a>{robot.name}</a>
          </Link>
          </li>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return {
    props: {
      robots: data
    }
  }
}

export default Robots;
