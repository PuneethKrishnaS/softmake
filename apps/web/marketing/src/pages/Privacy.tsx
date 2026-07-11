import { Shield, Lock, Eye } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="max-w-[1440px] mx-auto text-left font-sans">
      
      {/* Header Block */}
      <div className="mb-12 border-b border-neutral-100 pb-8">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">Softmake.in Compliance</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 font-sans mt-3">
          Privacy Policy
        </h1>
        <p className="text-xs text-neutral-450 mt-2 font-mono">
          Last Updated: July 10, 2026
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50">
          <Lock size={20} className="text-primary mb-3" />
          <h4 className="text-xs font-bold text-neutral-800">Secure Processing</h4>
          <p className="text-[11px] text-neutral-450 mt-1 leading-relaxed">All client and project codebase assets are encrypted at rest.</p>
        </div>
        <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50">
          <Eye size={20} className="text-primary mb-3" />
          <h4 className="text-xs font-bold text-neutral-800">Zero Selling</h4>
          <p className="text-[11px] text-neutral-450 mt-1 leading-relaxed">We never share, lease, or sell business credentials or scopes.</p>
        </div>
        <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50">
          <Shield size={20} className="text-primary mb-3" />
          <h4 className="text-xs font-bold text-neutral-800">NDA Enforced</h4>
          <p className="text-[11px] text-neutral-450 mt-1 leading-relaxed">NDAs govern all code structures from concept to deployment.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-neutral max-w-none text-xs text-neutral-600 space-y-8 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 1. Information Collection
          </h2>
          <p>
            We collect information necessary to deliver customized IT, software integration, and consulting services. This includes business contacts, organization names, email addresses, and detailed project specification briefs submitted through our scoping forms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 2. How We Use Data
          </h2>
          <p>
            Your information is used strictly to establish project estimates, provide technical consulting, communicate system updates, and ensure correct software integrations. We do not run third-party tracking scripts inside custom client dashboards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 3. Code & Intellectual Property Security
          </h2>
          <p>
            All development workspaces are bound by secure sandbox permissions. Database access credentials and API keys are stored exclusively using environment managers (like AWS Parameter Store or Vault key chains) and are never hardcoded.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 4. Cookies & Web Analytics
          </h2>
          <p>
            Our landing page uses minimal essential cookies to remember country picker selections and maintain navigation states. No persistent user tracking cookies are saved to your local storage device.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <span className="text-primary font-mono font-bold">&gt;</span> 5. Contacting Compliance
          </h2>
          <p>
            If you have questions about this privacy protocol or wish to request immediate erasure of your submitted scope briefs, contact us directly at:
          </p>
          <div className="border-l-2 border-primary pl-4 py-1 text-[11px] text-neutral-500 font-medium">
            Email: <a href="mailto:info@softmake.in" className="text-primary hover:underline">info@softmake.in</a><br />
            Address: Davanagere, Karnataka, India
          </div>
        </section>

      </div>

    </div>
  );
}
