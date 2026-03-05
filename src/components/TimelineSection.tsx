import React from "react";
import { ClipboardList, DoorOpen, Mic, Monitor, Star, Trophy, PartyPopper, Megaphone } from "lucide-react";

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

const TimelineSection: React.FC = () => {
  console.log("TimelineSection rendered");

  const items: TimelineItem[] = [
    { icon: <ClipboardList size={20} />, title: "报名", desc: "收集信息·确认名单", color: "#4080FF" },
    { icon: <DoorOpen size={20} />, title: "入场", desc: "签到引导·区域划分", color: "#7c3aed" },
    { icon: <Mic size={20} />, title: "开场", desc: "主持开场·规则介绍", color: "#f59e0b" },
    { icon: <Monitor size={20} />, title: "比赛", desc: "PPT演讲·计时控场", color: "#10b981" },
    { icon: <Star size={20} />, title: "评分", desc: "收集评分·汇总排名", color: "#ef4444" },
    { icon: <Trophy size={20} />, title: "颁奖", desc: "公布名单·颁发奖品", color: "#ec4899" },
    { icon: <PartyPopper size={20} />, title: "结尾", desc: "活动总结·合影留念", color: "#06b6d4" },
    { icon: <Megaphone size={20} />, title: "宣传", desc: "素材发布·内容推广", color: "#8b5cf6" },
  ];

  return (
    <div data-cmp="TimelineSection" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            活动流程
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-3">精心设计的活动流程</h2>
          <p className="text-gray-500 text-lg">从报名到宣传，每个环节都需要你的参与</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block" />

          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)` }}
                >
                  {item.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 text-xs font-bold flex items-center justify-center" style={{ color: item.color, borderColor: item.color }}>
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;