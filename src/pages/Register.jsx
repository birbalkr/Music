import { Music, Mic2, ArrowRight } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContextData } from "../context/AuthContext";

export default function Register() {

    const { registerUser } = useContext(AuthContextData)

    const [role, setRole] = useState('listener')
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        console.log(data);
        const response = registerUser(data);
        if (!response.success) {
            alert(response.message);
            return;
        }
        alert(response.message);
        reset();

    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a10] px-5 py-12" >
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

                <form
                    onSubmit={handleSubmit(submitHandler)}
                    className="rounded-[20px] border border-white/[0.08] bg-[#15141d] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                        <button
                            onClick={() => setRole('listener')}
                            type="button"
                            className={`${role === 'listener' ? 'border-[#5d4bab] shadow-[0_0_0_1px_rgba(139,108,241,0.35),0_0_24px_-6px_rgba(139,108,241,0.55)]' : `border-[#5d4bab]`} flex flex-col items-center gap-1.5 rounded-xl border  px-2 py-3.5 text-xs font-semibold uppercase tracking-widest text-white  active:scale-95`}
                        >
                            <Music size={18} className={`${role === 'listener' ? 'text-[#8b6cf1]' : 'opacity-65'}`} />
                            Listener
                        </button>
                        <button
                            onClick={() => setRole('artist')}
                            type="button"
                            className={`${role === 'artist' ? 'border-[#5d4bab] shadow-[0_0_0_1px_rgba(139,108,241,0.35),0_0_24px_-6px_rgba(139,108,241,0.55)]' : `border-[#5d4bab]`} flex flex-col items-center gap-1.5 rounded-xl border  px-2 py-3.5 text-xs font-semibold uppercase tracking-widest text-white  active:scale-95`}
                        >
                            <Mic2 size={18} className={`${role === 'artist' ? 'text-[#8b6cf1]' : 'opacity-65'}`} />
                            Artist
                        </button>
                        <input {...register('role')} value={role} type="hidden" />
                    </div>

                    <div className="mb-3">
                        <label className="mb-1.5 block text-xs text-[#8a879a]">Full name</label>
                        <input
                            {...register("fullName", { required: true })}
                            type="text"
                            placeholder="Alex Rivera"
                            className="w-full rounded-[10px] border border-white/[0.08] bg-[#100f16] px-3.5 py-3 text-sm text-[#f2f0f7] outline-none placeholder:text-[#57536a] focus:border-[#5d4bab] focus:ring-[3px] focus:ring-[#8b6cf1]/[0.16]"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="mb-1.5 block text-xs text-[#8a879a]">Username</label>
                        <input
                            {...register("username", { required: true })}
                            type="text"
                            placeholder="alexr"
                            className="w-full rounded-[10px] border border-white/[0.08] bg-[#100f16] px-3.5 py-3 text-sm text-[#f2f0f7] outline-none placeholder:text-[#57536a] focus:border-[#5d4bab] focus:ring-[3px] focus:ring-[#8b6cf1]/[0.16]"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="mb-1.5 block text-xs text-[#8a879a]">Email address</label>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="name@example.com"
                            className="w-full rounded-[10px] border border-white/[0.08] bg-[#100f16] px-3.5 py-3 text-sm text-[#f2f0f7] outline-none placeholder:text-[#57536a] focus:border-[#5d4bab] focus:ring-[3px] focus:ring-[#8b6cf1]/[0.16]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="mb-3">
                            <label className="mb-1.5 block text-xs text-[#8a879a]">Password</label>
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-[10px] border border-white/[0.08] bg-[#100f16] px-3.5 py-3 text-sm text-[#f2f0f7] outline-none placeholder:text-[#57536a] focus:border-[#5d4bab] focus:ring-[3px] focus:ring-[#8b6cf1]/[0.16]"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-1.5 block text-xs text-[#8a879a]">Confirm</label>
                            <input
                                {...register("confirmPassword", { required: true })}
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-[10px] border border-white/[0.08] bg-[#100f16] px-3.5 py-3 text-sm text-[#f2f0f7] outline-none placeholder:text-[#57536a] focus:border-[#5d4bab] focus:ring-[3px] focus:ring-[#8b6cf1]/[0.16]"
                            />
                        </div>
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