import { useParams } from "react-router-dom";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { useQueryHandler } from "../../hooks/useQuery";

interface BlogType {
  _id: string;
  title: string;
  content: string;
  views: number;
  reaction_length: number;
  created_at: string;
  created_by: string; // USER ID
}

const BlogDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useQueryHandler({
    url: `user/blog/${id}`,
    pathname: "blog-detail",
  });

  // API array qaytaradi
  const blog: BlogType | null =
    Array.isArray(data) && data.length > 0 ? data[0] : null;

  if (isLoading) {
    return (
      <div className="w-[90%] max-w-[900px] mx-auto py-20 animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-2/3 mb-6" />
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-10" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500">
        Blog topilmadi
      </div>
    );
  }

  return (
    <div className="w-[90%] max-w-[900px] mx-auto py-10">
      {/* AUTHOR (ID ko‘rinishida, backend shunaqa beradi) */}
      <div className="mb-4 text-sm text-gray-500">
        Author ID: <span className="font-medium">{blog.created_by}</span>
      </div>

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        {blog.title}
      </h1>

      {/* META */}
      <div className="flex gap-6 text-gray-500 text-sm mb-8">
        <span className="flex items-center gap-1">
          <FaEye /> {blog.views}
        </span>
        <span className="flex items-center gap-1">
          <FaRegHeart /> {blog.reaction_length}
        </span>
        <span>
          {new Date(blog.created_at).toLocaleDateString()}
        </span>
      </div>

      {/* CONTENT (HTML) */}
      <div
        className="prose prose-green max-w-none leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetail;
