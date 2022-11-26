import Avatar from './avatar';
import Date from './date';
import Thumbnail from './thumbnail';
import Link from 'next/link';
import styles from '../styles/Content.module.scss';

export default function Content({ title, thumbnail, date, excerpt, author, slug }) {
  return (
    <div className={styles.item}>
      {thumbnail && <Thumbnail title={title} thumbnail={thumbnail} slug={slug} width={360} height={240} priority={false} />}
      <h2>
        <Link href={`/${slug}`} dangerouslySetInnerHTML={{ __html: title }}></Link>
      </h2>
      <Date dateString={date} />
      <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Avatar author={author} size={32} />
    </div>
  );
}
