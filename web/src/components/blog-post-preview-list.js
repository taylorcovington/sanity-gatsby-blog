import * as styles from "./blog-post-preview-list.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";
import BlogHeading from "./blog/BlogHeading";
import PostPreview from "./blog/PostPreview";

function BlogPostPreviewGrid({ heading, subheading, posts, archiveUrl }) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <BlogHeading heading={heading} subheading={subheading} />
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => {
            return <PostPreview key={post.id} postData={post} />;
          })}
        </div>
      </div>
      {archiveUrl && (
        <div className={styles.browseMoreNav}>
          <Link to={archiveUrl}>Check out more posts</Link>
        </div>
      )}
    </div>
  );
}

// BlogPostPreviewGrid.defaultProps = {
//   title: "",
//   nodes: [],
//   browseMoreHref: "",
// };

export default BlogPostPreviewGrid;

// <div className={styles.root}>
// {props.title && <h2 className={styles.headline}>{props.title}</h2>}
// <BlogHeading
//   heading="Welcome to my blog"
//   subheading="You'll find posts about full-stack development, career tips, and dev resources."
// />
// <ul className={styles.grid}>
//   {props.nodes &&
//     props.nodes.map((node) => (
//       <li key={node.id}>
//         <BlogPostPreview {...node} isInList />
//       </li>
//     ))}
// </ul>

// </div>
