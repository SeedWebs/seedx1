import Head from 'next/head';
import { GetStaticProps } from 'next';
import Container from '../components/container';
import MoreStories from '../components/more';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import { SITE_NAME } from '../lib/constants';

export default function Index({ allPosts: { edges }, preview }) {
  const hero = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {hero && <Hero title={hero.title} thumbnail={hero.featuredImage} date={hero.date} author={hero.author} slug={hero.slug} excerpt={hero.excerpt} />}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
