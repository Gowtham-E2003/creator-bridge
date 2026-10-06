/**
 * CREATOR CONFIGURATION
 * 
 * Non-developers can easily customize this single file to update:
 * - Creator profile information & avatar
 * - VIP incentive copy & bullet points
 * - Social directory links and featured badges
 * - Visual styling cues
 */

export const creatorConfig = {
  // Creator Profile Information
  profile: {
    name: "Alex Rivera",
    handle: "@alexrivera",
    verified: true,
    status: {
      online: true,
      label: "Active Now",
    },
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Visual Director & Tech Curator. Helping 150k+ digital creators elevate aesthetic, workflow, and brand reach.",
    metrics: [
      { label: "Community", value: "150K+" },
      { label: "Templates", value: "40+" },
      { label: "Rating", value: "4.9 ★" },
    ]
  },

  // View 1: VIP Incentive & Lead Opt-in Form
  leadMagnet: {
    badge: "LIMITED VIP ACCESS",
    headline: "The 2025 Creator Growth & Aesthetic Toolkit",
    subheadline: "Get instant access to 45+ cinema color grade presets, Notion creator workspace, and private weekly growth breakdowns.",
    highlights: [
      "Instant direct download link (ZIP + Notion Template)",
      "Zero spam. One-click unsubscribe anytime",
      "Bonus: Private Discord invite code included",
    ],
    inputPlaceholder: "Enter your best personal email...",
    submitButtonText: "Claim Free Instant Access",
    submittingText: "Securing Your Access...",
    privacyGuarantee: "🔒 100% Secure. Never shared or spammed.",
    skipButtonText: "No thanks, take me straight to socials →",
    
    // Success View details
    success: {
      badge: "ACCESS UNLOCKED",
      title: "You're On The VIP List! 🎉",
      message: "Check your inbox in the next 2 minutes for your exclusive download bundle. In the meantime, connect with me below.",
      secondaryCtaText: "Explore Social Channels & Hubs →",
    }
  },

  // View 2: Social Links Directory
  directory: {
    bannerButtonText: "Claim Free VIP Toolkit",
    bannerButtonSubtext: "Free presets & Notion OS",
    sectionTitle: "Official Portals & Channels",
    
    // Directory Links
    links: [
      {
        id: "vip-vault",
        title: "VIP Creator Vault & Presets",
        description: "Curated LUTs, Notion workspace & member discounts",
        url: "https://example.com/vault",
        featured: true,
        badgeText: "POPULAR",
        iconType: "sparkles", // 'sparkles' | 'instagram' | 'twitter' | 'tiktok' | 'youtube' | 'globe' | 'mail'
      },
      {
        id: "instagram",
        title: "Instagram",
        description: "Behind-the-scenes, reels, gear breakdowns & daily stories",
        url: "https://instagram.com",
        featured: false,
        iconType: "instagram",
      },
      {
        id: "tiktok",
        title: "TikTok",
        description: "Viral 30-sec editing hacks, camera gear & setups",
        url: "https://tiktok.com",
        featured: false,
        iconType: "tiktok",
      },
      {
        id: "youtube",
        title: "YouTube Channel",
        description: "In-depth cinematic tutorials & creative studio vlogs",
        url: "https://youtube.com",
        featured: false,
        iconType: "youtube",
      },
      {
        id: "x-twitter",
        title: "X (formerly Twitter)",
        description: "Daily unfiltered thoughts on AI, tech & creator economy",
        url: "https://x.com",
        featured: false,
        iconType: "twitter",
      },
      {
        id: "weekly-memo",
        title: "Weekly Creative Memo",
        description: "Curated Sunday newsletter read by 45,000+ creators",
        url: "https://example.com/newsletter",
        featured: false,
        iconType: "mail",
      },
    ]
  },

  // Footer & Branding Details
  footer: {
    tagline: "Bridging creators to high-value audiences",
    copyright: "© 2025 Alex Rivera. All rights reserved.",
  }
};
