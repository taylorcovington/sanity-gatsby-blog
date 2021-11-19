import React from "react";
import { imageUrlFor } from "../../lib/image-url";
import { buildImageObj, cn, getBlogUrl } from "../../lib/helpers";
import { format } from "date-fns";
import { Link } from "gatsby";

const PostPreview = ({ postData }) => {
  const {
    id,
    title,
    mainImage,
    excerpt,
    publishedAt,
    readTime,
    slug,
    authors,
    categories,
  } = postData;

  const { author } = authors[0];
  const { name: authorName, image: authorImage } = author;
  const { children } = excerpt[0];
  const { text: excerptText } = children[0];

  return (
    <Link to={getBlogUrl(publishedAt, slug.current)}>
      <div
        key={id}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex-shrink-0">
          {mainImage && mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto("format")
                .url()}
              className="h-48 w-full object-cover"
              alt={mainImage.alt}
            />
          )}
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="flex flex-row ">
              {categories.map((category) => (
                <p
                  key={category.title}
                  className="text-sm font-medium text-indigo-600 mr-2"
                >
                  <a
                    // href={post.category.href}
                    className="hover:underline"
                  >
                    {category.title}
                  </a>
                </p>
              ))}
            </div>

            <a
              // href={post.href}
              className="block mt-2"
            >
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{excerptText}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a
              // href={post.author.href}
              >
                <span className="sr-only">{authorName}</span>

                <img
                  className="h-10 w-10 rounded-full"
                  src={imageUrlFor(buildImageObj(authorImage))
                    .width(600)
                    .height(Math.floor((9 / 16) * 600))
                    .auto("format")
                    .url()}
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a
                  // href={post.author.href}
                  className="hover:underline"
                >
                  {authorName}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                {/* <time dateTime={post.datetime}>{post.date}</time> */}
                <time dateTime={publishedAt}>
                  {format(new Date(publishedAt), "MMMM Mo, yyyy")}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{readTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
