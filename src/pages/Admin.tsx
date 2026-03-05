import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Registration } from "@/pages/Index";
import { clearRegistrations, fetchRegistrations } from "@/lib/registrations";

const Admin: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);

  const loadRegistrations = async () => {
    setLoading(true);
    try {
      const rows = await fetchRegistrations();
      setRegistrations(rows);
    } catch (error) {
      console.error("Failed to load registrations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadRegistrations();
  }, []);

  const clearAll = async () => {
    if (!window.confirm("确认清空所有报名记录吗？")) return;
    try {
      await clearRegistrations();
      setRegistrations([]);
    } catch (error) {
      console.error("Failed to clear registrations:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-black text-gray-900">报名后台</h1>
            <p className="text-gray-500 mt-1">实时查看报名信息（当前 {registrations.length} 人）</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => void loadRegistrations()}
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
            >
              刷新
            </button>
            <button
              onClick={() => void clearAll()}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              清空记录
            </button>
            <Link to="/" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
              返回前台
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-3">姓名</th>
                  <th className="text-left px-4 py-3">学号</th>
                  <th className="text-left px-4 py-3">联系方式</th>
                  <th className="text-left px-4 py-3">报名组别</th>
                  <th className="text-left px-4 py-3">报名理由</th>
                  <th className="text-left px-4 py-3">提交时间</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg) => (
                  <tr key={reg.id} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-semibold text-gray-900">{reg.name}</td>
                    <td className="px-4 py-3 text-gray-700">{reg.studentId}</td>
                    <td className="px-4 py-3 text-gray-700">{reg.phone}</td>
                    <td className="px-4 py-3 text-gray-700">{reg.team}</td>
                    <td className="px-4 py-3 text-gray-700 max-w-md">{reg.reason}</td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{new Date(reg.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!loading && registrations.length === 0 && (
            <div className="text-center text-gray-500 py-12">暂无报名记录</div>
          )}
          {loading && <div className="text-center text-gray-500 py-12">加载中...</div>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
