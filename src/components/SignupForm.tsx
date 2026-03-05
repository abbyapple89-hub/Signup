import React, { useState } from "react";
import { User, Hash, Phone, ChevronDown, Send, CheckCircle } from "lucide-react";
import { Registration } from "@/pages/Index";

interface SignupFormProps {
  onRegister?: (reg: Registration) => void;
}

const TEAMS = [
  "报名与人员管理组",
  "场地与入场管理组",
  "主持与流程设计组",
  "比赛与技术组",
  "评分与颁奖组",
  "宣传与记录组",
];

const TEAM_COLORS: Record<string, string> = {
  "报名与人员管理组": "#4080FF",
  "场地与入场管理组": "#7c3aed",
  "主持与流程设计组": "#f59e0b",
  "比赛与技术组": "#10b981",
  "评分与颁奖组": "#ef4444",
  "宣传与记录组": "#ec4899",
};

const SignupForm: React.FC<SignupFormProps> = ({ onRegister = () => {} }) => {
  const [form, setForm] = useState({
    name: "",
    studentId: "",
    phone: "",
    team: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "请输入姓名";
    if (!form.studentId.trim()) newErrors.studentId = "请输入学号";
    if (!form.phone.trim()) newErrors.phone = "请输入联系方式";
    if (!form.team) newErrors.team = "请选择工作组";
    if (!form.reason.trim()) newErrors.reason = "请填写报名理由";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submit attempted:", form);

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("Validation failed:", newErrors);
      return;
    }

    const registration: Registration = {
      id: Date.now().toString(),
      name: form.name.trim(),
      studentId: form.studentId.trim(),
      phone: form.phone.trim(),
      team: form.team,
      reason: form.reason.trim(),
      timestamp: new Date().toISOString(),
    };

    onRegister(registration);
    setSubmitted(true);
    console.log("Registration successful:", registration);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (submitted) {
    return (
      <div data-cmp="SignupForm" className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-xl"
          style={{ background: "linear-gradient(135deg, #4080FF, #7c3aed)" }}
        >
          <CheckCircle size={44} className="text-white" />
        </div>
        <h3 className="text-3xl font-black text-gray-900 mb-3">报名成功！🎉</h3>
        <p className="text-gray-500 text-lg mb-2">
          欢迎加入 <span className="font-bold" style={{ color: TEAM_COLORS[form.team] }}>{form.team}</span>
        </p>
        <p className="text-gray-400 text-sm mb-8">我们会尽快与你联系，期待与你共同打造精彩活动！</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", studentId: "", phone: "", team: "", reason: "" });
          }}
          className="px-6 py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #4080FF, #7c3aed)" }}
        >
          继续报名其他工作组
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all";
  const inputNormal = `${inputBase} border-gray-200 focus:border-blue-400 focus:ring-blue-100`;
  const inputError = `${inputBase} border-red-300 focus:border-red-400 focus:ring-red-100`;

  return (
    <div data-cmp="SignupForm">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              姓名 <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="请输入你的姓名"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`${errors.name ? inputError : inputNormal} pl-9`}
              />
            </div>
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Student ID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              学号 <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <Hash size={16} className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="请输入你的学号"
                value={form.studentId}
                onChange={(e) => handleChange("studentId", e.target.value)}
                className={`${errors.studentId ? inputError : inputNormal} pl-9`}
              />
            </div>
            {errors.studentId && <p className="text-red-400 text-xs mt-1">{errors.studentId}</p>}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            联系方式 <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="手机号或微信号"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`${errors.phone ? inputError : inputNormal} pl-9`}
            />
          </div>
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Team selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            报名工作组 <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <ChevronDown size={16} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            <select
              value={form.team}
              onChange={(e) => handleChange("team", e.target.value)}
              className={`${errors.team ? inputError : inputNormal} appearance-none pr-9 cursor-pointer`}
            >
              <option value="">请选择你想加入的工作组</option>
              {TEAMS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          {errors.team && <p className="text-red-400 text-xs mt-1">{errors.team}</p>}
          {form.team && (
            <div
              className="mt-2 text-xs px-3 py-1.5 rounded-lg font-medium w-fit"
              style={{
                background: `${TEAM_COLORS[form.team]}15`,
                color: TEAM_COLORS[form.team],
              }}
            >
              已选择：{form.team}
            </div>
          )}
        </div>

        {/* Reason */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            报名理由 <span className="text-red-400">*</span>
          </label>
          <textarea
            placeholder="简单介绍一下你为什么想加入这个工作组，或者你有哪些相关经验..."
            value={form.reason}
            onChange={(e) => handleChange("reason", e.target.value)}
            rows={4}
            className={`${errors.reason ? inputError : inputNormal} resize-none`}
          />
          {errors.reason && <p className="text-red-400 text-xs mt-1">{errors.reason}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-bold text-lg shadow-xl hover:opacity-90 hover:shadow-2xl transition-all hover:scale-[1.01]"
          style={{ background: "linear-gradient(135deg, #4080FF, #7c3aed)" }}
        >
          <Send size={20} />
          确认报名
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
