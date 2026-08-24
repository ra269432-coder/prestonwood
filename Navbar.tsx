import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, Heart, ChevronDown, Briefcase, Laptop, Handshake, Building, Newspaper, BookOpen, Megaphone, Bell, Plus, Minus, Image, FileText } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-50 p-2 shadow-sm group-hover:scale-105 transition-transform">
            <Heart className="h-6 w-6 text-blue-600 drop-shadow-sm" fill="currentColor" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
            WOLT
          </span>
        </Link>

        <div className="hidden lg:flex gap-8 items-center text-[13px] font-bold text-slate-700 uppercase tracking-wider h-full">
          <Link href="/sdg" className="hover:text-emerald-600 transition-colors flex items-center h-full relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-600 hover:after:w-full after:transition-all">SDG&apos;S</Link>
          
          {/* Mega Dropdown: ABOUT US */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors h-full outline-none">
              ABOUT US <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[700px] pt-1">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-8 flex gap-12 text-slate-600 normal-case tracking-normal">
                {/* Column 1 */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg text-slate-800 font-semibold border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">About us <span className="text-blue-500">&rarr;</span></h3>
                  <div className="flex flex-col space-y-1">
                    <Link href="/about/vision-mission-values" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all font-medium text-[15px]">Vision, Mission & Values</Link>
                  </div>
                </div>
                {/* Column 2 */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg text-slate-800 font-semibold border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">Our Teams <span className="text-blue-500">&rarr;</span></h3>
                  <div className="flex flex-col space-y-1">
                    <Link href="/teams/team" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all font-medium text-[15px]">Team</Link>
                    <Link href="/teams/governing-board" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all font-medium text-[15px]">Governing Board</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mega Dropdown: WHAT WE DO */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors h-full outline-none">
              WHAT WE DO <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[450px] pt-1">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-0 text-slate-600 normal-case tracking-normal overflow-hidden">
                <div className="flex flex-col w-full">
                  {/* Social Development Accordion */}
                  <details className="group/dev border-b border-slate-100">
                    <summary className="flex items-center justify-between p-5 bg-white text-pink-600 font-medium text-[16px] cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                      <span>Social development</span>
                      <div className="text-pink-500">
                        <Plus className="w-5 h-5 group-open/dev:hidden" />
                        <Minus className="w-5 h-5 hidden group-open/dev:block" />
                      </div>
                    </summary>
                    <div className="flex flex-col bg-slate-50/50 border-t border-slate-100">
                      <Link href="/programs/mental-health" className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 hover:bg-slate-100 transition-colors">
                        <span className="text-[15px] text-slate-700">Mental Health</span>
                        <div className="bg-white rounded-full p-0.5 shadow-sm border border-slate-100"><Plus className="w-4 h-4 text-pink-500" strokeWidth={3} /></div>
                      </Link>
                      <Link href="/programs/climate-change" className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 hover:bg-slate-100 transition-colors">
                        <span className="text-[15px] text-slate-700">Climate change</span>
                      </Link>
                      <Link href="/programs/expanding-health-coverage" className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 hover:bg-slate-100 transition-colors">
                        <span className="text-[15px] text-slate-700">Expanding health coverage</span>
                        <div className="bg-white rounded-full p-0.5 shadow-sm border border-slate-100"><Plus className="w-4 h-4 text-pink-500" strokeWidth={3} /></div>
                      </Link>
                      <Link href="/programs/advocacy-for-social-change" className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 hover:bg-slate-100 transition-colors">
                        <span className="text-[15px] text-slate-700">Advocacy for Social Change</span>
                      </Link>
                      <Link href="/programs/disability-inclusion" className="flex items-center justify-between px-6 py-3.5 hover:bg-slate-100 transition-colors">
                        <span className="text-[15px] text-slate-700">Disability inclusion</span>
                      </Link>
                    </div>
                  </details>

                  {/* Humanitarian Response Accordion */}
                  <details className="group/hum border-b border-slate-100">
                    <summary className="flex items-center justify-between p-5 bg-white text-pink-600 font-medium text-[16px] cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                      <span>Humanitarian response</span>
                      <div className="text-pink-500">
                        <Plus className="w-5 h-5 group-open/hum:hidden" />
                        <Minus className="w-5 h-5 hidden group-open/hum:block" />
                      </div>
                    </summary>
                    <div className="flex flex-col bg-slate-50/50 border-t border-slate-100">
                      <Link href="/programs/disaster-preparedness" className="flex items-center justify-between px-6 py-5 hover:bg-slate-100 transition-colors">
                        <span className="text-[15px] text-slate-700 leading-snug">Disaster preparedness and response in Bangladesh</span>
                      </Link>
                    </div>
                  </details>

                  {/* Social Enterprise Accordion */}
                  <details className="group/ent">
                    <summary className="flex items-center justify-between p-5 bg-white text-pink-600 font-medium text-[16px] cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                      <span>Social Enterprise</span>
                      <div className="text-pink-500">
                        <Plus className="w-5 h-5 group-open/ent:hidden" />
                        <Minus className="w-5 h-5 hidden group-open/ent:block" />
                      </div>
                    </summary>
                    <div className="flex flex-col bg-slate-50/50 border-t border-slate-100">
                      <Link href="/programs/bashundhara" className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 hover:bg-slate-100 transition-colors">
                        <span className="text-[15px] text-slate-700">Bashundhara</span>
                      </Link>
                      <Link href="/programs/teer" className="flex items-center justify-between px-6 py-3.5 hover:bg-slate-100 transition-colors">
                        <span className="text-[15px] text-slate-700">Teer</span>
                      </Link>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          {/* Mega Dropdown: WHERE WE WORK */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors h-full outline-none">
              WHERE WE WORK <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[400px] pt-1">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-8 text-slate-600 normal-case tracking-normal">
                <div className="space-y-2">
                  <h3 className="text-lg text-slate-800 font-semibold border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">Where We Work <span className="text-blue-500">&rarr;</span></h3>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Dhaka</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Chittagong</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Sylhet</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Rajshahi</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Khulna</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Barisal</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Rangpur</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Mymensingh</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Comilla</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Bogra</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Jessore</span>
                    <span className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors cursor-default">Dinajpur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mega Dropdown: RESOURCES */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors h-full outline-none">
              RESOURCES <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[400px] pt-1">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-8 text-slate-600 normal-case tracking-normal">
                <div className="space-y-2">
                  <h3 className="text-lg text-slate-800 font-semibold border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">Resources <span className="text-blue-500">&rarr;</span></h3>
                  <div className="flex flex-col space-y-1">
                    <Link href="/resource/news" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-indigo-100 p-1.5 rounded-md"><Newspaper className="w-4 h-4 text-indigo-600" /></div> News
                    </Link>
                    <Link href="/resource/story" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-amber-100 p-1.5 rounded-md"><BookOpen className="w-4 h-4 text-amber-600" /></div> Story
                    </Link>
                    <Link href="/resource/campaigns" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-rose-100 p-1.5 rounded-md"><Megaphone className="w-4 h-4 text-rose-600" /></div> Campaigns
                    </Link>
                    <Link href="/resource/notice" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-emerald-100 p-1.5 rounded-md"><Bell className="w-4 h-4 text-emerald-600" /></div> Notice
                    </Link>
                    <Link href="/resource/media" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-purple-100 p-1.5 rounded-md"><Image className="w-4 h-4 text-purple-600" /></div> Media
                    </Link>
                    <Link href="/resource/research" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-cyan-100 p-1.5 rounded-md"><FileText className="w-4 h-4 text-cyan-600" /></div> Research
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mega Dropdown: GET INVOLVED */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors h-full outline-none">
              GET INVOLVED <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="absolute top-full right-0 hidden group-hover:block w-[400px] pt-1">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-8 text-slate-600 normal-case tracking-normal">
                <div className="space-y-2">
                  <h3 className="text-lg text-slate-800 font-semibold border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">Join Us <span className="text-blue-500">&rarr;</span></h3>
                  <div className="flex flex-col space-y-1">
                    <Link href="/careers" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-amber-100 p-1.5 rounded-md"><Briefcase className="w-4 h-4 text-amber-600" /></div> Career
                    </Link>
                    <Link href="/internship" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-cyan-100 p-1.5 rounded-md"><Laptop className="w-4 h-4 text-cyan-600" /></div> Internship
                    </Link>
                    <Link href="/partner" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-pink-100 p-1.5 rounded-md"><Handshake className="w-4 h-4 text-pink-600" /></div> Partner with us
                    </Link>
                    <Link href="/visit" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-medium text-[15px]">
                      <div className="bg-slate-100 p-1.5 rounded-md"><Building className="w-4 h-4 text-slate-600" /></div> Visit WOLT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/login" className="hidden text-sm font-bold md:block hover:text-blue-600 uppercase text-slate-500 transition-colors tracking-wide">
            LOGIN
          </Link>
          <Link href="/#donate">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md shadow-blue-500/20 text-white rounded-md px-7 font-bold uppercase tracking-wide transition-all hover:-translate-y-0.5">
              DONATE
            </Button>
          </Link>
          <button className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors">
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}
