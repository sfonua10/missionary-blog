import ArticleCard from "@/components/Blog";
import InputFilter from "@/components/InputFilter";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

const popularPosts = [
  {
    id: 1,
    title: "The Secrets of Successful Marketing",
    imageUrl:
    "https://i.ytimg.com/vi/hgpxujeR2JU/maxresdefault.jpg",
    href: "#",
  },
  // ... Add more popular posts
];

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="flex-2 p-4">
        <InputFilter />
        <BlogSection />
      </div>
      <div className="flex-1 p-4 border-l border-gray-300">
        <PopularSection />
      </div>
    </div>
  );
}
function BlogSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p> */}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
function PopularSection() {
  return (
    <div className="bg-gray-100 p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Popular</h2>
      <ul>
        {popularPosts.map((post) => (
          <li key={post.id} className="mb-4 last:mb-0 border-b last:border-0 pb-4 last:pb-0">
            <a href={post.href} className="flex items-center space-x-4">
              <div className="w-20 h-20 overflow-hidden rounded relative">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-lg font-medium">{post.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
