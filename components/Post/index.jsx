import React from 'react';
import cl from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import Title from '../Title';
import { urlFor } from '../../lib/client';

import styles from './index.module.scss';



const Post = ({
    className,
    image,
    title,
    description,
    slug
}) => {
  console.log(slug);
  return (
    <Link 
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(className, styles.post)}
      >
        <a className={styles.postLink}>
        <Title type="small" className={styles.postTitle}
        >
            {title}
        </Title>
        <div className={styles.postContent}>
        <div className={styles.postImage}>
            <Image 
                src={urlFor(image).url()}
                alt={image.caption}
                width="100"
                height="100"
            />
        
        </div>
          <p className={styles.postDescription}>
            {description}
          </p>
        </div>
        Post
        </a>
    </Link>
  )
}

export default Post;