
import React from 'react';
import { User, LogOut, Mail, Shield, Settings, Bell } from 'lucide-react';

interface ProfileProps {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative mb-4">
          <div className="w-24 h-24 bg-gradient-to-tr from-[#46A358] to-[#63c477] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
            <User size={48} />
          </div>
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
          <Mail size={14} /> {user.email}
        </p>
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100">
              <Shield size={18} />
            </div>
            <span className="text-sm font-semibold text-gray-700">Xavfsizlik sozlamalari</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-100">
              <Bell size={18} />
            </div>
            <span className="text-sm font-semibold text-gray-700">Bildirishnomalar</span>
          </div>
          <span className="text-xs font-bold bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">3 yangi</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg group-hover:bg-orange-100">
              <Settings size={18} />
            </div>
            <span className="text-sm font-semibold text-gray-700">Profilni tahrirlash</span>
          </div>
        </div>
      </div>

      <button
        onClick={onLogout}
        className="w-full h-12 flex items-center justify-center gap-2 border-2 border-red-50 text-red-500 font-bold rounded-xl hover:bg-red-50 transition-all active:scale-[0.98]"
      >
        <LogOut size={18} />
        Tizimdan chiqish
      </button>
    </div>
  );
};

export default Profile;
