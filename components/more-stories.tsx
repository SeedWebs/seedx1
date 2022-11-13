import PostPreview from './post-preview';

export default function MoreStories({ posts }) {
  return (
    <section className='s-more'>
      <h2>More Stories</h2>
      <div className='s-grid -t2 -d3'>
        {posts.map(({ node }) => (
          <PostPreview key={node.slug} title={node.title} coverImage={node.featuredImage} date={node.date} author={node.author} slug={node.slug} excerpt={node.excerpt} />
        ))}
      </div>
    </section>
  );
}
