import React from 'react';
function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        胡说八道 PPT 演讲大赛
      </h1>

      <p className="mb-8 text-lg">
        工作组和工作人员招募
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">活动流程</h2>
        <p>
          报名 → 入场 → 开场 → 比赛 → 评分 → 颁奖 → 结尾 → 宣传
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">工作组</h2>

        <ul className="grid grid-cols-2 gap-4">
          <li>报名与人员管理组</li>
          <li>场地与入场管理组</li>
          <li>主持与流程设计组</li>
          <li>比赛与技术组</li>
          <li>评分与颁奖组</li>
          <li>宣传与记录组</li>
        </ul>
      </section>

      <button className="bg-blue-500 text-white px-6 py-3 rounded">
        我要报名
      </button>
    </div>
  );
}

export default App;