import { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import ipadImage from '../../assets/screens/Apple iPad Pro 13_ Space Gray - Landscape.png';

export default function TabletMockup() {
  const ipadRef = useRef<HTMLDivElement>(null);
  const [ipadScale, setIpadScale] = useState(1);
  const [ipadHeight, setIpadHeight] = useState(400);
  const IPAD_BASE_WIDTH = 500;

  useEffect(() => {
    const handleResize = () => {
      if (ipadRef.current) {
        const width = ipadRef.current.offsetWidth;
        const height = ipadRef.current.offsetHeight;
        if (width > 0) {
          const currentScale = width / IPAD_BASE_WIDTH;
          setIpadScale(currentScale);
          setIpadHeight(height / currentScale);
        }
      }
    };

    const observer = new ResizeObserver(handleResize);
    if (ipadRef.current) observer.observe(ipadRef.current);
    
    handleResize();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full aspect-[3/4] flex items-center justify-center">
      {/* Rotated Landscape Image to make it Portrait */}
      <img
        src={ipadImage}
        alt="iPad Frame Portrait"
        className="absolute top-1/2 left-1/2 max-w-none z-20 pointer-events-none"
        style={{ 
          width: '133.33%', 
          transform: 'translate(-50%, -50%) rotate(-90deg)' 
        }}
      />

      <div 
        ref={ipadRef}
        className="absolute z-10 overflow-hidden rounded-[1rem] bg-black"
        style={{ top: '4.5%', bottom: '4.5%', left: '4.5%', right: '4.5%' }}
      >
        <div 
          className="bg-background flex flex-col w-full"
          style={{
            width: `${IPAD_BASE_WIDTH}px`,
            height: `${ipadHeight}px`,
            transform: `scale(${ipadScale})`,
            transformOrigin: 'top left'
          }}
        >
          {/* iPad UI - Vertically Stacked */}
          <div className="flex-1 p-4 overflow-hidden flex flex-col gap-4">
            
            {/* iPad Header */}
            <div className="flex justify-between items-center bg-card p-3 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <img src="/Logo.svg" alt="Softmake Logo" className="h-5 w-auto brightness-0 dark:invert" />
              </div>
              <div className="flex items-center gap-3">
                <Bell size={18} className="text-muted-foreground" />
                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Admin" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* iPad Stats (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-xs font-medium text-muted-foreground flex justify-between items-center mb-1">
                  Total Revenue
                  <span className="text-[10px] font-bold text-green-500">+12.5%</span>
                </div>
                <div className="text-2xl font-bold text-foreground">₹4,82,301</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-xs font-medium text-muted-foreground flex justify-between items-center mb-1">
                  Pending Tasks
                  <span className="text-[10px] font-bold text-red-500">-3.1%</span>
                </div>
                <div className="text-2xl font-bold text-foreground">24</div>
              </div>
            </div>

            {/* iPad Chart */}
            <div className="bg-card p-4 rounded-lg border border-border flex flex-col relative overflow-hidden h-[160px] shrink-0">
              <div className="flex justify-between items-center mb-4 relative z-10">
                <span className="text-sm font-bold text-foreground">Revenue Overview</span>
                <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded-sm bg-background">This Year</span>
              </div>
              <div className="flex-1 w-full h-full absolute inset-0 pt-12">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path d="M0,35 Q10,25 20,28 T40,20 T60,15 T80,22 T100,5" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                  <path d="M0,38 Q10,30 20,32 T40,28 T60,20 T80,28 T100,10" fill="none" stroke="#2563eb" strokeWidth="1.5" />
                  <path d="M0,30 Q10,20 20,25 T40,15 T60,5 T80,15 T100,2" fill="none" stroke="#10b981" strokeWidth="1" />
                </svg>
              </div>
            </div>

            {/* iPad Recent Projects */}
            <div className="bg-card p-4 rounded-lg border border-border flex-1 overflow-hidden flex flex-col">
              <span className="text-xs font-bold text-foreground mb-3 block">Recent Projects</span>
              <div className="space-y-3 flex-1">
                {[
                  { n: 'E-Commerce Platform', s: 'In Progress', p: 60, c: 'bg-blue-500' },
                  { n: 'Hospital Management', s: 'In Progress', p: 80, c: 'bg-blue-500' },
                  { n: 'Inventory System', s: 'Completed', p: 100, c: 'bg-green-500' },
                  { n: 'Mobile App Redesign', s: 'Planning', p: 25, c: 'bg-orange-500' }
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
          </div>
        </div>
      </div>
    </div>
  );
}
