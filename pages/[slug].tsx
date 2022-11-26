import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import Container from '../components/container';
import Single from '../components/single';
import Layout from '../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../lib/api';
import { SITE_NAME } from '../lib/constants';
import More from '../components/more';

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <h2>Loading…</h2>
        ) : (
          <>
            <Head>
              <title>{post.title + ' • ' + SITE_NAME}</title>
              <meta property='og:image' content={post.featuredImage?.node.sourceUrl} />
            </Head>
            <Single title={post.title} thumbnail={post.featuredImage} date={post.date} author={post.author} categories={post.categories} body={post.content} tags={post.tags} />
            <br />
            <h2 className='text-center _space'>More Stories</h2>
            {morePosts.length > 0 && <More posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false, previewData }) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
};
