import Content from './content';

export default function More({ posts }) {
  return (
    <section className='s-more'>
      <div className='s-grid -t2 -d3'>
        {posts.map(({ node }) => (
          <Content key={node.slug} title={node.title} thumbnail={node.featuredImage} date={node.date} author={node.author} slug={node.slug} excerpt={node.excerpt} />
        ))}
      </div>
    </section>
  );
}
