import { loadData } from './api/post';
import { Section, Cover, SocialNetworks, BuyMeCoffee, Title } from '../components';
const LOAD_MORE_STEP = 4;
export default function Home({ initialPosts, total }) {
  console.log(initialPosts);
  return (
    <div>
       <Section>
        <Cover title="John<br />Doe" />
        <SocialNetworks />
        <BuyMeCoffee />
       </Section>

       <Section>New Post</Section>
    </div>
  )
}

export async function getServerSideProps(context) {
  const{ posts, total } = await loadData(0, LOAD_MORE_STEP)
  return {
    props: {
      initialPosts: posts,
      total
    },
  }
}
