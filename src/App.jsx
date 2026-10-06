import React, { useState } from 'react';
import { 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  Check 
} from 'lucide-react';
import { creatorConfig } from './config/creator';

/**
 * Clean SVG Brand Icons for high-contrast mobile dark mode
 */
const BrandIcon = ({ type, className = "w-5 h-5" }) => {
  switch (type) {
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.7a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.87-4.48V8.78a8.28 8.28 0 0 0 4.75 1.48v-3.47a4.85 4.85 0 0 1-.95-.1z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'mail':
      return <Mail className={className} />;
    default:
      return <ExternalLink className={className} />;
  }
};

export default function App() {
  // Current active view: 'optin' (Default View 1) | 'directory' (View 2)
  const [currentView, setCurrentView] = useState('optin');
  
  // Email capture state
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  /**
   * Asynchronous email submission handler
   * Ready to connect with Beehiiv, ConvertKit, AWeber, Mailchimp, or custom API/Webhook
   */
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side email validation
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setErrorMessage('Please enter your email address to continue.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address (e.g., name@example.com).');
      return;
    }

    setIsSubmitting(true);

    try {
      /**
       * -------------------------------------------------------------
       * API / WEBHOOK INTEGRATION POINT:
       * Replace this simulation with your actual provider endpoint:
       *
       * const response = await fetch('https://api.yourprovider.com/v1/subscribe', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify({ email: trimmedEmail, source: 'creator_bridge_bio' })
       * });
       * if (!response.ok) throw new Error('Subscription failed');
       * -------------------------------------------------------------
       */
      await new Promise((resolve) => setTimeout(resolve, 850));

      // Successfully processed
      setIsSubmitted(true);
      setEmail('');
    } catch {
      setErrorMessage('Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Quick share button handler (uses Web Share API or falls back to clipboard)
   */
  const handleShare = async () => {
    const shareData = {
      title: creatorConfig.profile.name,
      text: `${creatorConfig.profile.name} - Official Hub & Free VIP Content`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setToastMessage('Link copied to clipboard!');
        setTimeout(() => setToastMessage(''), 2500);
      } catch {
        setToastMessage('Could not copy link.');
        setTimeout(() => setToastMessage(''), 2500);
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Ambient background lighting mesh */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-purple-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] -right-24 w-[280px] h-[280px] bg-indigo-600/10 rounded-full blur-[90px]" />
        <div className="absolute bottom-10 -left-20 w-[260px] h-[260px] bg-pink-600/10 rounded-full blur-[90px]" />
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-zinc-800/90 border border-zinc-700/80 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-fade-in">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container - Mobile First Max 430px */}
      <main className="relative z-10 w-full max-w-[430px] mx-auto px-5 safe-area-top flex-1 flex flex-col">
        {/* Top App Bar Navigation */}
        <header className="flex items-center justify-between py-3 mb-2">
          {/* View toggle badge or brand indicator */}
          {currentView === 'directory' ? (
            <button
              onClick={() => setCurrentView('optin')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 text-xs font-semibold hover:border-purple-400/60 active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>{creatorConfig.directory.bannerButtonText}</span>
            </button>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-medium text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Official Creator Portal</span>
            </div>
          )}

          {/* Share Action Button */}
          <button
            onClick={handleShare}
            aria-label="Share creator page"
            className="p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 active:scale-90 transition-all"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </header>

        {/* Creator Profile Header */}
        <section className="text-center pt-2 pb-5 flex flex-col items-center">
          {/* Avatar with glowing active badge */}
          <div className="relative mb-3.5">
            <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-violet-500/30 via-zinc-800 to-pink-500/30 shadow-2xl">
              <img
                src={creatorConfig.profile.avatarUrl}
                alt={creatorConfig.profile.name}
                className="w-full h-full object-cover rounded-full select-none"
                loading="eager"
              />
            </div>

            {/* Glowing Online / Active Badge */}
            {creatorConfig.profile.status.online && (
              <div 
                className="absolute bottom-1 right-1 flex items-center justify-center p-1 bg-zinc-950 rounded-full"
                title={creatorConfig.profile.status.label}
              >
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-zinc-950" />
                </span>
              </div>
            )}
          </div>

          {/* Name & Verified Badge */}
          <div className="flex items-center gap-1.5 justify-center mb-0.5">
            <h1 className="text-xl font-bold tracking-tight text-white">
              {creatorConfig.profile.name}
            </h1>
            {creatorConfig.profile.verified && (
              <span className="inline-flex text-purple-400" title="Verified Creator">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            )}
          </div>

          {/* Handle */}
          <p className="text-sm font-semibold text-purple-400/90 mb-2">
            {creatorConfig.profile.handle}
          </p>

          {/* Bio */}
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xs leading-relaxed font-normal">
            {creatorConfig.profile.bio}
          </p>

          {/* Quick Creator Proof Metrics */}
          {creatorConfig.profile.metrics && (
            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-zinc-800/60 text-center">
              {creatorConfig.profile.metrics.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-200">{item.value}</span>
                  <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* VIEW 1: EMAIL OPT-IN & VIP INCENTIVE CARD (DEFAULT)                      */}
        {/* ========================================================================= */}
        {currentView === 'optin' && (
          <div className="w-full space-y-4 animate-fade-in">
            {/* VIP Content Incentive Card */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-purple-500/40 via-zinc-800/80 to-zinc-800/40 shadow-glow-purple">
              <div className="relative rounded-[15px] bg-[#121217]/95 backdrop-blur-xl p-5 border border-zinc-800/60">
                {/* Free Access Incentive Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    {creatorConfig.leadMagnet.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    100% Free
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-2">
                  {creatorConfig.leadMagnet.headline}
                </h2>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {creatorConfig.leadMagnet.subheadline}
                </p>

                {/* Highlights / Bullet points */}
                <ul className="space-y-2 mb-5">
                  {creatorConfig.leadMagnet.highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* State: Form vs Success Confirmation */}
                {!isSubmitted ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-3">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        disabled={isSubmitting}
                        placeholder={creatorConfig.leadMagnet.inputPlaceholder}
                        autoComplete="email"
                        spellCheck="false"
                        className="w-full pl-10 pr-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Inline Validation Error Message */}
                    {errorMessage && (
                      <p className="text-xs text-rose-400 font-medium pl-1 animate-fade-in flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                        {errorMessage}
                      </p>
                    )}

                    {/* Primary Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98] shadow-lg shadow-purple-900/30 transition-all disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{creatorConfig.leadMagnet.submittingText}</span>
                        </>
                      ) : (
                        <>
                          <span>{creatorConfig.leadMagnet.submitButtonText}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[10px] text-zinc-500 font-normal pt-1">
                      {creatorConfig.leadMagnet.privacyGuarantee}
                    </p>
                  </form>
                ) : (
                  /* Animated Success State */
                  <div className="text-center py-3 space-y-3 animate-fade-in">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">
                        {creatorConfig.leadMagnet.success.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                        {creatorConfig.leadMagnet.success.message}
                      </p>
                    </div>

                    <button
                      onClick={() => setCurrentView('directory')}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-zinc-800 hover:bg-zinc-700 active:scale-98 transition-all border border-zinc-700"
                    >
                      <span>{creatorConfig.leadMagnet.success.secondaryCtaText}</span>
                    </button>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[11px] text-zinc-500 hover:text-zinc-300 underline underline-offset-2 transition-colors"
                    >
                      Enter a different email
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Clear Secondary Text Action: Skip to Socials */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setCurrentView('directory')}
                className="text-xs font-medium text-zinc-400 hover:text-zinc-200 active:text-purple-400 transition-colors py-2 px-3 rounded-lg group"
              >
                <span>{creatorConfig.leadMagnet.skipButtonText}</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: SOCIAL LINKS DIRECTORY                                           */}
        {/* ========================================================================= */}
        {currentView === 'directory' && (
          <div className="w-full space-y-3 animate-fade-in">
            {/* Quick Toggle Banner to Reclaim Free Content */}
            <div 
              onClick={() => setCurrentView('optin')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setCurrentView('optin')}
              className="group cursor-pointer rounded-xl p-[1px] bg-gradient-to-r from-violet-600 via-pink-600 to-indigo-600 shadow-md hover:shadow-purple-500/20 active:scale-[0.99] transition-all"
            >
              <div className="flex items-center justify-between px-4 py-3 rounded-[11px] bg-zinc-950/90 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                      {creatorConfig.directory.bannerButtonText}
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      {creatorConfig.directory.bannerButtonSubtext}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Claim</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Directory Section Header */}
            <div className="flex items-center justify-between pt-2 pb-1 px-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                {creatorConfig.directory.sectionTitle}
              </h2>
              <span className="text-[11px] text-zinc-500 font-medium">
                {creatorConfig.directory.links.length} Links
              </span>
            </div>

            {/* List of Action Cards */}
            <div className="space-y-2.5">
              {creatorConfig.directory.links.map((link) => {
                // Featured link with prominent gradient glow border
                if (link.featured) {
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block rounded-2xl p-[1px] shimmer-border shadow-glow-purple active:scale-[0.98] transition-all"
                    >
                      <div className="relative flex items-center justify-between p-4 rounded-[15px] bg-[#121217]/95 backdrop-blur-md">
                        <div className="flex items-center gap-3.5 min-w-0 pr-2">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-md shrink-0">
                            <BrandIcon type={link.iconType} className="w-5 h-5" />
                          </div>
                          <div className="text-left truncate">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                                {link.title}
                              </span>
                              {link.badgeText && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase tracking-wider bg-purple-500 text-white shadow-sm shrink-0">
                                  {link.badgeText}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-zinc-400 truncate">
                              {link.description}
                            </p>
                          </div>
                        </div>

                        <div className="p-2 rounded-lg bg-zinc-800/80 text-zinc-300 group-hover:text-white group-hover:bg-purple-600/30 transition-all shrink-0">
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </a>
                  );
                }

                // Standard link cards
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700/80 backdrop-blur-md active:scale-[0.98] transition-all"
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-2">
                      <div className="w-9 h-9 rounded-xl bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-colors shrink-0">
                        <BrandIcon type={link.iconType} className="w-4 h-4" />
                      </div>
                      <div className="text-left truncate">
                        <p className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors truncate">
                          {link.title}
                        </p>
                        <p className="text-xs text-zinc-400 truncate">
                          {link.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-1.5 text-zinc-500 group-hover:text-zinc-300 transition-colors shrink-0">
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-[430px] mx-auto px-5 pt-8 safe-area-bottom text-center">
        <div className="border-t border-zinc-800/60 pt-4 pb-2 space-y-1">
          <p className="text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">
            {creatorConfig.footer.tagline}
          </p>
          <p className="text-[10px] text-zinc-600">
            {creatorConfig.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
