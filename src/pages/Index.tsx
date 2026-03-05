import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import TeamSection from "@/components/TeamSection";
import SignupSection from "@/components/SignupSection";
import StatsBar from "@/components/StatsBar";
import { createRegistration, fetchRegistrations } from "@/lib/registrations";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
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
    void load();
  }, []);

  const handleNewRegistration = async (reg: Omit<Registration, "id" | "timestamp">) => {
    const saved = await createRegistration(reg);
    setRegistrations((prev) => [saved, ...prev]);
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
      {loading && <div className="text-center text-sm text-gray-500 py-4">Loading registrations...</div>}

      <footer className="bg-gray-900 text-gray-400 text-center py-8 text-sm">
        <p className="text-lg font-bold text-white mb-2">胡说八道 PPT 演讲大赛</p>
        <p>工作组招募报名系统</p>
      </footer>
    </div>
  );
};

export default Index;
