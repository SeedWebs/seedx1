export default function PostTitle({ children }) {
  return <h1 dangerouslySetInnerHTML={{ __html: children }} />;
}
