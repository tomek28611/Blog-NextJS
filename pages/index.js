import { useState } from 'react';
import { loadData } from './api/post';
import { Section, Cover, SocialNetworks, BuyMeCoffee, Title, PostGrid, Post, Button } from '../components';

const LOAD_MORE_STEP = 4;
export default function Home({ initialPosts, total }) {
  const [ posts, setPosts ] = useState(initialPosts);
  const [ loadedAmount, setLoadedAmount ] = useState(LOAD_MORE_STEP);
  const [ loading, setLoading ] = useState(false);
  const getMorePosts = async () => {
    setLoading(true);
      try {
        const data = await fetch(`/api/posts?start=${loadedAmount}
        &end=${loadedAmount + LOAD_MORE_STEP}`)
        .then((response) => response.json());
        setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
        setPosts({...posts, ...data.posts})

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }


  }

  return (
    <div>
       <Section>
        <Cover title="Blog<br />demo" />
        <SocialNetworks />
        <BuyMeCoffee />
       </Section>

       <Section>
        <Title>New Post</Title>

        <PostGrid>
            {posts.map((post) => (
                <Post 
                  key={post._id}
                  {...post}
                />
            ))}
        </PostGrid>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
         }}>

        
        <Button
          disabled={false}
          onClick={getMorePosts}
          >
            Load more posts ...
        </Button>
        </div>
       </Section>
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
