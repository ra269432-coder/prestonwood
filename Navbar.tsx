import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, ChevronDown, ArrowRight, Plus, Minus } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-2xl border-b border-black/5 transition-all duration-300">
      <div className="container mx-auto flex h-[80px] items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-[22px] font-bold tracking-tighter text-slate-900 group-hover:text-black transition-colors">
            WOLT
          </span>
        </Link>

        <div className="hidden lg:flex gap-8 items-center text-[15px] font-medium text-slate-600 h-full">
          <Link href="/sdg" className="hover:text-black transition-colors h-full flex items-center">SDG's</Link>
          
          {/* Dropdown: ABOUT US */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-black transition-colors h-full outline-none">
              About Us <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-[450px] pt-4">
              <div className="bg-indigo-50/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-indigo-500/10 p-8 flex gap-12">
                <div className="flex-1 space-y-5">
                  <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Organization</h3>
                  <div className="flex flex-col space-y-3">
                    <Link href="/about/vision-mission-values" className="group/link flex items-center justify-between text-slate-700 hover:text-black transition-colors">Vision & Mission <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /></Link>
                  </div>
                </div>
                <div className="flex-1 space-y-5">
                  <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">People</h3>
                  <div className="flex flex-col space-y-3">
                    <Link href="/teams/team" className="group/link flex items-center justify-between text-slate-700 hover:text-black transition-colors">Team <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /></Link>
                    <Link href="/teams/governing-board" className="group/link flex items-center justify-between text-slate-700 hover:text-black transition-colors">Governing Board <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown: WHAT WE DO */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-black transition-colors h-full outline-none">
              What We Do <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-[450px] pt-4">
              <div className="bg-emerald-50/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-emerald-500/10 overflow-hidden">
                <div className="flex flex-col">
                  <details className="group/dev border-b border-black/5" open>
                    <summary className="flex items-center justify-between p-6 bg-transparent text-slate-900 font-semibold cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                      <span>Social Development</span>
                      <div className="text-slate-400">
                        <Plus className="w-4 h-4 group-open/dev:hidden" />
                        <Minus className="w-4 h-4 hidden group-open/dev:block" />
                      </div>
                    </summary>
                    <div className="flex flex-col bg-emerald-100/30 pb-4">
                      <Link href="/programs/mental-health" className="px-6 py-2.5 text-slate-600 hover:text-black hover:bg-black/5 transition-colors">Mental Health</Link>
                      <Link href="/programs/climate-change" className="px-6 py-2.5 text-slate-600 hover:text-black hover:bg-black/5 transition-colors">Climate Change</Link>
                      <Link href="/programs/expanding-health-coverage" className="px-6 py-2.5 text-slate-600 hover:text-black hover:bg-black/5 transition-colors">Health Coverage</Link>
                      <Link href="/programs/advocacy-for-social-change" className="px-6 py-2.5 text-slate-600 hover:text-black hover:bg-black/5 transition-colors">Advocacy</Link>
                      <Link href="/programs/disability-inclusion" className="px-6 py-2.5 text-slate-600 hover:text-black hover:bg-black/5 transition-colors">Disability Inclusion</Link>
                    </div>
                  </details>
                  <details className="group/hum border-b border-black/5">
                    <summary className="flex items-center justify-between p-6 bg-transparent text-slate-900 font-semibold cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                      <span>Humanitarian Response</span>
                      <div className="text-slate-400">
                        <Plus className="w-4 h-4 group-open/hum:hidden" />
                        <Minus className="w-4 h-4 hidden group-open/hum:block" />
                      </div>
                    </summary>
                    <div className="flex flex-col bg-emerald-100/30 pb-4">
                      <Link href="/programs/disaster-preparedness" className="px-6 py-2.5 text-slate-600 hover:text-black hover:bg-black/5 transition-colors">Disaster Preparedness</Link>
                    </div>
                  </details>
                  <details className="group/ent">
                    <summary className="flex items-center justify-between p-6 bg-transparent text-slate-900 font-semibold cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                      <span>Social Enterprise</span>
                      <div className="text-slate-400">
                        <Plus className="w-4 h-4 group-open/ent:hidden" />
                        <Minus className="w-4 h-4 hidden group-open/ent:block" />
                      </div>
                    </summary>
                    <div className="flex flex-col bg-emerald-100/30 pb-4">
                      <Link href="/programs/bashundhara" className="px-6 py-2.5 text-slate-600 hover:text-black hover:bg-black/5 transition-colors">Bashundhara</Link>
                      <Link href="/programs/teer" className="px-6 py-2.5 text-slate-600 hover:text-black hover:bg-black/5 transition-colors">Teer</Link>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown: WHERE WE WORK */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-black transition-colors h-full outline-none">
              Where We Work <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-[350px] pt-4">
              <div className="bg-amber-50/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-amber-500/10 p-8">
                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-5">Locations</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal', 'Rangpur', 'Mymensingh', 'Comilla', 'Bogra', 'Jessore', 'Dinajpur'].map((city) => (
                    <span key={city} className="text-[14px] text-slate-600 hover:text-black transition-colors cursor-default">{city}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Dropdown: RESOURCES */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-black transition-colors h-full outline-none">
              Resources <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-[250px] pt-4">
              <div className="bg-purple-50/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-purple-500/10 p-6">
                <div className="flex flex-col space-y-3">
                  {['News', 'Story', 'Campaigns', 'Notice', 'Media', 'Research'].map((item) => (
                    <Link key={item} href={`/resource/${item.toLowerCase()}`} className="group/link flex items-center justify-between text-slate-600 hover:text-black transition-colors">
                      {item}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Dropdown: GET INVOLVED */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-black transition-colors h-full outline-none">
              Get Involved <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
            </button>
            <div className="absolute top-full right-0 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-[250px] pt-4">
              <div className="bg-rose-50/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-rose-500/10 p-6">
                <div className="flex flex-col space-y-3">
                  <Link href="/careers" className="group/link flex items-center justify-between text-slate-600 hover:text-black transition-colors">Career <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /></Link>
                  <Link href="/internship" className="group/link flex items-center justify-between text-slate-600 hover:text-black transition-colors">Internship <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /></Link>
                  <Link href="/partner" className="group/link flex items-center justify-between text-slate-600 hover:text-black transition-colors">Partner with us <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /></Link>
                  <Link href="/visit" className="group/link flex items-center justify-between text-slate-600 hover:text-black transition-colors">Visit WOLT <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden text-sm font-medium md:block text-slate-500 hover:text-black transition-colors">
            Login
          </Link>
          <Link href="/#donate">
            <Button className="bg-slate-900 hover:bg-black text-white rounded-full px-8 py-5 font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]">
              Donate
            </Button>
          </Link>
          <button className="lg:hidden p-2 text-slate-600 hover:text-black transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
