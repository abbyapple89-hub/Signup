import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import TeamSection from "@/components/TeamSection";
import SignupSection from "@/components/SignupSection";
import StatsBar from "@/components/StatsBar";

const REGISTRATION_STORAGE_KEY = "ppt_registration_records_v1";

export interface Registration {
  id: string;
  name: string;
  studentId: string;
  phone: string;
  team: string;
  reason: string;
  timestamp: string;
}

const Index: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(REGISTRATION_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setRegistrations(parsed);
      }
    } catch (error) {
      console.error("Failed to load registrations:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(registrations));
  }, [registrations]);

  const handleNewRegistration = (reg: Registration) => {
    setRegistrations((prev) => [reg, ...prev]);
  };

  const teamCounts = registrations.reduce<Record<string, number>>((acc, reg) => {
    acc[reg.team] = (acc[reg.team] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white" style={{ width: "1440px", margin: "0 auto" }}>
      <HeroSection totalCount={registrations.length} />
      <StatsBar registrations={registrations} teamCounts={teamCounts} />
      <TimelineSection />
      <TeamSection teamCounts={teamCounts} />
      <SignupSection onRegister={handleNewRegistration} registrations={registrations} />

      <footer className="bg-gray-900 text-gray-400 text-center py-8 text-sm">
        <p className="text-lg font-bold text-white mb-2">胡说八道 PPT 演讲大赛</p>
        <p>工作组招募报名系统</p>
      </footer>
    </div>
  );
};

export default Index;
