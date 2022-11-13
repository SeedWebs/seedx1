export default function Tags({ tags }) {
  return (
    <div className='s-tags'>
      {tags.edges.map((tag, index) => (
        <span key={index}>{tag.node.name}</span>
      ))}
    </div>
  );
}
