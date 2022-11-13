import styles from '../styles/PostBody.module.scss';
export default function PostBody({ content }) {
  return <div className={styles.body} dangerouslySetInnerHTML={{ __html: content }} />;
}
