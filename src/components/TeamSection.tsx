import React from "react";
import TeamCard from "@/components/TeamCard";
import teamGrid from "@/assets/images/team-grid.svg";

interface TeamSectionProps {
  teamCounts?: Record<string, number>;
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamCounts = {} }) => {
  const teams = [
    {
      name: "报名与人员管理组",
      quota: 3,
      emoji: "📝",
      color: "#4080FF",
      description: "负责报名信息管理、签到及选手联络，是活动运行的第一道关口。",
      prepTasks: [
        "创建报名问卷并收集选手与观众信息",
        "整理报名表并确认参赛名单",
        "建立选手联系方式表",
        "准备签到方式（签到表或二维码）",
      ],
      onSiteTasks: [
        "选手与观众签到登记",
        "确认现场到场人数",
        "联系未到场选手",
        "更新参赛名单并同步给主持组",
      ],
    },
    {
      name: "场地与入场管理组",
      quota: 2,
      emoji: "🚪",
      color: "#7c3aed",
      description: "负责入场引导和场地秩序维护，确保活动顺利开始。",
      prepTasks: [
        "确认观众区、参赛区、工作人员区",
        "规划入场路线与候场动线",
        "准备入场提示牌和指引信息",
      ],
      onSiteTasks: [
        "引导观众与参赛者入场",
        "指引人员到指定区域",
        "维护入场秩序并疏导人流",
      ],
    },
    {
      name: "主持与流程设计组",
      quota: 5,
      emoji: "🎙️",
      color: "#f59e0b",
      description: "负责活动流程设计、主持与节奏把控，是舞台表达的核心力量。",
      prepTasks: [
        "设计整体活动流程与时间轴",
        "编写主持词与串场文案",
        "准备开场音乐与暖场互动",
        "确定主持人与备选方案",
      ],
      onSiteTasks: [
        "主持开场并介绍规则",
        "串联比赛与评分环节",
        "把控活动节奏与时间",
        "完成结尾与感谢环节",
      ],
    },
    {
      name: "比赛与技术组",
      quota: 2,
      emoji: "💻",
      color: "#10b981",
      description: "负责比赛运行与设备支持，保障每位选手都能稳定展示。",
      prepTasks: [
        "收集并统一整理参赛 PPT",
        "确认参赛顺序与切换流程",
        "检查投影、音响和话筒设备",
      ],
      onSiteTasks: [
        "切换选手 PPT 与演示素材",
        "控制演讲计时",
        "快速处理现场设备问题",
      ],
    },
    {
      name: "评分与颁奖组",
      quota: 3,
      emoji: "🏅",
      color: "#ef4444",
      description: "负责评分统计与颁奖环节，确保结果公开、公平、可核验。",
      prepTasks: [
        "设计评分标准和评分表",
        "确认评分流程与统计方式",
        "准备奖项、证书与奖品",
      ],
      onSiteTasks: [
        "收集评委评分并复核",
        "汇总分数并生成排名",
        "公布获奖名单并协助颁奖",
      ],
    },
    {
      name: "宣传与记录组",
      quota: 5,
      emoji: "📸",
      color: "#ec4899",
      description: "负责活动传播与影像记录，沉淀内容素材并扩大活动影响力。",
      prepTasks: [
        "设计海报与预热图文",
        "制定现场拍摄与采访计划",
        "准备社媒发布节奏",
      ],
      onSiteTasks: [
        "拍摄活动照片与视频",
        "记录精彩瞬间与花絮",
        "实时发布活动动态",
        "整理素材用于后续宣传",
      ],
    },
  ];

  return (
    <div id="teams" data-cmp="TeamSection" className="py-20 bg-white relative overflow-hidden">
      <img
        src={teamGrid}
        alt="工作组背景纹理"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            工作组介绍
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-3">六大工作组等你加入</h2>
          <p className="text-gray-500 text-lg">选择你感兴趣的工作组，展开查看详细工作内容</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {teams.map((team) => (
            <TeamCard
              key={team.name}
              name={team.name}
              quota={team.quota}
              currentCount={teamCounts[team.name] || 0}
              emoji={team.emoji}
              color={team.color}
              description={team.description}
              prepTasks={team.prepTasks}
              onSiteTasks={team.onSiteTasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
