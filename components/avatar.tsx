import Image from 'next/image';
import styles from '../styles/Avatar.module.scss';

export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName ? `${author.node.firstName} ${author.node.lastName}` : author.node.name || null;

  return (
    <div className={styles.author}>
      <Image src={author.node.avatar.url} width='32' height='32' alt={name} />
      {name}
    </div>
  );
}
