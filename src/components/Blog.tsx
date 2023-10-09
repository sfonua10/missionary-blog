import React from "react";

const ArticleCard = ({ post }) => {
  return (
    <article className="flex flex-col items-start justify-between border border-gray-200 rounded-lg p-4 shadow-md">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <a href={post.href}>
          <span className="absolute inset-0" />
          {post.title}
        </a>
      </h3>
      <div className="relative my-2 flex items-center gap-x-4">
        <img
          src={post.author.imageUrl}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={post.author.href}>
              <span className="absolute inset-0" />
              {post.author.name}
            </a>
          </p>
          {/* <p className="text-gray-600">{post.author.role}</p> */}
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
        </div>
      </div>
      <div className="relative w-full">
        <img
          src={post.imageUrl}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        {/* <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
          <a
            href={post.category.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {post.category.title}
          </a>
        </div> */}
        <div className="group relative">
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
