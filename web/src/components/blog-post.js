import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } =
    props;
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative  px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </span>
          </h1>
          {/* <p className="mt-8 text-xl text-gray-500 leading-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
            Eleifend egestas fringilla sapien.
          </p> */}
        </div>
        <div className="mt-6 max-w-prose text-gray-500 mx-auto leading-8">
          {_rawBody && <PortableText blocks={_rawBody} />}
          {/* <figure>
            <img
              className="w-full rounded-lg"
              src={imageUrlFor(buildImageObj(mainImage))}
              alt={mainImage.alt}
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure> */}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

{
  /* <article className={styles.root}>
{mainImage && mainImage.asset && (
  <div className={styles.mainImage}>
    <img
      src={imageUrlFor(buildImageObj(mainImage))
        .width(1200)
        .height(Math.floor((9 / 16) * 1200))
        .fit("crop")
        .auto("format")
        .url()}
      alt={mainImage.alt}
    />
  </div>
)}
<Container>
  <div className={styles.grid}>
    <div className={styles.mainContent}>
      <h1 className={styles.title}>{title}</h1>
      {_rawBody && <PortableText blocks={_rawBody} />}
    </div>
    <aside className={styles.metaContent}>
      {publishedAt && (
        <div className={styles.publishedAt}>
          {differenceInDays(new Date(publishedAt), new Date()) > 3
            ? formatDistance(new Date(publishedAt), new Date())
            : format(new Date(publishedAt), "MMMM Mo, yyyy")}
        </div>
      )}
      {authors && <AuthorList items={authors} title="Authors" />}
      {categories && (
        <div className={styles.categories}>
          <h3 className={styles.categoriesHeadline}>Categories</h3>
          <ul>
            {categories.map((category) => (
              <li key={category._id}>{category.title}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  </div>
</Container>
</article> */
}
