import { Music, Mic2, ArrowRight } from "lucide-react";

export default function Register() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a10] px-5 py-12">
            <div className="w-full max-w-[420px]">
                <div className="text-center mb-7">
                    <h1
                        className="text-3xl font-bold tracking-tight text-white"
                        style={{ textShadow: "0 0 24px rgba(139,108,241,0.45)" }}
                    >
                        MusicHub
                    </h1>
                    <p className="mt-1.5 text-[13px] text-[#8a879a] tracking-wide">
                        Join the sound revolution.
                    </p>
                </div>

                <div className="h-14 flex items-center justify-center gap-[3px] mb-7">
                    {[18, 30, 14, 40, 22, 34, 16, 28, 44, 20, 32, 12, 38, 24, 30, 16, 42, 20, 28, 14, 36, 22, 18, 32, 26, 40, 16, 24].map(
                        (h, i) => (
                            <span
                                key={i}
                                className="wave-bar w-[3px] rounded-sm"
                                style={{ height: `${h}px`, background: "linear-gradient(180deg, #8b6cf1, #3ee6b8)" }}
                            />
                        )
                    )}
                </div>

                <form className="rounded-[20px] border border-white/[0.08] bg-[#15141d] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                        <button
                            type="button"
                            className="flex flex-col items-center gap-1.5 rounded-xl border border-[#5d4bab] px-2 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-[0_0_0_1px_rgba(139,108,241,0.35),0_0_24px_-6px_rgba(139,108,241,0.55)]"
                            style={{ background: "linear-gradient(160deg, rgba(139,108,241,0.16), rgba(139,108,241,0.03))" }}
                        >
                            <Music size={18} className="text-[#8b6cf1]" />
                            Listener
                        </button>
                        <button
                            type="button"
                            className="flex flex-col items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#100f16] px-2 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#8a879a]"
                        >
                            <Mic2 size={18} className="opacity-65" />
                            Artist
                        </button>
                    </div>

                    <Field label="Full name" placeholder="Alex Rivera" />
                    <Field label="Username" placeholder="alexr" />
                    <Field label="Email address" type="email" placeholder="name@example.com" />

                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Password" type="password" placeholder="••••••••" />
                        <Field label="Confirm" type="password" placeholder="••••••••" />
                    </div>

                    <button
                        type="submit"
                        className="mt-3.5 w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-[#0a0a10]"
                        style={{
                            background: "linear-gradient(90deg, #8b6cf1, #3ee6b8)",
                            boxShadow: "0 12px 30px -10px rgba(139,108,241,0.6)",
                        }}
                    >
                        Create listener account
                        <ArrowRight size={16} strokeWidth={2.2} />
                    </button>

                    <p className="mt-4 text-center text-[13px] text-[#8a879a]">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-[#3ee6b8] hover:underline">
                            Log in
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

function Field({ label, placeholder, type = "text" }) {
    return (
        <div className="mb-3">
            <label className="mb-1.5 block text-xs text-[#8a879a]">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-[10px] border border-white/[0.08] bg-[#100f16] px-3.5 py-3 text-sm text-[#f2f0f7] outline-none placeholder:text-[#57536a] focus:border-[#5d4bab] focus:ring-[3px] focus:ring-[#8b6cf1]/[0.16]"
            />
        </div>
    );
}