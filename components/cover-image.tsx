import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/CoverImage.module.scss';

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = <Image width={2000} height={1000} alt={`Cover Image for ${title}`} src={coverImage?.node.sourceUrl} />;
  return (
    <div className={styles.cover}>
      {slug ? (
        <Link href={`/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
