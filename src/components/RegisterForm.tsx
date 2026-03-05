import { useState } from "react";

export default function RegisterForm() {
  const [name,setName] = useState("");
  const [role,setRole] = useState("");

  function submitForm(){
    alert("报名成功！");
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl mb-4">报名表</h2>

      <input
        placeholder="昵称"
        className="border p-2 w-full mb-3"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-3"
        value={role}
        onChange={(e)=>setRole(e.target.value)}
      >
        <option>报名组</option>
        <option>主持组</option>
        <option>宣传组</option>
        <option>技术组</option>
      </select>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={submitForm}
      >
        提交报名
      </button>
    </div>
  );
}