import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Thumbnail.module.scss';

interface Props {
  title: string;
  thumbnail: {
    node: {
      sourceUrl: string;
    };
  };
  width: number;
  height: number;
  priority: boolean;
  slug?: string;
}

export default function Thumbnail({ title, thumbnail, slug, width, height, priority }: Props) {
  const image = <Image width={width} height={height} alt={`Cover Image for ${title}`} src={thumbnail?.node.sourceUrl} priority={priority} sizes='(max-width: 768px) 100vw,750px' />;
  return (
    <div className={styles.pic}>
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
