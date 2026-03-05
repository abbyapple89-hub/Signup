import React from "react";
import SignupForm from "@/components/SignupForm";
import { Registration } from "@/pages/Index";
import { Clock, User, Star } from "lucide-react";

interface SignupSectionProps {
  onRegister?: (reg: Omit<Registration, "id" | "timestamp">) => Promise<void>;
  registrations?: Registration[];
}

const SignupSection: React.FC<SignupSectionProps> = ({
  onRegister = async () => {},
  registrations = [],
}) => {
  console.log("SignupSection rendered, registrations:", registrations.length);

  return (
    <div id="signup" data-cmp="SignupSection" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            立即报名
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-3">加入工作团队</h2>
          <p className="text-gray-500 text-lg">填写报名信息，成为这场精彩活动的幕后英雄</p>
        </div>

        <div className="flex gap-8 items-start">
          {/* Form */}
          <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <SignupForm onRegister={onRegister} />
          </div>

          {/* Sidebar */}
          <div className="w-80 shrink-0 space-y-6">
            {/* Tips */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                <Star size={18} className="text-yellow-400" />
                报名须知
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">1</span>
                  每人只能报名一个工作组
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">2</span>
                  报名后请保持联系方式畅通
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">3</span>
                  工作人员需参与活动全程
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">4</span>
                  如有疑问请联系活动负责人
                </li>
              </ul>
            </div>

            {/* Recent registrations */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={18} className="text-blue-400" />
                最新报名动态
              </h3>
              <div className="space-y-3">
                {registrations.slice(0, 5).map((reg) => (
                  <div key={reg.id} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: "linear-gradient(135deg, #4080FF, #7c3aed)" }}
                    >
                      <User size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{reg.name}</p>
                      <p className="text-xs text-gray-400 truncate">{reg.team}</p>
                    </div>
                    <span className="text-xs text-green-500 shrink-0">已报名</span>
                  </div>
                ))}
                {registrations.length === 0 && (
                  <p className="text-gray-400 text-sm text-center py-4">暂无报名记录，快来第一个报名吧！</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
