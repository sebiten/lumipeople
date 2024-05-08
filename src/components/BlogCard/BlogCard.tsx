import Link from "next/link";
import React from "react";

interface IBlogCardProps {
  imgSrc: string;
  title: string;
  text: string;
  id: string;
}

const BlogCard: React.FC<IBlogCardProps> = ({ imgSrc, title, text, id }) => {
  return (
    <article className="relative max-w-lg overflow-hidden rounded-lg shadow  transition hover:shadow-lg mt-4 md:mt-4 lg:m-0">
     <Link href={`/articulo/${id}`}>
      <img
        alt=""
        src={imgSrc}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">{text}</p>
        </div>
      </div>
     </Link>

    </article>
  );
};

export default BlogCard;
