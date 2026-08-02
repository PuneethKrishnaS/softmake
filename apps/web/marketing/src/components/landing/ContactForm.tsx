import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const countries = [
  { flagUrl: 'https://flagcdn.com/16x12/in.png', code: '+91', label: 'India' },
  { flagUrl: 'https://flagcdn.com/16x12/us.png', code: '+1', label: 'United States' },
  { flagUrl: 'https://flagcdn.com/16x12/gb.png', code: '+44', label: 'United Kingdom' },
  { flagUrl: 'https://flagcdn.com/16x12/au.png', code: '+61', label: 'Australia' },
  { flagUrl: 'https://flagcdn.com/16x12/ae.png', code: '+971', label: 'UAE' }
];

export default function ContactForm({ prefilledMessage }: { prefilledMessage?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formFields, setFormFields] = useState({ firstName: '', lastName: '', company: '', email: '', contact: '', message: prefilledMessage || '' });
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefilledMessage) {
      setFormFields(prev => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCountryDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formFields.firstName && formFields.lastName && formFields.company && formFields.email && formFields.contact) {
      setIsSubmitting(true);
      setErrorMessage("");

      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        setErrorMessage("Web3Forms Access Key is missing. Please add it to your .env file.");
        setIsSubmitting(false);
        return;
      }

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Scoping Request from ${formFields.firstName} ${formFields.lastName} (${formFields.company})`,
            from_name: `${formFields.firstName} ${formFields.lastName}`,
            email: formFields.email,
            company: formFields.company,
            contact_number: `${selectedCountry.code} ${formFields.contact}`,
            message: formFields.message || "No specific details provided.",
          }),
        });

        const result = await response.json();
        
        if (result.success) {
          setSubmitted(true);
        } else {
          setErrorMessage(result.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        setErrorMessage("Network error occurred. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-muted/10 border border-border p-6 sm:p-10 rounded-lg w-full">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-12"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Sparkles size={20} className="animate-pulse" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-foreground font-sans">Message Sent Successfully!</h3>
          <p className="text-sm md:text-base text-muted-foreground mt-2 font-sans font-medium">
            Thank you for reaching out. A systems architect will review your project details and respond within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormFields({ firstName: '', lastName: '', company: '', email: '', contact: '', message: '' });
            }}
            className="mt-6 text-sm font-bold uppercase tracking-wider text-primary hover:underline font-mono"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleContactSubmit} className="flex flex-col gap-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="form-first-name" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono">
                First Name <span className="text-primary">*</span>
              </label>
              <input
                id="form-first-name"
                type="text"
                required
                value={formFields.firstName}
                onChange={(e) => setFormFields({ ...formFields, firstName: e.target.value })}
                placeholder="Enter First Name"
                className="bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 font-sans"
              />
            </div>

            {/* Last Name field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="form-last-name" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono">
                Last Name <span className="text-primary">*</span>
              </label>
              <input
                id="form-last-name"
                type="text"
                required
                value={formFields.lastName}
                onChange={(e) => setFormFields({ ...formFields, lastName: e.target.value })}
                placeholder="Enter Last Name"
                className="bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="form-company" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono">
                Company <span className="text-primary">*</span>
              </label>
              <input
                id="form-company"
                type="text"
                required
                value={formFields.company}
                onChange={(e) => setFormFields({ ...formFields, company: e.target.value })}
                placeholder="Enter Company"
                className="bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 font-sans"
              />
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="form-email" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono">
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="form-email"
                type="email"
                required
                value={formFields.email}
                onChange={(e) => setFormFields({ ...formFields, email: e.target.value })}
                placeholder="Enter Email"
                className="bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 font-sans"
              />
            </div>
          </div>

          {/* Mobile / Contact Number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-contact" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono">
              Mobile <span className="text-primary">*</span>
            </label>
            <div className="relative flex rounded-md border border-border bg-card focus-within:border-primary/50 overflow-visible">
              {/* Custom Dropdown Trigger Button */}
              <div ref={dropdownRef} className="relative shrink-0 flex items-center">
                <button
                  type="button"
                  onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                  className="bg-muted border-r border-border px-3 h-full text-sm text-foreground hover:bg-muted/80 flex items-center gap-2 focus:outline-none font-sans min-w-[85px]"
                >
                  <img src={selectedCountry.flagUrl} alt="" className="w-4 h-3 object-cover rounded-[1px] shrink-0" />
                  <span className="font-mono text-xs md:text-sm font-semibold text-foreground">{selectedCountry.code}</span>
                  <ChevronDown size={11} className="text-muted-foreground shrink-0" />
                </button>

                {/* Dropdown Options List */}
                {countryDropdownOpen && (
                  <div className="absolute top-[108%] left-0 w-48 bg-card border border-border rounded-md shadow-2xl z-50 py-1 flex flex-col">
                    {countries.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(c);
                          setCountryDropdownOpen(false);
                        }}
                        className="flex items-center gap-3 px-3 py-2 text-xs md:text-sm text-foreground hover:bg-muted transition-colors text-left"
                      >
                        <img src={c.flagUrl} alt="" className="w-4 h-3 object-cover rounded-[1px] shrink-0" />
                        <span className="font-mono font-bold text-muted-foreground min-w-[32px]">{c.code}</span>
                        <span className="truncate text-muted-foreground font-medium">{c.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input
                id="form-contact"
                type="tel"
                required
                value={formFields.contact}
                onChange={(e) => setFormFields({ ...formFields, contact: e.target.value })}
                placeholder="Enter Contact"
                className="w-full px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none font-sans bg-transparent"
              />
            </div>
          </div>

          {/* Message Details */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-message" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono">
              Project Details & Scope
            </label>
            <textarea
              id="form-message"
              rows={3}
              value={formFields.message}
              onChange={(e) => setFormFields({ ...formFields, message: e.target.value })}
              placeholder="Tell us about the challenges you're facing or the custom system you'd like to build."
              className="bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 font-sans resize-none leading-relaxed"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm font-bold text-center font-mono uppercase tracking-wider">
              {errorMessage}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/95 text-primary-foreground border border-primary font-bold py-4 rounded-md transition-all shadow-md text-sm md:text-base uppercase tracking-wider text-center inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Scope Details"}
            {!isSubmitting && <ArrowRight size={13} />}
          </button>
        </form>
      )}
    </div>
  );
}
