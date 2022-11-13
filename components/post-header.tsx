import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';
import styles from '../styles/PostHeader.module.scss';

export default function PostHeader({ title, coverImage, date, author, categories }) {
  return (
    <div className={styles.item}>
      <div className={styles.pic}>
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className={styles.info}>
        <Categories categories={categories} />
        <PostTitle>{title}</PostTitle>
        <Date dateString={date} />
        <Avatar author={author} />
      </div>
    </div>
  );
}
