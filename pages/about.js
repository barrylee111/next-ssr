import Image from '../components/Image';
import Link from 'next/link';

const About = () => (
  <div>
    <h1>About</h1>
    <Link href='/'>
      <button>Home</button>
    </Link>
    <Image />
    <p>Red Pandas are pimp!!!</p>
  </div>
)

export default About;
