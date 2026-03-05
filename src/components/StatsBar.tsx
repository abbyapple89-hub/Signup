import React from "react";
import { Registration } from "@/pages/Index";

interface StatsBarProps {
  registrations?: Registration[];
  teamCounts?: Record<string, number>;
}

const TEAM_QUOTAS: Record<string, number> = {
  "报名与人员管理组": 3,
  "场地与入场管理组": 3,
  "主持与流程设计组": 6,
  "比赛与技术组": 3,
  "评分与颁奖组": 4,
  "宣传与记录组": 6,
};

const TEAM_COLORS: Record<string, string> = {
  "报名与人员管理组": "#4080FF",
  "场地与入场管理组": "#7c3aed",
  "主持与流程设计组": "#f59e0b",
  "比赛与技术组": "#10b981",
  "评分与颁奖组": "#ef4444",
  "宣传与记录组": "#ec4899",
};

const StatsBar: React.FC<StatsBarProps> = ({ registrations = [], teamCounts = {} }) => {
  const totalQuota = Object.values(TEAM_QUOTAS).reduce((a, b) => a + b, 0);
  const totalRegistered = registrations.length;

  console.log("StatsBar rendered, total:", totalRegistered);

  return (
    <div data-cmp="StatsBar" className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Total */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-500 text-sm">实时报名人数</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black" style={{ color: "#4080FF" }}>
                {totalRegistered}
              </span>
              <span className="text-gray-400 text-sm">/ {totalQuota} 人</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex-1 max-w-xs">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>招募进度</span>
              <span>{Math.round((totalRegistered / totalQuota) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min((totalRegistered / totalQuota) * 100, 100)}%`,
                  background: "linear-gradient(90deg, #4080FF, #7c3aed)",
                }}
              />
            </div>
          </div>

          {/* Team mini stats */}
          <div className="flex items-center gap-3 flex-wrap">
            {Object.entries(TEAM_QUOTAS).map(([team, quota]) => {
              const shortName = team.replace("组", "").slice(0, 4);
              const count = teamCounts[team] || 0;
              return (
                <div
                  key={team}
                  className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-1.5"
                  title={`${team}: ${count}/${quota}人`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: TEAM_COLORS[team] }}
                  />
                  <span className="text-xs text-gray-600 font-medium">{shortName}</span>
                  <span className="text-xs font-bold" style={{ color: TEAM_COLORS[team] }}>
                    {count}/{quota}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
