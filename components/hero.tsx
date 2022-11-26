import Avatar from './avatar';
import Date from './date';
import Thumbnail from './thumbnail';
import Link from 'next/link';
import styles from '../styles/HeroPost.module.scss';

export default function HeroPost({ title, thumbnail, date, excerpt, author, slug }) {
  return (
    <section className={styles.item}>
      <div className={styles.pic}>{thumbnail && <Thumbnail title={title} thumbnail={thumbnail} slug={slug} width={750} height={500} priority={true} />}</div>
      <div className={styles.info}>
        <h2>
          <Link href={`/${slug}`} dangerouslySetInnerHTML={{ __html: title }}></Link>
        </h2>
        <Date dateString={date} />
        <div className='excerpt' dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Avatar author={author} size={40} />
      </div>
    </section>
  );
}
