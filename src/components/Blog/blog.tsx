
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { 
  Eye, 
  Heart, 
  Loader2, 
  ArrowLeft, 
  Calendar, 
  Search, 

  Leaf, 
  X, 
  Mail, 
  Lock, 
  Share2,
  Clock,

  MessageCircle
} from "lucide-react";
import type { BlogType } from "../../@types";


// --- Sub-components ---

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void; onLogin: () => void }> = ({ isOpen, onClose, onLogin }) => {
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all">
      <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="relative p-10">
          <button onClick={onClose} className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
          
          <div className="text-center mb-10">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#46A358]">
              <Leaf size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Xush kelibsiz!</h2>
            <p className="text-slate-500 mt-2 text-sm">Tizimga kirish uchun ma'lumotlaringizni kiriting.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="group">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="Email manzilingiz" 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-[#46A358] outline-none transition-all"
                />
              </div>
            </div>
            <div className="group">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="Parolingiz" 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-[#46A358] outline-none transition-all"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#46A358] text-white font-bold py-3.5 rounded-lg hover:bg-[#3d8e4d] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#46A358]/20 disabled:opacity-70 mt-4"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : "Kirish"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Hali a'zo emasmisiz? <button className="text-[#46A358] font-bold hover:underline">Ro'yxatdan o'tish</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogDetail: React.FC<{ blog: BlogType; onBack: () => void }> = ({ blog, onBack }) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <button 
        onClick={onBack}
        className="mb-10 flex items-center gap-2 text-slate-400 hover:text-[#46A358] transition-colors font-medium group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Barcha maqolalar
      </button>

      <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
        <div className="p-8 md:p-14">
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-green-50 text-[#46A358] rounded-md text-[10px] font-bold uppercase tracking-widest">
                Tavsiya
              </span>
              <span className="text-slate-400 flex items-center gap-1.5 text-xs font-medium">
                <Clock size={14} /> 6 min mutolaa
              </span>
              <span className="text-slate-400 flex items-center gap-1.5 text-xs font-medium">
                <Calendar size={14} /> {new Date().toLocaleDateString('uz-UZ')}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
              {blog.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#46A358] flex items-center justify-center text-white font-bold text-sm">
                  GS
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">GreenShop Admin</p>
                  <p className="text-[11px] text-slate-400 uppercase font-bold tracking-tight">Botanik mutaxassis</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setLiked(!liked)}
                  className={`p-2.5 rounded-lg transition-all ${liked ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                >
                  <Heart size={18} fill={liked ? "currentColor" : "none"} />
                </button>
                <button className="p-2.5 bg-slate-50 text-slate-400 hover:bg-slate-100 rounded-lg transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </header>

          <div 
            className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-p:mb-6 prose-strong:text-slate-900
              prose-img:rounded-xl prose-img:shadow-md prose-img:my-10"
            dangerouslySetInnerHTML={{ __html: blog.content || blog.description }} 
          />

          <footer className="mt-16 pt-10 border-t border-slate-100">
            <div className="p-8 bg-slate-50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-bold text-slate-900 text-lg">Maqola sizga yoqdimi?</p>
              <div className="flex gap-3">
                <button className="px-6 py-2.5 border border-slate-200 rounded-lg font-bold text-slate-600 hover:bg-white transition-all">Ulashish</button>
                <button className="px-8 py-2.5 bg-[#46A358] text-white rounded-lg font-bold shadow-md hover:bg-[#3d8e4d] transition-all">Obuna bo'lish</button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://beckend-n14-soqt.vercel.app/api/user/blog",
          { params: { access_token: "64bebc1e2c6d3f056a8c85b7", search: "" } }
        );
        setBlogs(response.data.data || []);
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(b => 
      b.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      b.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [blogs, searchTerm]);

  const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, "");

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-slate-900 font-sans selection:bg-green-100 selection:text-[#46A358]">
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={() => { setIsAuthenticated(true); setIsLoginOpen(false); }} 
      />

      {/* --- Landing / Hero Section --- */}
      {!isAuthenticated && !selectedBlog && (
        <section className="relative overflow-hidden pt-12 pb-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="w-full rounded-[2.5rem] p-12 md:p-16 bg-white shadow-sm border border-slate-100 flex justify-between h-[200px] md:h-[300px] items-center overflow-hidden relative mb-16 animate-in fade-in slide-in-from-top-6 duration-1000">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#46A358]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
               
               <img src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_1.png?alt=media&token=8174091c-24b5-42a0-886d-845bd15cccb9" className="w-[12%] h-auto object-contain self-start relative z-10 animate-float" alt="blog1" />
               <img className="w-[12%] h-auto object-contain mt-[30px] relative z-10 animate-float-delayed" src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_2.png?alt=media&token=d2b8bf6f-7c67-4e93-b026-917f4291d9f6" alt="blog2" />
               <img className="w-[12%] h-auto object-contain mt-[60px] relative z-10 animate-float" src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_3.png?alt=media&token=7abda4b5-0f9e-4fc1-8353-e32194b925c9" alt="blog3" />
               <img className="w-[12%] h-auto object-contain mt-[30px] relative z-10 animate-float-delayed" src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_4.png?alt=media&token=2a9f4b03-30a0-4c89-b189-7c8835ab42e7" alt="blog4" />
               <img className="w-[12%] h-auto object-contain self-start relative z-10 animate-float" src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_5.png?alt=media&token=f65d9df1-ea8b-4ebe-9d23-e3e768f0f701" alt="blog5" />
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
                Kontentingizni <span className="text-[#46A358]">GreenShop</span> orqali monetizatsiya qiling
              </h1>
              <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
                Greenshop - o'simliklar, maqolalar va media kontentlarni sotib olish, sotish va monetizatsiya qilish uchun zamonaviy platforma.
              </p>
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="px-12 py-4.5 bg-[#46A358] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#3d8e4d] transition-all active:scale-95"
              >
                Tizimga qo'shiling
              </button>
            </div>
          </div>
        </section>
      )}

      {/* --- Main Feed (Only visible if authenticated) --- */}
      {isAuthenticated && !selectedBlog && (
        <main className="container mx-auto px-6 py-12 max-w-[1400px]">
          
          {/* Top Search Area */}
          <div className="flex justify-center mb-16 animate-in fade-in duration-700">
            <div className="w-full max-w-3xl flex">
               <div className="relative flex-grow">
                 <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="input search text"
                  className="w-full pl-6 pr-6 py-3 bg-white border border-slate-200 rounded-l-md outline-none focus:border-[#46A358] transition-all text-slate-600 placeholder:text-slate-300 shadow-sm"
                 />
               </div>
               <button className="bg-[#1890ff] hover:bg-[#40a9ff] text-white px-5 rounded-r-md transition-colors flex items-center justify-center">
                 <Search size={20} />
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-100 h-[400px] animate-pulse p-8">
                  <div className="h-6 bg-slate-50 rounded w-3/4 mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-50 rounded w-full"></div>
                    <div className="h-4 bg-slate-50 rounded w-full"></div>
                    <div className="h-4 bg-slate-50 rounded w-5/6"></div>
                  </div>
                </div>
              ))
            ) : filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <article 
                  key={blog._id}
                  onClick={() => setSelectedBlog(blog)}
                  className="group bg-white rounded-md border border-slate-200 hover:shadow-lg transition-all cursor-pointer flex flex-col"
                >
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2 leading-snug group-hover:text-[#46A358] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-6 font-normal">
                      {stripHtml(blog.description || blog.content)}
                    </p>
                  </div>

                  {/* Footer Metrics */}
                  <div className="flex border-t border-slate-100 py-4 px-2 text-slate-400">
                    <div className="flex-1 flex items-center justify-center gap-2 border-r border-slate-100 last:border-0">
                      <Eye size={16} />
                      <span className="text-sm font-medium">{blog.viewCount}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-2 border-r border-slate-100 last:border-0">
                      <MessageCircle size={16} />
                      <span className="text-sm font-medium">{blog.commentCount || 0}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-2">
                      <Heart size={16} />
                      <span className="text-sm font-medium">{blog.likeCount}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-32 text-center">
                <Search size={48} className="mx-auto mb-6 text-slate-200" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Maqolalar topilmadi</h3>
                <p className="text-slate-400 font-medium">Qidiruv natijasi bo'sh.</p>
              </div>
            )}
          </div>
        </main>
      )}

      {/* --- Detail View --- */}
      {selectedBlog && (
        <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
      )}

      {/* --- Footer --- */}
      <footer className="py-16 mt-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-[1400px]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="text-[#46A358]" size={20} />
            <span className="text-xl font-bold text-slate-900">GreenShop</span>
          </div>
          <p className="text-slate-400 text-xs font-medium">© 2024 GreenShop Universe. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
