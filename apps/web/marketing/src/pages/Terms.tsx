import { Cpu, Scale, HelpCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="py-12 max-w-[800px] mx-auto text-left font-sans">
      
      {/* Header Block */}
      <div className="mb-12 border-b border-neutral-100 pb-8">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">Softmake.in Legal</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 font-sans mt-3">
          Terms of Service
        </h1>
        <p className="text-xs text-neutral-450 mt-2 font-mono">
          Last Updated: July 10, 2026
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50">
          <Cpu size={20} className="text-primary mb-3" />
          <h4 className="text-xs font-bold text-neutral-800">Development Terms</h4>
          <p className="text-[11px] text-neutral-450 mt-1 leading-relaxed">Milestone parameters guide all custom development schedules.</p>
        </div>
        <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50">
          <Scale size={20} className="text-primary mb-3" />
          <h4 className="text-xs font-bold text-neutral-800">IP Transfer</h4>
          <p className="text-[11px] text-neutral-450 mt-1 leading-relaxed">Full IP assignment occurs immediately upon final milestone clearance.</p>
        </div>
        <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50">
          <HelpCircle size={20} className="text-primary mb-3" />
          <h4 className="text-xs font-bold text-neutral-800">Support Scopes</h4>
          <p className="text-[11px] text-neutral-450 mt-1 leading-relaxed">30-day post-launch deployment support is standard for all builds.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-neutral max-w-none text-xs text-neutral-600 space-y-8 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 1. Engagement & Scoping
          </h2>
          <p>
            All custom software projects, progressive web app builds, Zoho configurations, and API integrations require a signed Statement of Work (SOW) defining clear milestones, deliverables, and payment boundaries. Estimates are valid for 30 calendar days.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 2. Client Responsibilities
          </h2>
          <p>
            Clients must supply all necessary API integration access credentials, technical design materials, and feedback in a timely manner. Delayed responses can adjust target launch timelines accordingly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 3. Payment Schedules & Retainers
          </h2>
          <p>
            Payment milestones are structured relative to SOW stages. Retainer hours for ongoing support integrations are billed monthly. Unused hours do not roll over to subsequent billing intervals unless explicitly agreed in writing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 4. Code Warranties & Limitation of Liability
          </h2>
          <p>
            We warrant that all custom systems will compile and function relative to the SOW specifications. We are not liable for outages caused by third-party API deprecations (such as Zoho, SAP, Microsoft, or WhatsApp API schema updates) occurring post-deployment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 5. Jurisdiction & Disputes
          </h2>
          <p>
            These terms are governed by the laws of India. Any legal disputes arising out of contracts built with Softmake.in will be settled under the courts of Davanagere, Karnataka, India.
          </p>
        </section>

      </div>

    </div>
  );
}
