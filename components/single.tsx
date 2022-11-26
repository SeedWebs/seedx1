import Avatar from './avatar';
import Date from './date';
import Thumbnail from './thumbnail';
import Categories from './categories';
import Tags from './tags';
import styles from '../styles/Single.module.scss';

export default function Single({ title, thumbnail, date, author, categories, body, tags }) {
  return (
    <article>
      <header className={styles.item}>
        <div className={styles.pic}>
          <Thumbnail title={title} thumbnail={thumbnail} width={750} height={500} priority={true} />
        </div>
        <div className={styles.info}>
          <Categories categories={categories} />
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <Date dateString={date} />
          <Avatar author={author} size={40} />
        </div>
      </header>
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
      <footer>{tags.edges.length > 0 && <Tags tags={tags} />}</footer>
    </article>
  );
}
