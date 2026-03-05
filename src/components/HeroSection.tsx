import React from "react";
import { Users, Calendar, MapPin } from "lucide-react";
import heroStage from "@/assets/images/hero-stage.svg";

interface HeroSectionProps {
  totalCount?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ totalCount = 0 }) => {
  console.log("HeroSection rendered, totalCount:", totalCount);

  return (
    <div
      data-cmp="HeroSection"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0e27 0%, #1a1f4e 40%, #0d2a6e 70%, #1a3a8f 100%)",
        minHeight: "520px",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #4080FF 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />
      <img
        src={heroStage}
        alt="活动舞台插画"
        className="absolute right-8 bottom-6 w-64 lg:w-80 opacity-90 pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">招募进行中 · 名额有限</span>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-black text-white mb-4 leading-tight">
          <span className="block">胡说八道</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PPT演讲大赛
          </span>
        </h1>

        <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          工作组 & 工作人员 招募报名
          <br />
          <span className="text-white/50 text-base">胡说八道，需要你！</span>
        </p>

        {/* Info cards */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-white/90">
            <Calendar size={18} className="text-blue-300" />
            <span className="text-sm">3.13 1:00-4:00</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-white/90">
            <MapPin size={18} className="text-purple-300" />
            <span className="text-sm">北1-110</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-white/90">
            <Users size={18} className="text-pink-300" />
            <span className="text-sm">共招募 25 名工作人员</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a
            href="#signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #4080FF, #7c3aed)" }}
          >
            立即报名加入
          </a>
          <a
            href="#teams"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/90 font-bold text-lg border border-white/30 hover:bg-white/10 transition-all"
          >
            工作组详情介绍
          </a>
        </div>

        {/* Real-time count */}
        <div className="mt-10 inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4">
          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/70 text-sm">已有</span>
          <span className="text-3xl font-black text-white">{totalCount}</span>
          <span className="text-white/70 text-sm">人报名</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
