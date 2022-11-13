import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import styles from '../styles/HeroPost.module.scss';

export default function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <section className={styles.item}>
      <div className={styles.pic}>{coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}</div>
      <div className={styles.info}>
        <h2>
          <Link href={`/${slug}`} className='hover:underline' dangerouslySetInnerHTML={{ __html: title }}></Link>
        </h2>
        <Date dateString={date} />
        <div className='excerpt' dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Avatar author={author} />
      </div>
    </section>
  );
}
