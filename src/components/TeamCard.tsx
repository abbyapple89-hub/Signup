import React, { useState } from "react";
import { ChevronDown, ChevronUp, Users } from "lucide-react";

interface TeamCardProps {
  name?: string;
  quota?: number;
  currentCount?: number;
  emoji?: string;
  color?: string;
  description?: string;
  prepTasks?: string[];
  onSiteTasks?: string[];
}

const TeamCard: React.FC<TeamCardProps> = ({
  name = "工作组",
  quota = 3,
  currentCount = 0,
  emoji = "👥",
  color = "#4080FF",
  description = "负责活动的相关工作",
  prepTasks = ["任务一", "任务二"],
  onSiteTasks = ["现场任务一", "现场任务二"],
}) => {
  const [expanded, setExpanded] = useState(false);
  const filled = Math.min(currentCount, quota);
  const remaining = quota - filled;

  console.log("TeamCard rendered:", name, "count:", currentCount);

  return (
    <div
      data-cmp="TeamCard"
      className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Header */}
      <div className="p-6 pb-4" style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}>
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)` }}
          >
            {emoji}
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end mb-1">
              <span
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: `${color}15`, color }}
              >
                <Users size={12} />
                招募 {quota} 人
              </span>
            </div>
            {remaining > 0 ? (
              <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                还差 {remaining} 人
              </span>
            ) : (
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                已满员
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-black text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

        {/* Quota progress */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1.5">
            <span>招募进度</span>
            <span className="font-semibold" style={{ color }}>
              {filled} / {quota}
            </span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: quota }).map((_, i) => (
              <div
                key={i}
                className="flex-1 h-2 rounded-full transition-all duration-500"
                style={{
                  background: i < filled ? color : "#e5e7eb",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tasks toggle */}
      <div className="border-t border-gray-50">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <span>查看工作内容</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <div
          style={{
            maxHeight: expanded ? "600px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
          }}
        >
          <div className="px-6 pb-6">
            {/* Prep tasks */}
            <div className="mb-4">
              <div
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1.5 rounded-lg w-fit"
                style={{ background: `${color}15`, color }}
              >
                <span>📋</span>
                前期准备
              </div>
              <ul className="space-y-2">
                {prepTasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span
                      className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: color, marginTop: "7px" }}
                    />
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            {/* On-site tasks */}
            <div>
              <div
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1.5 rounded-lg w-fit"
                style={{ background: "#10b98115", color: "#10b981" }}
              >
                <span>⚡</span>
                现场工作
              </div>
              <ul className="space-y-2">
                {onSiteTasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span
                      className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#10b981", marginTop: "7px" }}
                    />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sign up button */}
      <div className="px-6 pb-6">
        <a
          href="#signup"
          className="block w-full text-center py-3 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 hover:shadow-lg"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
        >
          报名加入此工作组 →
        </a>
      </div>
    </div>
  );
};

export default TeamCard;