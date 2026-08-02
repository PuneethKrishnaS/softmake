import { useState, useRef, useEffect } from 'react';
import { Bell, Home, BarChart2, Briefcase, Menu } from 'lucide-react';
import iphoneImage from '../../assets/screens/Apple iPhone 11 Pro Max Silver.png';

export default function MobileMockup() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [logicalHeight, setLogicalHeight] = useState(812);
  const BASE_WIDTH = 375;

  useEffect(() => {
    const handleResize = () => {
      if (phoneRef.current) {
        const width = phoneRef.current.offsetWidth;
        const height = phoneRef.current.offsetHeight;
        if (width > 0) {
          const currentScale = width / BASE_WIDTH;
          setScale(currentScale);
          setLogicalHeight(height / currentScale);
        }
      }
    };

    const observer = new ResizeObserver(handleResize);
    if (phoneRef.current) observer.observe(phoneRef.current);
    
    handleResize();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full aspect-[9/18] flex items-center justify-center">
      <img
        src={iphoneImage}
        alt="iPhone"
        className="block w-full h-auto relative z-20 pointer-events-none"
      />

      <div 
        ref={phoneRef}
        className="absolute z-10 overflow-hidden bg-black rounded-sm md:rounded-xl xl:rounded-2xl"
        style={{ top: '4.5%', bottom: '3.5%', left: '5.5%', right: '5.5%' }} 
      >
        <div 
          className="bg-background w-full flex flex-col relative"
          style={{
            width: `${BASE_WIDTH}px`,
            height: `${logicalHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center bg-card p-4 border-b border-border z-10">
            <div className="flex items-center gap-3">
              <Menu size={20} className="text-muted-foreground" />
              <img src="/Logo.svg" alt="Softmake Logo" className="h-5 w-auto brightness-0 dark:invert" />
            </div>
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-muted-foreground" />
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Admin" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 pb-20">
            {/* Welcome Banner */}
            <div>
              <h2 className="text-xl font-bold text-foreground">Overview</h2>
              <p className="text-sm text-muted-foreground">Good morning, Admin!</p>
            </div>

            {/* Mobile Stats (Stacked) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card p-4 rounded-xl border border-border flex flex-col justify-center">
                <div className="text-xs font-medium text-muted-foreground mb-1">Revenue</div>
                <div className="text-xl font-bold text-foreground">₹4.8L</div>
                <span className="text-[10px] font-bold text-green-500 mt-1">+12.5%</span>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border flex flex-col justify-center">
                <div className="text-xs font-medium text-muted-foreground mb-1">Projects</div>
                <div className="text-xl font-bold text-foreground">128</div>
                <span className="text-[10px] font-bold text-green-500 mt-1">+8.2%</span>
              </div>
            </div>

            {/* Mobile Chart */}
            <div className="bg-card p-4 rounded-xl border border-border flex flex-col relative overflow-hidden h-[160px] shrink-0">
              <div className="flex justify-between items-center mb-4 relative z-10">
                <span className="text-sm font-bold text-foreground">Analytics</span>
                <span className="text-[10px] text-muted-foreground border border-border px-2 py-1 rounded-sm bg-background">Week</span>
              </div>
              <div className="flex-1 w-full h-full absolute inset-0 pt-12">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path d="M0,38 Q10,30 20,32 T40,28 T60,20 T80,28 T100,10" fill="none" stroke="#2563eb" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Recent Tasks */}
            <div className="bg-card p-4 rounded-xl border border-border">
              <span className="text-sm font-bold text-foreground mb-4 block">Pending Tasks</span>
              <div className="space-y-4">
                {[
                  { n: 'Review Design', d: 'Today' },
                  { n: 'API Integration', d: 'Tomorrow' },
                  { n: 'Fix Bugs', d: 'May 2' },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-4 h-4 border-2 border-border rounded-sm"></div>
                    <span className="text-foreground font-medium">{t.n}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{t.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Tab Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border flex justify-between items-center px-6 py-4 pb-6 z-20">
            <div className="flex flex-col items-center gap-1 text-primary cursor-pointer">
              <Home size={20} />
              <span className="text-[10px] font-medium">Home</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-muted-foreground cursor-pointer">
              <BarChart2 size={20} />
              <span className="text-[10px] font-medium">Stats</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-muted-foreground cursor-pointer">
              <Briefcase size={20} />
              <span className="text-[10px] font-medium">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
