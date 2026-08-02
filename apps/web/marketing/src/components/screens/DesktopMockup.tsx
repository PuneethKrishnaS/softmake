import { useState, useRef, useEffect } from 'react';
import { Search, Bell, Home, BarChart2, Briefcase, Users, FileText, UserCircle, CheckSquare, Calendar, PieChart, Settings } from 'lucide-react';
import monitorImage from '../../assets/screens/Dell UltraSharp Monitor.png';

export default function DesktopMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [logicalHeight, setLogicalHeight] = useState(600);
  const BASE_WIDTH = 1000;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        if (width > 0) {
          const currentScale = width / BASE_WIDTH;
          setScale(currentScale);
          setLogicalHeight(height / currentScale);
        }
      }
    };

    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);
    
    handleResize();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef}
        className="absolute z-10 overflow-hidden rounded-sm text-left"
        style={{ top: '2.6%', bottom: '26.8%', left: '1.2%', right: '1.2%' }}
      >
        <div 
          className="bg-background flex w-full"
          style={{
            width: `${BASE_WIDTH}px`,
            height: `${logicalHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
          }}
        >
          {/* Sidebar */}
          <div className="w-[20%] bg-sidebar text-sidebar-foreground flex flex-col text-[8px] md:text-xs border-r border-sidebar-border">
            <div className="p-4 flex items-center justify-center border-b border-sidebar-border">
              <img src="/Logo.svg" alt="Softmake Logo" className="h-6 w-auto brightness-0 dark:invert" />
            </div>
            
            <div className="flex-1 py-2 flex flex-col gap-1 px-3">
              <div className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-2 rounded-md font-medium">
                <Home size={14} /> <span>Dashboard</span>
              </div>
              {[
                { name: 'Analytics', icon: BarChart2 },
                { name: 'Projects', icon: Briefcase },
                { name: 'Clients', icon: Users },
                { name: 'Invoices', icon: FileText },
                { name: 'Employees', icon: UserCircle },
                { name: 'Tasks', icon: CheckSquare },
                { name: 'Calendar', icon: Calendar },
                { name: 'Reports', icon: PieChart },
                { name: 'Settings', icon: Settings },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 hover:bg-sidebar-accent rounded-md cursor-pointer transition-colors text-sidebar-foreground/70 hover:text-sidebar-accent-foreground">
                  <item.icon size={14} /> <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col p-3 md:p-4 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-sm md:text-xl font-bold text-foreground">Dashboard</h2>
                <p className="text-[10px] md:text-xs text-muted-foreground">Welcome back, Admin</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Search anything..." className="pl-9 pr-4 py-1.5 text-xs bg-card border border-border rounded-md outline-none w-48 text-foreground" />
                </div>
                <div className="relative">
                  <Bell size={16} className="text-muted-foreground" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 bg-card px-2 py-1 rounded-md border border-border">
                  <div className="w-6 h-6 rounded-full bg-muted overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Admin" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold text-foreground">Admin</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-3 mb-3">
              {[
                { title: 'Total Revenue', value: '₹4,82,301', change: '+12.5%', isUp: true },
                { title: 'Total Projects', value: '128', change: '+8.2%', isUp: true },
                { title: 'Total Clients', value: '86', change: '+5.4%', isUp: true },
                { title: 'Pending Tasks', value: '24', change: '-3.1%', isUp: false },
              ].map((stat, i) => (
                <div key={i} className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-[10px] font-medium text-muted-foreground flex justify-between items-center mb-2">
                    {stat.title}
                    <span className={`text-[9px] font-bold ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>{stat.change}</span>
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-[8px] text-muted-foreground mt-1">vs last month</div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="col-span-2 bg-card p-3 md:p-4 rounded-lg border border-border flex flex-col relative h-24 md:h-32 overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-foreground">Revenue Overview</span>
                  <span className="text-[9px] text-muted-foreground border px-2 py-1 rounded-sm">This Year v</span>
                </div>
                <div className="flex-1 w-full h-full relative">
                  {/* Simulated Chart lines using SVG */}
                  <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0,35 Q10,25 20,28 T40,20 T60,15 T80,22 T100,5" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                    <path d="M0,38 Q10,30 20,32 T40,28 T60,20 T80,28 T100,10" fill="none" stroke="#2563eb" strokeWidth="1.5" />
                    <path d="M0,30 Q10,20 20,25 T40,15 T60,5 T80,15 T100,2" fill="none" stroke="#10b981" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <span className="text-xs font-bold text-foreground">Project Status</span>
                <div className="flex items-center justify-center mt-4">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-8 border-primary border-r-green-500 border-b-orange-400 flex items-center justify-center">
                     <div className="text-center">
                       <div className="font-bold text-foreground">128</div>
                       <div className="text-[8px] text-muted-foreground">Total</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-3 gap-3 flex-1 pb-0">
              <div className="bg-card p-4 rounded-lg border border-border">
                <span className="text-xs font-bold text-foreground mb-3 block">Recent Projects</span>
                <div className="space-y-3">
                  {[
                    { n: 'E-Commerce Platform', s: 'In Progress', p: 60, c: 'bg-blue-500' },
                    { n: 'Hospital Management', s: 'In Progress', p: 80, c: 'bg-blue-500' },
                    { n: 'Inventory System', s: 'Completed', p: 100, c: 'bg-green-500' }
                  ].map((p, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[9px] mb-1">
                        <span className="font-semibold text-foreground">{p.n}</span>
                        <span className="text-muted-foreground">{p.p}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div className={`h-full ${p.c}`} style={{ width: `${p.p}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <span className="text-xs font-bold text-foreground mb-3 block">Recent Tasks</span>
                <div className="space-y-2">
                  {[
                    { n: 'UI/UX Design Review', d: 'Today' },
                    { n: 'API Integration', d: 'Tomorrow' },
                    { n: 'Database Optimization', d: '2 May, 2024' },
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-[9px]">
                      <div className="w-3 h-3 border border-border rounded-sm"></div>
                      <span className="text-foreground">{t.n}</span>
                      <span className="ml-auto text-muted-foreground">{t.d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <span className="text-xs font-bold text-foreground mb-3 block">Top Clients</span>
                <div className="space-y-2">
                  {['Tech Solutions Inc.', 'Global Enterprises', 'NextGen Pvt. Ltd.'].map((c, i) => (
                    <div key={i} className="text-[10px] font-medium text-primary hover:underline cursor-pointer py-1 border-b border-border last:border-0">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={monitorImage}
        alt="Monitor Frame"
        className="block w-full h-auto relative z-20 pointer-events-none"
      />
    </div>
  );
}
