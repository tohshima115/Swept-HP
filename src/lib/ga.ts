// Google Analyticsイベント送信用関数（本体用・attachart用で自動分岐）
export const sendGAEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/attachart') && window.attachartGtagLoaded && window.attachartGtag) {
      window.attachartGtag('event', eventName, params);
    } else if (window.gtag) {
      window.gtag('event', eventName, params);
    }
  }
}; 