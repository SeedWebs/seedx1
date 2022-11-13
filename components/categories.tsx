export default function Categories({ categories }) {
  return <span className='s-cats'>{categories.edges.length > 0 ? categories.edges.map((category, index) => <span key={index}>{category.node.name}</span>) : <span>{categories.edges.node.name}</span>}</span>;
}
