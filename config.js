// config.js — Blop Drop
// Clés de service lues au démarrage. À committer à la racine du repo web ET dans www/ (app).
//
// Règle mode mock : si une clé est absente OU contient "XXXX", le module concerné
// bascule en mode test → pub en placeholder, PostHog en console.
//
// Supabase : la clé "anon" est PUBLIQUE par conception (protégée par la RLS), OK dans un repo public.
// AdMob : les IDs ci-dessous sont PUBLICS (embarqués dans l'app), aucun risque.

// --- Supabase (live) ---
window.SUPABASE_URL = "https://rlgzadiyhjmfmztopfdu.supabase.co";
window.SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsZ3phZGl5aGptZm16dG9wZmR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1MDQ0MDYsImV4cCI6MjEwNTA4MDQwNn0.TWlRhqAkPLFmEIJu63dlTqPQqe2ExhY566fWSDldC2M";

// --- AdMob (iOS) ---
// ⚠️ Ces IDs sont ceux de l'app iOS. Android = une AUTRE app AdMob avec d'autres IDs.
window.ADMOB_APP_ID          = "ca-app-pub-6970352587518548~2422690720";   // App ID iOS
window.ADMOB_INTERSTITIAL_ID = "ca-app-pub-6970352587518548/1228581447";   // interstitiel = pub de fin de partie
window.ADMOB_REWARDED_ID     = "ca-app-pub-6970352587518548/2210490628";   // rewarded = pub pour +1 vie

// --- PostHog (mock tant que XXXX) ---
window.POSTHOG_KEY           = "phc_XXXXXXXX";
window.POSTHOG_HOST          = "https://eu.i.posthog.com";
