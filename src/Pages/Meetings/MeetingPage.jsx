/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import Navbar from "../../components/LandingComponents/Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  MonitorUp,
  PhoneOff,
  MessageSquare,
  Users,
  Type,
  Waves,
  BarChart3,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function MeetingPage() {
  const [muted, setMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);
  const participants = ["You", "Sarah", "Omar", "Host"];

  return (
    <div className="h-screen bg-[#0D0F16] overflow-hidden flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 pb-6 px-6 max-w-[1600px] mx-auto w-full grid lg:grid-cols-12 gap-6 overflow-hidden">
        {/* Left Side: Video & Main Visuals */}
        <div className="lg:col-span-9 flex flex-col gap-4 h-full overflow-hidden">
          {/* Header Info */}
          <div className="flex items-center justify-between px-2">
            <div>
              <h1 className="text-white text-xl font-bold flex items-center gap-3">
                Weekly AI Standup
                <span className="px-2 py-0.5 bg-red-600 text-[10px] rounded uppercase animate-pulse">
                  REC
                </span>
              </h1>
              <p className="text-slate-500 text-xs mt-1">
                ID: M-101 • Time: 32:15 • Privacy: End-to-End Encrypted
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-2xl">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  AI Noise Reduction Active
                </span>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="flex-1 grid md:grid-cols-2 gap-4 h-full min-h-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#181B26] border border-[#2A2E3B] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center"
            >
              {cameraOff ? (
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl text-white">
                  Y
                </div>
              ) : (
                <div className="w-full h-full bg-slate-900/50 flex items-center justify-center italic text-slate-500">
                  Camera Active
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/10">
                <span className="text-white text-xs font-bold">You (Host)</span>
                {muted && <MicOff size={14} className="text-red-500" />}
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-[#181B26] border border-[#2A2E3B] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center ring-2 ring-blue-600"
            >
              {/* Image of a shared screen showing a presentation with meeting participants video in corner */}
              <div className="w-full h-full bg-slate-800/30 flex items-center justify-center text-slate-400">
                Host Presentation Share
              </div>
              <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                Speaking
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/10">
                <span className="text-white text-xs font-bold">
                  Sarah • Lead Dev
                </span>
              </div>
            </motion.div>
          </div>

          {/* Controls Bar - Professional UI */}
          <div className="bg-[#181B26] border border-[#2A2E3B] p-4 rounded-[2.5rem] shadow-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMuted(!muted)}
                className={`p-4 rounded-2xl transition-all ${muted ? "bg-red-600 text-white" : "bg-[#2A2E3B] hover:bg-[#353A4D] text-[#F1F5F9]"}`}
              >
                <Mic size={20} />
              </button>
              <button
                onClick={() => setCameraOff(!cameraOff)}
                className={`p-4 rounded-2xl transition-all ${cameraOff ? "bg-red-600 text-white" : "bg-[#2A2E3B] hover:bg-[#353A4D] text-[#F1F5F9]"}`}
              >
                <Video size={20} />
              </button>
              <button className="p-4 rounded-2xl bg-[#2A2E3B] hover:bg-[#353A4D] text-[#F1F5F9]">
                <MonitorUp size={20} />
              </button>
              <div className="w-px h-8 bg-[#2A2E3B] mx-2" />
              <button className="p-4 rounded-2xl bg-[#2A2E3B] hover:bg-blue-600 transition-colors text-[#F1F5F9]">
                <Type size={20} />
              </button>
              <button className="p-4 rounded-2xl bg-[#2A2E3B] hover:bg-emerald-600 transition-colors text-[#F1F5F9]">
                <Waves size={20} />
              </button>
            </div>

            <div className="hidden xl:flex items-center gap-1 w-64 h-8 px-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-blue-500/30 rounded-full"
                  style={{ height: `${20 + Math.random() * 80}%` }}
                />
              ))}
            </div>

            <button className="bg-red-600 hover:bg-red-700 p-4 rounded-2xl text-white shadow-lg shadow-red-900/30 transform transition active:scale-90">
              <PhoneOff size={24} />
            </button>
          </div>
        </div>

        {/* Right Sidebar: Chat/Activity */}
        <aside className="lg:col-span-3 bg-[#181B26] border border-[#2A2E3B] rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-[#2A2E3B] flex items-center justify-between">
            <h2 className="font-bold">In-Meeting Chat</h2>
            <Settings
              size={18}
              className="text-[#A8B0C2] cursor-pointer hover:rotate-45 transition-transform"
            />
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="bg-[#2A2E3B] p-3 rounded-2xl rounded-tl-none">
              <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">
                Omar (Lead AI)
              </p>
              <p className="text-xs text-slate-200">
                Did everyone see the latest noise dataset updates?
              </p>
            </div>
            <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none self-end ml-8">
              <p className="text-xs text-white">
                Yes! The crystal clarity is insane on this build.
              </p>
            </div>
          </div>
          <div className="p-4 bg-[#0D0F16]/50">
            <div className="relative">
              <input
                className="w-full bg-[#181B26] border border-[#2A2E3B] rounded-xl py-3 pl-4 pr-12 text-xs outline-none focus:border-blue-600"
                placeholder="Type message..."
              />
              <button className="absolute right-2 top-1.5 p-2 bg-blue-600 rounded-lg text-white">
                <MessageSquare size={14} />
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
