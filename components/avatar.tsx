import Image from 'next/image';
import styles from '../styles/Avatar.module.scss';

export default function Avatar({ author, size }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName ? `${author.node.firstName} ${author.node.lastName}` : author.node.name || null;

  return (
    <div className={styles.author}>
      <Image src={author.node.avatar.url} width={size} height={size} alt={name} />
      {name}
    </div>
  );
}
