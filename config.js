// config.js — Blop Drop
// Clés de service lues au démarrage. À committer à la racine du repo web ET dans www/ (app).
// Mode mock : si une clé contient "XXXX" ou est absente -> module en test (pub placeholder, PostHog console).

// --- Supabase (live) ---
window.SUPABASE_URL = "https://rlgzadiyhjmfmztopfdu.supabase.co";
window.SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsZ3phZGl5aGptZm16dG9wZmR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1MDQ0MDYsImV4cCI6MjEwNTA4MDQwNn0.TWlRhqAkPLFmEIJu63dlTqPQqe2ExhY566fWSDldC2M";

// --- AdMob (iOS) ---
window.ADMOB_APP_ID          = "ca-app-pub-6970352587518548~2422690720";
window.ADMOB_INTERSTITIAL_ID = "ca-app-pub-6970352587518548/1228581447";
window.ADMOB_REWARDED_ID     = "ca-app-pub-6970352587518548/2210490628";

// --- PostHog (live) ---
window.POSTHOG_KEY  = "phc_tRcMKsfKwD72iHaJsXdewz8fVZkPtFUwr6MqR7xXAYbm";
window.POSTHOG_HOST = "https://eu.i.posthog.com";

// --- Partage ---
// Lien inclus quand un joueur partage son score. Remplace-le par ta fiche App Store au lancement.
window.SHARE_URL = "https://jonathanbse84.github.io/bloop-drop-web/";
