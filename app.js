const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const CONFIG = {
  maxFileBytes: 5 * 1024 * 1024,
  languages: { en: 'English', hi: 'हिन्दी', kn: 'ಕನ್ನಡ' },
  themeKey: 'mailtrace_theme',
  langKey: 'mailtrace_lang',
  casesKey: 'mailtrace_cases_v2'
};

const DEMO_PHISH = `From: Microsoft Security <security@micros0ft-support.com>\nTo: analyst@example.com\nReply-To: account-review@secure-m365-alerts.com\nReturn-Path: <bounce@micros0ft-support.com>\nSubject: URGENT: Your Microsoft 365 account will be suspended\nDate: Tue, 09 Sep 2026 13:10:00 +0000\nMessage-ID: <demo-phish-26106@mailtrace.local>\nReceived: from mail.secure-m365-alerts.com (203.0.113.42) by mx.example.com;\nAuthentication-Results: mx.example.com; spf=fail smtp.mailfrom=micros0ft-support.com; dkim=fail header.d=micros0ft-support.com; dmarc=fail header.from=micros0ft-support.com\nContent-Type: multipart/mixed; boundary="demo-boundary"\n\nDear customer,\n\nURGENT: Your account will be suspended within 24 hours. Verify your password immediately at https://secure-m365-alerts.com/login to avoid losing access.\n\nFailure to complete verification will result in permanent account closure.\n\nRegards,\nMicrosoft Security Team\n\n[Attachment: Account_Verification.pdf | application/pdf | 18 KB]`;

const DEMO_SAFE = `From: Campus Library <library@example.edu>\nTo: analyst@example.com\nReply-To: library@example.edu\nReturn-Path: <library@example.edu>\nSubject: Library book renewal confirmation\nDate: Tue, 09 Sep 2026 09:15:00 +0530\nMessage-ID: <demo-safe-26106@example.edu>\nAuthentication-Results: mx.example.edu; spf=pass smtp.mailfrom=example.edu; dkim=pass header.d=example.edu; dmarc=pass header.from=example.edu\nContent-Type: text/plain\n\nHello,\n\nYour library book has been renewed successfully. The new due date is 30 September 2026.\n\nThank you,\nCampus Library`;

const DEMO_CAMPAIGN_2 = `From: Microsoft Support <support@micros0ft-support.com>\nTo: employee2@example.com\nReply-To: verify@secure-m365-alerts.com\nSubject: Action required: Microsoft 365 verification\nDate: Wed, 10 Sep 2026 11:04:00 +0000\nMessage-ID: <demo-campaign-2@mailtrace.local>\nReceived: from mx.secure-m365-alerts.com (203.0.113.42) by mx.example.com;\nAuthentication-Results: mx.example.com; spf=fail; dkim=fail; dmarc=fail\nContent-Type: text/plain\n\nYour account requires immediate verification.\n\nOpen https://secure-m365-alerts.com/verify immediately to avoid service interruption.`;

const DEMO_CAMPAIGN_3 = `From: M365 Security <notice@micros0ft-support.com>\nTo: employee3@example.com\nReply-To: verify@secure-m365-alerts.com\nSubject: URGENT account validation\nDate: Wed, 10 Sep 2026 11:18:00 +0000\nMessage-ID: <demo-campaign-3@mailtrace.local>\nReceived: from relay.secure-m365-alerts.com (198.51.100.24) by mx.example.com;\nAuthentication-Results: mx.example.com; spf=fail; dkim=pass; dmarc=fail\nContent-Type: text/plain\n\nURGENT. Verify your account at https://secure-m365-alerts.com/verify now.`;

const I18N = {
  en: {
    dashboard:'Dashboard', analyze:'Analyze Email', investigations:'Investigations', correlation:'Correlation', intel:'Threat Intel', reports:'Reports', settings:'Settings', help:'Help',
    dashboardTitle:'Security Operations Dashboard', dashboardSub:'Detect, trace and investigate suspicious email evidence.',
    analyzeTitle:'Analyze Suspicious Email', analyzeSub:'Upload one or more .eml files for safe forensic analysis.',
    investigationsTitle:'Investigation Cases', investigationsSub:'Search, review and reopen locally stored investigations.',
    correlationTitle:'Threat Correlation', correlationSub:'Find shared infrastructure across analyzed emails.',
    intelTitle:'Threat Intelligence', intelSub:'Review extracted indicators and intelligence boundaries.',
    reportsTitle:'Forensic Reports', reportsSub:'Generate a handoff-ready investigation report.',
    settingsTitle:'Settings', settingsSub:'Theme, language and demo controls.', helpTitle:'Help & Safety', helpSub:'How to use MailTrace safely and explain its scope.',
    upload:'Upload .EML', analyze:'Analyze', tryPhish:'Try Phishing Demo', trySafe:'Try Safe Demo', clear:'Clear', print:'Print / Save PDF',
    investigationsCard:'Investigations', highRisk:'High-risk cases', indicators:'Indicators observed', engine:'Engine status', ready:'READY',
    recentCases:'Recent investigations', quickStart:'Quick start', chooseFiles:'Choose .eml files', dropHint:'Drop files here or browse. Max 5 MB per file.',
    singleFile:'Single email', multiFile:'Multiple emails', batchHint:'Upload 2+ emails to reveal campaign relationships.',
    classification:'Classification', risk:'Risk score', reasons:'Why it was flagged', evidence:'Evidence', authentication:'Authentication', timeline:'Timeline', recommended:'Recommended action',
    noCases:'No investigations yet.', noCurrent:'Open a case first.', noIndicators:'No indicators extracted.',
    search:'Search cases…', theme:'Theme', dark:'Dark', light:'Light', language:'Language', demoMode:'Demo mode', localFirst:'Local-first prototype',
    security:'Security posture', attachmentsNever:'Attachments are never executed.', urlsNever:'URLs are never opened automatically.', geoNote:'IP geolocation is approximate and does not identify a person’s exact location.',
    reportDisclaimer:'Defensive prototype. Demo/fallback intelligence is explicitly labelled.', correlationFinding:'Shared infrastructure can indicate a possible campaign; it is not proof of common ownership.',
    analyzeComplete:'Analysis complete', notes:'Analyst notes', save:'Save notes', status:'Status', severity:'Severity', safe:'SAFE', low:'LOW', medium:'MEDIUM', high:'HIGH', critical:'CRITICAL',
    uploadError:'Only .eml files up to 5 MB are supported.',
  },
  hi: {
    dashboard:'डैशबोर्ड', analyze:'ईमेल विश्लेषण', investigations:'जांच मामले', correlation:'संबंध', intel:'थ्रेट इंटेल', reports:'रिपोर्ट', settings:'सेटिंग्स', help:'मदद',
    dashboardTitle:'सिक्योरिटी ऑपरेशंस डैशबोर्ड', dashboardSub:'संदिग्ध ईमेल को पहचानें, ट्रेस करें और जांचें.', analyzeTitle:'संदिग्ध ईमेल का विश्लेषण', analyzeSub:'सुरक्षित फोरेंसिक विश्लेषण के लिए .eml फ़ाइलें अपलोड करें.',
    investigationsTitle:'जांच मामले', investigationsSub:'स्थानीय रूप से संग्रहित मामलों को खोजें और दोबारा खोलें.', correlationTitle:'थ्रेट संबंध', correlationSub:'विश्लेषित ईमेल में साझा इंफ्रास्ट्रक्चर खोजें.', intelTitle:'थ्रेट इंटेलिजेंस', intelSub:'इंडिकेटर और इंटेलिजेंस सीमाओं की समीक्षा करें.', reportsTitle:'फोरेंसिक रिपोर्ट', reportsSub:'जांच हैंडऑफ के लिए रिपोर्ट बनाएं.', settingsTitle:'सेटिंग्स', settingsSub:'थीम, भाषा और डेमो नियंत्रण.', helpTitle:'मदद और सुरक्षा', helpSub:'MailTrace का सुरक्षित उपयोग और इसकी सीमाएं.',
    upload:'EML अपलोड', analyze:'विश्लेषण', tryPhish:'फिशिंग डेमो', trySafe:'सुरक्षित डेमो', clear:'साफ करें', print:'प्रिंट / PDF',
    investigationsCard:'जांच', highRisk:'उच्च जोखिम मामले', indicators:'इंडिकेटर', engine:'इंजन', ready:'तैयार', recentCases:'हाल की जांच', quickStart:'त्वरित शुरुआत', chooseFiles:'.eml फ़ाइलें चुनें', dropHint:'फ़ाइल यहां छोड़ें या ब्राउज़ करें. अधिकतम 5 MB.', singleFile:'एक ईमेल', multiFile:'कई ईमेल', batchHint:'कैंपेन संबंधों के लिए 2+ ईमेल अपलोड करें.',
    classification:'वर्गीकरण', risk:'जोखिम स्कोर', reasons:'क्यों फ्लैग हुआ', evidence:'साक्ष्य', authentication:'प्रमाणीकरण', timeline:'टाइमलाइन', recommended:'सुझाया गया कदम', noCases:'अभी कोई जांच नहीं.', noCurrent:'पहले कोई केस खोलें.', noIndicators:'कोई इंडिकेटर नहीं.', search:'केस खोजें…', theme:'थीम', dark:'डार्क', light:'लाइट', language:'भाषा', demoMode:'डेमो मोड', localFirst:'लोकल-फर्स्ट प्रोटोटाइप', security:'सुरक्षा स्थिति', attachmentsNever:'अटैचमेंट कभी execute नहीं होते.', urlsNever:'URL अपने आप नहीं खोले जाते.', geoNote:'IP जियोलोकेशन अनुमानित है और सटीक व्यक्ति का स्थान नहीं बताता.', reportDisclaimer:'डिफेंसिव प्रोटोटाइप. डेमो/फॉलबैक इंटेलिजेंस को स्पष्ट रूप से लेबल किया गया है.', correlationFinding:'साझा इंफ्रास्ट्रक्चर संभावित कैंपेन दिखा सकता है; यह साझा स्वामित्व का प्रमाण नहीं है.', analyzeComplete:'विश्लेषण पूरा', notes:'विश्लेषक नोट्स', save:'नोट्स सहेजें', status:'स्थिति', severity:'गंभीरता', safe:'सुरक्षित', low:'कम', medium:'मध्यम', high:'उच्च', critical:'गंभीर', uploadError:'केवल .eml फ़ाइलें 5 MB तक समर्थित हैं.'
  },
  kn: {
    dashboard:'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', analyze:'ಇಮೇಲ್ ವಿಶ್ಲೇಷಣೆ', investigations:'ವಿಚಾರಣೆ ಪ್ರಕರಣಗಳು', correlation:'ಸಂಬಂಧ', intel:'ಥ್ರೆಟ್ ಇಂಟೆಲ್', reports:'ವರದಿಗಳು', settings:'ಸೆಟ್ಟಿಂಗ್‌ಗಳು', help:'ಸಹಾಯ',
    dashboardTitle:'ಸಿಕ್ಯೂರಿಟಿ ಆಪರೇಷನ್ಸ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', dashboardSub:'ಸಂದೇಹಾಸ್ಪದ ಇಮೇಲ್‌ಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ, ಟ್ರೇಸ್ ಮಾಡಿ ಮತ್ತು ತನಿಖೆ ಮಾಡಿ.', analyzeTitle:'ಸಂದೇಹಾಸ್ಪದ ಇಮೇಲ್ ವಿಶ್ಲೇಷಣೆ', analyzeSub:'.eml ಫೈಲ್‌ಗಳನ್ನು ಸುರಕ್ಷಿತ ಫಾರೆನ್ಸಿಕ್ ವಿಶ್ಲೇಷಣೆಗೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
    investigationsTitle:'ವಿಚಾರಣೆ ಪ್ರಕರಣಗಳು', investigationsSub:'ಸ್ಥಳೀಯವಾಗಿ ಸಂಗ್ರಹಿಸಿರುವ ಪ್ರಕರಣಗಳನ್ನು ಹುಡುಕಿ ಮತ್ತು ತೆರೆಯಿರಿ.', correlationTitle:'ಥ್ರೆಟ್ ಸಂಬಂಧ', correlationSub:'ವಿಶ್ಲೇಷಿಸಿದ ಇಮೇಲ್‌ಗಳಲ್ಲಿ ಹಂಚಿಕೊಂಡ ಇನ್‌ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಹುಡುಕಿ.', intelTitle:'ಥ್ರೆಟ್ ಇಂಟೆಲಿಜೆನ್ಸ್', intelSub:'ಇಂಡಿಕೇಟರ್‌ಗಳು ಮತ್ತು ಇಂಟೆಲಿಜೆನ್ಸ್ ಮಿತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.', reportsTitle:'ಫಾರೆನ್ಸಿಕ್ ವರದಿಗಳು', reportsSub:'ತನಿಖೆ ಹ್ಯಾಂಡಾಫ್‌ಗಾಗಿ ವರದಿ ಸೃಷ್ಟಿಸಿ.', settingsTitle:'ಸೆಟ್ಟಿಂಗ್‌ಗಳು', settingsSub:'ಥೀಮ್, ಭಾಷೆ ಮತ್ತು ಡೆಮೋ ನಿಯಂತ್ರಣಗಳು.', helpTitle:'ಸಹಾಯ ಮತ್ತು ಸುರಕ್ಷತೆ', helpSub:'MailTrace ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಬಳಸುವ ವಿಧಾನ ಮತ್ತು ಅದರ ಮಿತಿಗಳು.',
    upload:'EML ಅಪ್‌ಲೋಡ್', analyze:'ವಿಶ್ಲೇಷಿಸಿ', tryPhish:'ಫಿಷಿಂಗ್ ಡೆಮೋ', trySafe:'ಸುರಕ್ಷಿತ ಡೆಮೋ', clear:'ಕ್ಲಿಯರ್', print:'ಪ್ರಿಂಟ್ / PDF', investigationsCard:'ವಿಚಾರಣೆಗಳು', highRisk:'ಹೈ-ರಿಸ್ಕ್ ಪ್ರಕರಣಗಳು', indicators:'ಇಂಡಿಕೇಟರ್‌ಗಳು', engine:'ಎಂಜಿನ್ ಸ್ಥಿತಿ', ready:'READY',
    recentCases:'ಇತ್ತೀಚಿನ ವಿಚಾರಣೆಗಳು', quickStart:'ತ್ವರಿತ ಆರಂಭ', chooseFiles:'.eml ಫೈಲ್‌ಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ', dropHint:'ಇಲ್ಲಿ ಹಾಕಿ ಅಥವಾ ಬ್ರೌಸ್ ಮಾಡಿ. ಪ್ರತಿ ಫೈಲ್ ಗರಿಷ್ಠ 5 MB.', singleFile:'ಒಂದು ಇಮೇಲ್', multiFile:'ಹಲವು ಇಮೇಲ್‌ಗಳು', batchHint:'ಕ್ಯಾಂಪೇನ್ ಸಂಬಂಧಗಳನ್ನು ನೋಡಲು 2+ ಇಮೇಲ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.', classification:'ವರ್ಗೀಕರಣ', risk:'ರಿಸ್ಕ್ ಸ್ಕೋರ್', reasons:'ಏಕೆ ಫ್ಲ್ಯಾಗ್ ಆಯಿತು', evidence:'ಸಾಕ್ಷ್ಯ', authentication:'ದೃಢೀಕರಣ', timeline:'ಟೈಮ್‌ಲೈನ್', recommended:'ಶಿಫಾರಸು', noCases:'ಇನ್ನೂ ಯಾವುದೇ ವಿಚಾರಣೆ ಇಲ್ಲ.', noCurrent:'ಮೊದಲು ಒಂದು ಪ್ರಕರಣ ತೆರೆಯಿರಿ.', noIndicators:'ಇಂಡಿಕೇಟರ್‌ಗಳಿಲ್ಲ.', search:'ಪ್ರಕರಣಗಳನ್ನು ಹುಡುಕಿ…', theme:'ಥೀಮ್', dark:'ಡಾರ್ಕ್', light:'ಲೈಟ್', language:'ಭಾಷೆ', demoMode:'ಡೆಮೋ ಮೋಡ್', localFirst:'ಲೋಕಲ್-ಫಸ್ಟ್ ಪ್ರೋಟೋಟೈಪ್', security:'ಸುರಕ್ಷತಾ ಸ್ಥಿತಿ', attachmentsNever:'ಅಟ್ಯಾಚ್‌ಮೆಂಟ್‌ಗಳನ್ನು execute ಮಾಡುವುದಿಲ್ಲ.', urlsNever:'URL ಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತೆರೆಯುವುದಿಲ್ಲ.', geoNote:'IP ಜಿಯೊಲೊಕೇಶನ್ ಅಂದಾಜು ಮಾತ್ರ; ಇದು ವ್ಯಕ್ತಿಯ ನಿಖರ ಸ್ಥಳವಲ್ಲ.', reportDisclaimer:'ರಕ್ಷಣಾತ್ಮಕ ಪ್ರೋಟೋಟೈಪ್. ಡೆಮೋ/ಫಾಲ್ಬ್ಯಾಕ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ಸ್ಪಷ್ಟವಾಗಿ ಲೇಬಲ್ ಮಾಡಲಾಗಿದೆ.', correlationFinding:'ಹಂಚಿಕೊಂಡ ಇನ್‌ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಸಾಧ್ಯವಾದ ಕ್ಯಾಂಪೇನ್ ಅನ್ನು ಸೂಚಿಸಬಹುದು; ಒಂದೇ ಮಾಲೀಕತ್ವದ ಸಾಕ್ಷ್ಯವಲ್ಲ.', analyzeComplete:'ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ', notes:'ವಿಶ್ಲೇಷಕ ಟಿಪ್ಪಣಿಗಳು', save:'ಟಿಪ್ಪಣಿಗಳನ್ನು ಉಳಿಸಿ', status:'ಸ್ಥಿತಿ', severity:'ತೀವ್ರತೆ', safe:'ಸುರಕ್ಷಿತ', low:'ಕಡಿಮೆ', medium:'ಮಧ್ಯಮ', high:'ಹೆಚ್ಚು', critical:'ಕ್ರಿಟಿಕಲ್', uploadError:'5 MB ವರೆಗೆ .eml ಫೈಲ್‌ಗಳು ಮಾತ್ರ ಬೆಂಬಲಿತ.'
  }
};

const state = {
  view: 'dashboard',
  current: null,
  tab: 'overview',
  selectedFiles: [],
  theme: localStorage.getItem(CONFIG.themeKey) || 'dark',
  lang: localStorage.getItem(CONFIG.langKey) || 'en',
  query: '',
  toast: null
};

let cases = loadCases();

function t(k){ return I18N[state.lang]?.[k] || I18N.en[k] || k; }
function esc(s=''){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function uid(){ return Math.random().toString(36).slice(2,8).toUpperCase(); }
function caseId(){ return `MT-${new Date().toISOString().slice(0,10).replaceAll('-','')}-${uid()}`; }
function now(){ return new Date().toISOString(); }
function saveCases(){ localStorage.setItem(CONFIG.casesKey, JSON.stringify(cases.slice(0,100))); }
function loadCases(){ try { return JSON.parse(localStorage.getItem(CONFIG.casesKey) || '[]'); } catch { return []; } }
function saveCurrent(c){ const idx = cases.findIndex(x=>x.caseId===c.caseId); if(idx>=0) cases[idx]=c; else cases.unshift(c); saveCases(); state.current=c; }
function toast(msg){ const el=$('#toast'); if(!el) return; el.textContent=msg; el.classList.remove('hidden'); clearTimeout(state.toast); state.toast=setTimeout(()=>el.classList.add('hidden'),3000); }
function formatDate(x){ return x ? new Date(x).toLocaleString() : '—'; }
function badge(level){ const cls = level==='SAFE'?'green':level==='LOW'||level==='MEDIUM'?'amber':'red'; return `<span class="badge ${cls}">${esc(level)}</span>`; }
function hashText(text){ let h=2166136261; for(let i=0;i<text.length;i++){h^=text.charCodeAt(i); h=Math.imul(h,16777619)} return ('00000000'+(h>>>0).toString(16)).slice(-8); }
async function sha256(text){ try { const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)); return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join(''); } catch { return hashText(text); } }

function parseHeaders(head){
  const headers={}; let current='';
  head.split(/\r?\n/).forEach(line=>{
    if(/^\s/.test(line)&&current){ headers[current]+=' '+line.trim(); return; }
    const i=line.indexOf(':'); if(i>0){ current=line.slice(0,i).trim().toLowerCase(); headers[current]=line.slice(i+1).trim(); }
  });
  return headers;
}
function statusFromAuth(ar,k){
  const m=(ar||'').match(new RegExp(k+'\\s*=\\s*(pass|fail|neutral|none|softfail|temperror|permerror)','i'));
  if(!m) return 'UNKNOWN'; const v=m[1].toLowerCase(); if(v==='pass') return 'PASS'; if(['fail','softfail','permerror'].includes(v)) return 'FAIL'; if(['neutral','temperror'].includes(v)) return 'NEUTRAL'; return 'NONE';
}
function isPrivateIp(ip){ const p=ip.split('.').map(Number); return p[0]===10 || (p[0]===172&&p[1]>=16&&p[1]<=31) || (p[0]===192&&p[1]===168) || p[0]===127; }
function extractEmails(raw){ return [...new Set([...raw.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map(m=>m[0]))]; }
function extractIps(raw){ return [...new Set([...raw.matchAll(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g)].map(m=>m[0]).filter(x=>x.split('.').every(n=>+n<=255)))]; }
function extractUrls(body){ return [...new Set([...body.matchAll(/https?:\/\/[^\s<>"')\]]+/gi)].map(m=>m[0].replace(/[.,]+$/,'')))]; }
function extractDomains(emails,urls){
  const ds=[]; emails.forEach(e=>ds.push(e.split('@')[1])); urls.forEach(u=>{try{ds.push(new URL(u).hostname)}catch{}}); return [...new Set(ds.filter(Boolean))];
}
function parseAttachments(raw){
  const a=[]; for(const m of raw.matchAll(/\[Attachment:\s*([^|\]]+)\|\s*([^|\]]+)\|\s*([^\]]+)\]/gi)) a.push({filename:m[1].trim(),contentType:m[2].trim(),sizeText:m[3].trim()}); return a;
}
function buildGraph(sender,ips,urls,domains,attachments,caseLabel){
  const nodes=[{id:'email',label:sender||caseLabel||'Email',type:'email'}],edges=[];
  ips.slice(0,5).forEach((v,i)=>{nodes.push({id:'ip'+i,label:v,type:'ip'});edges.push({source:'email',target:'ip'+i,label:'observed in'})});
  urls.slice(0,5).forEach((v,i)=>{nodes.push({id:'url'+i,label:v,type:'url'});edges.push({source:'email',target:'url'+i,label:'contains'})});
  domains.slice(0,5).forEach((v,i)=>{nodes.push({id:'dom'+i,label:v,type:'domain'});edges.push({source:'email',target:'dom'+i,label:'references'})});
  attachments.slice(0,5).forEach((v,i)=>{nodes.push({id:'att'+i,label:v.filename,type:'attachment'});edges.push({source:'email',target:'att'+i,label:'attached'})});
  return {nodes,edges};
}

async function analyzeEmail(raw, filename, source='upload', demo=false){
  const sections=raw.split(/\r?\n\r?\n/); const headers=parseHeaders(sections.shift()||''); const body=sections.join('\n\n');
  const emails=extractEmails(raw); const ips=extractIps(raw); const urls=extractUrls(body); const domains=extractDomains(emails,urls); const attachments=parseAttachments(raw);
  const sender=(headers.from||'').match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0]||'';
  const reply=(headers['reply-to']||'').match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0]||'';
  const ar=headers['authentication-results']||'';
  const auth={spf:statusFromAuth(ar,'spf'),dkim:statusFromAuth(ar,'dkim'),dmarc:statusFromAuth(ar,'dmarc'),raw:ar};
  let score=0,reasons=[];
  const add=(n,r)=>{score+=n;reasons.push(r)};
  if(sender&&reply&&sender.toLowerCase()!==reply.toLowerCase()) add(24,'Reply-To address differs from the sender identity');
  if(sender&&reply&&sender.split('@')[1].toLowerCase()!==reply.split('@')[1].toLowerCase()) add(12,'Sender and Reply-To domains do not match');
  if(urls.length) add(Math.min(15,urls.length*6),`${urls.length} URL${urls.length>1?'s':''} found in the message body`);
  if(/\b(urgent|immediately|within \d+ hours?|suspend(?:ed)?|verify (?:your )?(?:password|account)|permanent account closure|action required|click now|failure to|verify now)\b/i.test(body)) add(18,'Urgency-based social-engineering language detected');
  if(auth.spf==='FAIL') add(10,'SPF authentication failed'); if(auth.dkim==='FAIL') add(8,'DKIM authentication failed'); if(auth.dmarc==='FAIL') add(10,'DMARC authentication/alignment failed');
  const externalIps=ips.filter(ip=>!isPrivateIp(ip)); if(externalIps.length) add(Math.min(8,externalIps.length*4),`${externalIps.length} public IP indicator${externalIps.length>1?'s':''} extracted`);
  if(attachments.length) add(Math.min(10,attachments.length*5),`${attachments.length} attachment${attachments.length>1?'s':''} present for investigation`);
  const suspiciousDomain=/micros0ft|secure-|login|verify|alert|account|support-/i; if(domains.some(d=>suspiciousDomain.test(d))) add(14,'Domain naming shows possible impersonation or credential-harvesting characteristics');
  if(/password|credential|sign in|login|verify/i.test(body)) add(7,'Credential or sign-in language detected');
  score=Math.min(100,Math.round(score));
  const riskLevel=score>=80?'CRITICAL':score>=60?'HIGH':score>=35?'MEDIUM':score>=15?'LOW':'SAFE';
  const classification=score>=35?'Phishing / Suspicious Email':'Benign / Low Risk';
  const sha=await sha256(raw);
  const indicatorRisk = score>=60?'suspicious':score>=35?'review':'low';
  const indicators=[
    ...emails.slice(0,10).map((v,i)=>({id:'e'+i,type:'email',value:v,risk:'unknown'})),
    ...ips.slice(0,10).map((v,i)=>({id:'i'+i,type:'ip',value:v,risk:indicatorRisk})),
    ...urls.slice(0,10).map((v,i)=>({id:'u'+i,type:'url',value:v,risk:indicatorRisk})),
    ...domains.slice(0,10).map((v,i)=>({id:'d'+i,type:'domain',value:v,risk:suspiciousDomain.test(v)?'suspicious':'unknown'})),
    ...attachments.map((v,i)=>({id:'a'+i,type:'attachment',value:v.filename,risk:'review',details:`${v.contentType} · ${v.sizeText}`}))
  ];
  const loc=externalIps.slice(0,5).map((ip,i)=>({ip,country: demo || ip.startsWith('203.0.113.') || ip.startsWith('198.51.100.') ? (i===0?'United States':'India'):'Unknown',city: demo ? (i===0?'Demo city':'Bengaluru') : 'Provider lookup required',isp:demo?'Demo / fallback intelligence':'External provider required',asn:demo?'AS-DEMO':'—',organization:demo?'Demo network':'—',latitude:demo?(i===0?38:12.97):null,longitude:demo?(i===0?-97:77.59):null,risk:score,source:demo?'demo':'not_enriched'}));
  const timeline=[{time:now(),label:'Email ingested',detail:'Message accepted as untrusted input.'},{time:now(),label:'Header/body parsing completed',detail:`${ips.length} IPs, ${urls.length} URLs, ${domains.length} domains and ${attachments.length} attachments extracted.`},{time:now(),label:'Threat assessment completed',detail:`Explainable local scoring produced ${score}/100.`}];
  return {caseId:caseId(),analyzedAt:now(),filename,source,demo,sender,recipient:headers.to||'',replyTo:headers['reply-to']||'',subject:headers.subject||'',date:headers.date||'',messageId:headers['message-id']||'',returnPath:headers['return-path']||'',received:(headers.received||'').split(/\r?\n/).filter(Boolean),bodyPreview:body.replace(/\s+/g,' ').trim().slice(0,1000),attachmentCount:attachments.length,attachments,ips:[...new Set(ips)],urls:[...new Set(urls)],domains,emails:[...new Set(emails)],indicators,auth,score,classification,riskLevel,reasons,recommendedAction:score>=60?'Quarantine the message, preserve original headers, investigate linked infrastructure and check for related messages.':score>=35?'Review extracted indicators, validate the sender through a trusted channel and check for related cases.':'No immediate action based on the prototype score; continue normal monitoring.',notes:[],findings:[],geolocation:loc,intelligence:{},graph:buildGraph(sender,ips,urls,domains,attachments,filename),timeline,sha256:sha,ai:{model:'Local hybrid heuristic / NLP-style signals',probability:Math.min(0.99,Math.max(0.01,score/100)),note:'Prototype AI layer combines language-pattern signals with deterministic email-forensic evidence; it is not a certified ML model.'}};
}

function correlatedClusters(){
  const map=new Map();
  cases.forEach(c=>{
    [...c.ips.map(v=>`IP:${v}`),...c.domains.map(v=>`DOMAIN:${v}`),...c.urls.map(v=>`URL:${v}`)].forEach(k=>{ if(!map.has(k))map.set(k,[]); map.get(k).push(c); });
  });
  return [...map.entries()].filter(([,arr])=>arr.length>1).map(([indicator,arr])=>({indicator,cases:[...new Map(arr.map(c=>[c.caseId,c])).values()]}));
}
function titleForView(){
  const map={dashboard:['dashboardTitle','dashboardSub'],analysis:['analyzeTitle','analyzeSub'],cases:['investigationsTitle','investigationsSub'],case:['investigationsTitle','investigationsSub'],correlation:['correlationTitle','correlationSub'],intel:['intelTitle','intelSub'],reports:['reportsTitle','reportsSub'],settings:['settingsTitle','settingsSub'],help:['helpTitle','helpSub']}; return map[state.view]||map.dashboard;
}
function setHeader(){const [a,b]=titleForView(); $('#pageTitle').textContent=t(a); $('#pageSub').textContent=t(b);}

function shell(){
  document.documentElement.dataset.theme=state.theme;
  document.documentElement.lang=state.lang;
  $('#app').innerHTML=`<div class="shell"><aside class="sidebar" id="sidebar"><div class="brand"><div class="logo">⌁</div><div><b>MAILTRACE</b><small>SIH26106 · CYBER FORENSICS</small></div><button class="nav-close" id="navClose" aria-label="Close navigation">×</button></div><nav id="nav">${[['dashboard','▦','dashboard'],['analysis','◈','analyze'],['cases','◫','investigations'],['correlation','⌘','correlation'],['intel','◎','intel'],['reports','▤','reports'],['settings','⚙','settings'],['help','?','help']].map(([v,ic,k])=>`<a data-view="${v}" class="${state.view===v?'active':''}"><i>${ic}</i><span>${esc(t(k))}</span></a>`).join('')}</nav><div class="side-foot"><span class="live-dot"></span> ${t('localFirst')}<br><small>Defensive demo · safe handling</small></div></aside><button class="nav-backdrop" id="navBackdrop" aria-label="Close navigation"></button><main class="main"><header class="top"><div><div class="eyebrow">SMART INDIA HACKATHON 2026 · SIH26106</div><h1 id="pageTitle"></h1><p id="pageSub"></p></div><div class="top-actions"><button class="btn ghost mobile-nav-btn" id="mobileNavBtn" aria-label="Open navigation" aria-expanded="false">☰ <span>Menu</span></button><button class="btn ghost" id="themeBtn">${state.theme==='dark'?'☀':'☾'}</button><select class="select" id="langSelect" aria-label="language">${Object.entries(CONFIG.languages).map(([k,n])=>`<option value="${k}" ${k===state.lang?'selected':''}>${n}</option>`).join('')}</select><button class="btn" id="trySafe">${t('trySafe')}</button><button class="btn primary" id="tryPhish">${t('tryPhish')}</button></div></header><section id="content"></section></main></div><div id="toast" class="toast hidden"></div>`;
  bindShell(); setHeader(); renderView();
}
function bindShell(){
  const closeNav=()=>{document.body.classList.remove('nav-open');$('#mobileNavBtn').setAttribute('aria-expanded','false');};
  $('#nav').onclick=e=>{const a=e.target.closest('a');if(!a)return;state.view=a.dataset.view;state.tab='overview';closeNav();renderView();};
  $('#mobileNavBtn').onclick=()=>{const open=document.body.classList.toggle('nav-open');$('#mobileNavBtn').setAttribute('aria-expanded',String(open));};
  $('#navClose').onclick=closeNav; $('#navBackdrop').onclick=closeNav;
  $('#themeBtn').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';localStorage.setItem(CONFIG.themeKey,state.theme);shell();};
  $('#langSelect').onchange=e=>{state.lang=e.target.value;localStorage.setItem(CONFIG.langKey,state.lang);shell();};
  $('#tryPhish').onclick=()=>runDemo(false); $('#trySafe').onclick=()=>runDemo(true);
}

function cardStats(){
  const total=cases.length, high=cases.filter(c=>c.score>=60).length, indicators=cases.reduce((n,c)=>n+c.indicators.length,0), campaigns=correlatedClusters().length;
  return `<div class="stats"><div class="card stat"><div class="label">${t('investigationsCard')}</div><div class="value cyan">${total}</div><div class="meta">Browser-persisted cases</div></div><div class="card stat"><div class="label">${t('highRisk')}</div><div class="value red">${high}</div><div class="meta">Score ≥ 60</div></div><div class="card stat"><div class="label">${t('indicators')}</div><div class="value amber">${indicators}</div><div class="meta">IPs · URLs · domains · files</div></div><div class="card stat"><div class="label">Campaign links</div><div class="value green">${campaigns}</div><div class="meta">Shared indicators</div></div></div>`;
}
function dashboard(){
  const recent=cases.slice(0,6); setHeader(); $('#content').innerHTML=`${cardStats()}<div class="dash-grid"><div class="card"><div class="section-head"><div><b>${t('quickStart')}</b><span>SAFE DEMO WORKFLOW</span></div></div><div class="drop big-drop" id="quickDrop"><div class="drop-icon">⇧</div><b>${t('chooseFiles')}</b><p>${t('dropHint')}</p><label class="file-btn">${t('upload')}<input id="quickFiles" type="file" accept=".eml,message/rfc822" multiple></label><div class="demo-links"><button id="quickPhish">${t('tryPhish')}</button><button id="quickSafe">${t('trySafe')}</button></div></div></div><div class="card"><div class="section-head"><b>Threat posture</b><span>LOCAL ANALYSIS</span></div><div class="bars">${[['Critical',cases.filter(c=>c.riskLevel==='CRITICAL').length],['High',cases.filter(c=>c.riskLevel==='HIGH').length],['Medium',cases.filter(c=>c.riskLevel==='MEDIUM').length],['Safe',cases.filter(c=>c.riskLevel==='SAFE').length]].map(([n,v])=>`<div class="barrow"><span>${n}</span><div><i style="width:${Math.min(100,v*12+4)}%"></i></div><b>${v}</b></div>`).join('')}</div><div class="notice">${t('geoNote')}</div></div></div><div class="card section"><div class="section-head"><b>${t('recentCases')}</b><button class="btn" id="allCases">View all</button></div>${caseTableMarkup(recent)}</div>`;
  $('#quickFiles').onchange=e=>handleFiles([...e.target.files]); $('#quickPhish').onclick=()=>runDemo(false); $('#quickSafe').onclick=()=>runDemo(true); $('#allCases').onclick=()=>{state.view='cases';renderView();}; bindDropZone($('#quickDrop'));
}

function caseTableMarkup(list){if(!list.length)return `<div class="empty">${t('noCases')}</div>`;return `<div class="table-wrap"><table class="table"><thead><tr><th>CASE</th><th>SUBJECT</th><th>RISK</th><th>INDICATORS</th><th>ANALYZED</th></tr></thead><tbody>${list.map(c=>`<tr class="case-row" data-id="${esc(c.caseId)}"><td><b>${esc(c.caseId)}</b></td><td>${esc(c.subject||'Untitled')}</td><td>${badge(c.riskLevel)} <span class="score-mini">${c.score}</span></td><td>${c.indicators.length}</td><td>${esc(formatDate(c.analyzedAt))}</td></tr>`).join('')}</tbody></table></div>`}
function investigations(){ setHeader(); const q=state.query.toLowerCase(); const list=cases.filter(c=>`${c.caseId} ${c.subject} ${c.sender} ${c.classification}`.toLowerCase().includes(q)); $('#content').innerHTML=`<div class="card"><div class="section-head"><div><b>Case register</b><span>${list.length} / ${cases.length}</span></div><input class="search" id="caseSearch" value="${esc(state.query)}" placeholder="${t('search')}"></div>${caseTableMarkup(list)}</div>`; $('#caseSearch').oninput=e=>{state.query=e.target.value;investigations();}; $$('.case-row').forEach(r=>r.onclick=()=>{state.current=cases.find(c=>c.caseId===r.dataset.id);state.view='case';renderView();}); }

function analysisView(){
  setHeader(); if(!state.current){ $('#content').innerHTML=`<div class="card"><div class="section-head"><div><b>${t('chooseFiles')}</b><span>${t('batchHint')}</span></div></div><div class="drop big-drop" id="analysisDrop"><div class="drop-icon">⇧</div><b>${t('upload')}</b><p>${t('dropHint')}</p><label class="file-btn">${t('chooseFiles')}<input id="analysisFiles" type="file" accept=".eml,message/rfc822" multiple></label><div class="demo-links"><button id="analysisPhish">${t('tryPhish')}</button><button id="analysisSafe">${t('trySafe')}</button><button id="analysisCampaign">Load campaign demo set</button></div></div></div>`; $('#analysisFiles').onchange=e=>handleFiles([...e.target.files]); $('#analysisPhish').onclick=()=>runDemo(false); $('#analysisSafe').onclick=()=>runDemo(true); $('#analysisCampaign').onclick=()=>loadCampaignDemos(); bindDropZone($('#analysisDrop')); return; }
  const c=state.current; const deg=Math.max(2,c.score)*3.6;
  $('#content').innerHTML=`<div class="card hero-case"><div><div class="eyebrow">CASE ${esc(c.caseId)}</div><h2>${esc(c.subject||'Untitled investigation')}</h2><p>${esc(c.sender||'Unknown sender')} → ${esc(c.recipient||'Unknown recipient')} · ${formatDate(c.analyzedAt)}</p></div><div class="hero-score" style="--deg:${deg}deg"><span>${c.score}</span><small>/100</small></div></div><div class="analysis-grid"><div><div class="card box"><div class="section-head tight"><b>${t('classification')}</b><span>${t('severity')}</span></div><div class="classification"><div>${badge(c.riskLevel)}</div><strong>${esc(c.classification)}</strong><div class="ai-chip">AI probability ${(c.ai.probability*100).toFixed(0)}%</div></div><div class="reasons">${c.reasons.map(r=>`<div class="reason">● ${esc(r)}</div>`).join('')||'<div class="reason">No strong indicators.</div>'}</div></div><div class="card box"><div class="section-head tight"><b>${t('authentication')}</b><span>SPF / DKIM / DMARC</span></div><div class="auth-grid">${[['SPF',c.auth.spf],['DKIM',c.auth.dkim],['DMARC',c.auth.dmarc]].map(([n,v])=>`<div class="auth ${v==='PASS'?'pass':v==='FAIL'?'fail':''}"><b>${n}</b><span>${v}</span></div>`).join('')}</div></div><div class="card box"><div class="section-head tight"><b>${t('evidence')}</b><span>${c.indicators.length}</span></div><div class="pills">${c.indicators.map(i=>`<span class="pill"><b>${esc(i.type)}</b> ${esc(i.value)}</span>`).join('')||`<span>${t('noIndicators')}</span>`}</div></div></div><div><div class="card box"><div class="section-head tight"><b>Investigation actions</b><span>CASE CONTROL</span></div><div class="action-grid"><button class="action" id="openGraph">⌘<span>Threat Graph</span></button><button class="action" id="openGeo">◎<span>GeoLocation</span></button><button class="action" id="openIntel">◉<span>Threat Intel</span></button><button class="action" id="openReport">▤<span>Forensic Report</span></button></div></div><div class="card box"><div class="section-head tight"><b>${t('timeline')}</b><span>EVENTS</span></div><div class="timeline">${c.timeline.map(e=>`<div class="event"><i></i><div><b>${esc(e.label)}</b><span>${esc(e.detail)} · ${new Date(e.time).toLocaleTimeString()}</span></div></div>`).join('')}</div></div><div class="card box notes"><div class="section-head tight"><b>${t('notes')}</b><span>PERSISTED LOCALLY</span></div><textarea id="notes">${esc(c.notes.join('\n'))}</textarea><button class="btn primary" id="saveNotes">${t('save')}</button></div></div></div>`;
  $('#openGraph').onclick=()=>{state.view='graph';renderView()};$('#openGeo').onclick=()=>{state.view='geo';renderView()};$('#openIntel').onclick=()=>{state.view='intel';renderView()};$('#openReport').onclick=()=>{state.view='reports';renderView()};$('#saveNotes').onclick=()=>{c.notes=$('#notes').value.split('\n').map(x=>x.trim()).filter(Boolean);c.timeline.push({time:now(),label:'Analyst notes updated',detail:`${c.notes.length} note line(s) saved.`});saveCurrent(c);toast('Notes saved');};
}

function graphView(){ setHeader(); if(!state.current){$('#content').innerHTML=`<div class="card empty">${t('noCurrent')}</div>`;return;} const c=state.current; const nodes=c.graph.nodes, edges=c.graph.edges; const pos={email:{x:50,y:50}}, others=nodes.filter(n=>n.id!=='email'); others.forEach((n,i)=>{const a=(Math.PI*2*i/Math.max(1,others.length))-.5;pos[n.id]={x:50+34*Math.cos(a),y:50+34*Math.sin(a)}}); $('#content').innerHTML=`<div class="card graph-card"><div class="section-head"><div><b>Indicator relationship graph</b><span>${nodes.length} nodes · ${edges.length} edges</span></div><span>${esc(c.caseId)}</span></div><div class="graphbox"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#456171"/></marker></defs>${edges.map(e=>`<line x1="${pos[e.source].x}" y1="${pos[e.source].y}" x2="${pos[e.target].x}" y2="${pos[e.target].y}" stroke="#2a4654" stroke-width=".35" marker-end="url(#arrow)"/>`).join('')}${nodes.map(n=>{const color=n.type==='email'?'#35d9e7':n.type==='ip'?'#ff6275':n.type==='url'?'#f3bc58':n.type==='domain'?'#7aaeff':'#51d6a5';return `<g class="node" data-node="${n.id}"><circle cx="${pos[n.id].x}" cy="${pos[n.id].y}" r="${n.id==='email'?5:3.8}" fill="${color}" stroke="#eafcff" stroke-width=".35"/><text x="${pos[n.id].x}" y="${pos[n.id].y+7}" text-anchor="middle" fill="#bfd1d8" font-size="2.6">${esc(n.label).slice(0,24)}</text></g>`}).join('')}</svg></div></div><div class="card box"><div class="label">Correlation note</div><p class="muted">${t('correlationFinding')}</p></div>`; $$('.node').forEach(n=>n.onclick=()=>{const z=nodes.find(x=>x.id===n.dataset.node);toast(`${z.type.toUpperCase()}: ${z.label}`)}); }

function geoView(){ setHeader(); if(!state.current){$('#content').innerHTML=`<div class="card empty">${t('noCurrent')}</div>`;return;} const c=state.current; $('#content').innerHTML=`<div class="card"><div class="section-head"><div><b>Approximate IP geolocation</b><span>${c.demo?'DEMO / FALLBACK INTELLIGENCE':'PROVIDER REQUIRED'}</span></div></div><div class="mapbox"><div class="mapgrid"></div><div class="world"></div>${c.geolocation.filter(g=>g.latitude!==null).map((g,i)=>`<div class="marker" style="left:${Math.max(8,Math.min(92,(g.longitude+180)/360*100))}%;top:${Math.max(8,Math.min(86,(90-g.latitude)/180*100))}%" title="${esc(g.ip)}"></div>`).join('')}<div class="map-label">⚠ ${t('geoNote')}</div></div></div><div class="grid three section">${c.geolocation.map(g=>`<div class="card box"><div class="label">IP INDICATOR</div><h3>${esc(g.ip)}</h3><div class="kv"><div>Country</div><div>${esc(g.country)}</div><div>City</div><div>${esc(g.city)}</div><div>ISP</div><div>${esc(g.isp)}</div><div>ASN</div><div>${esc(g.asn)}</div><div>Source</div><div>${esc(g.source)}</div></div></div>`).join('')||`<div class="card empty">No external IPs were extracted.</div>`}</div>`; }

function intelView(){ setHeader(); if(!state.current){$('#content').innerHTML=`<div class="card empty">${t('noCurrent')}</div>`;return;} const c=state.current; const block=(name,arr)=>`<div class="card box"><div class="label">${name}</div><div class="pills mt">${arr.map(v=>`<span class="pill">${esc(v)}</span>`).join('')||'<span class="muted">None</span>'}</div><div class="provider">Provider: <span class="badge blue">${c.demo?'DEMO / FALLBACK':'NOT ENRICHED'}</span></div></div>`; $('#content').innerHTML=`<div class="grid three">${block('IP',c.ips)}${block('DOMAIN',c.domains)}${block('URL',c.urls)}</div><div class="card box section"><div class="label">INTELLIGENCE BOUNDARY</div><p class="muted">Live third-party intelligence can be added behind a backend service boundary later. This prototype never fabricates live reputation and never exposes provider secrets to the browser.</p></div>`; }

function correlationView(){ setHeader(); const clusters=correlatedClusters(); const cross=cases.length>1?`<div class="card box"><div class="section-head tight"><b>Campaign clusters</b><span>SHARED INDICATORS</span></div>${clusters.map(cl=>`<div class="cluster"><div><b>${esc(cl.indicator)}</b><span>${cl.cases.length} related cases</span></div><div class="cluster-cases">${cl.cases.map(c=>`<button class="pill link" data-id="${esc(c.caseId)}">${esc(c.caseId)}</button>`).join('')}</div></div>`).join('')||'<div class="empty">No shared infrastructure across cases yet. Upload the 3 campaign demos to see this.</div>'}</div>`:'';
  $('#content').innerHTML=`<div class="grid two"><div class="card box"><div class="label">HOW CORRELATION WORKS</div><div class="flow"><span>Email 1</span><i>→</i><span>IP / Domain / URL</span><i>←</i><span>Email 2</span></div><p class="muted">MailTrace compares extracted indicators across stored cases. Shared infrastructure creates a lead for investigation.</p></div><div class="card box"><div class="label">CURRENT CASE SET</div><div class="value cyan">${cases.length}</div><p class="muted">${correlatedClusters().length} shared-indicator cluster(s)</p></div></div>${cross}<div class="card box section"><div class="label">ACTIVE CASE</div><p>${state.current?esc(state.current.caseId):'None selected'}</p></div>`;
  $$('.link').forEach(b=>b.onclick=()=>{state.current=cases.find(c=>c.caseId===b.dataset.id);state.view='case';renderView();});
}

function reports(){ setHeader(); if(!state.current){$('#content').innerHTML=`<div class="card empty">${t('noCurrent')}</div>`;return;} const c=state.current; $('#content').innerHTML=`<div class="report" id="report"><div class="report-head"><div><div class="eyebrow">MAILTRACE · SIH26106</div><h2>Forensic Investigation Report</h2><p>Case ${esc(c.caseId)} · Generated ${formatDate(now())}</p></div><div>${badge(c.riskLevel)} <b class="report-score">${c.score}/100</b></div></div><div class="report-grid"><div class="rbox"><b>Classification</b><span>${esc(c.classification)}</span></div><div class="rbox"><b>Email</b><span>${esc(c.sender)} → ${esc(c.recipient)}</span></div><div class="rbox"><b>Subject</b><span>${esc(c.subject)}</span></div><div class="rbox"><b>Authentication</b><span>SPF ${c.auth.spf} · DKIM ${c.auth.dkim} · DMARC ${c.auth.dmarc}</span></div><div class="rbox"><b>SHA-256 evidence hash</b><span>${esc(c.sha256)}</span></div><div class="rbox"><b>AI layer</b><span>${(c.ai.probability*100).toFixed(0)}% probability · ${esc(c.ai.model)}</span></div></div><h3>Detection reasons</h3><ul>${c.reasons.map(r=>`<li>${esc(r)}</li>`).join('')}</ul><h3>Indicators</h3><div class="report-pills">${c.indicators.map(i=>`<span><b>${esc(i.type)}</b> ${esc(i.value)}</span>`).join('')||'None'}</div><h3>Approximate geolocation</h3><p>${c.geolocation.map(g=>`${esc(g.ip)} — ${esc(g.city)}, ${esc(g.country)} — ${esc(g.isp)} — ${esc(g.source)}`).join('<br>')||'No enrichment available.'}</p><h3>Timeline</h3><ul>${c.timeline.map(e=>`<li>${esc(e.label)} — ${esc(e.detail)}</li>`).join('')}</ul><h3>Notes</h3><p>${esc(c.notes.join(' · ')||'No investigator notes recorded.')}</p><h3>${t('recommended')}</h3><p>${esc(c.recommendedAction)}</p><div class="disclaimer">${t('reportDisclaimer')} ${t('geoNote')}</div></div><div class="report-actions"><button class="btn primary" id="printBtn">${t('print')}</button><button class="btn" id="backCase">Open case</button></div>`; $('#printBtn').onclick=()=>window.print();$('#backCase').onclick=()=>{state.view='case';renderView();}; }

function settings(){ setHeader(); $('#content').innerHTML=`<div class="grid two"><div class="card box"><div class="label">${t('theme')}</div><div class="setting-row"><div><b>Appearance</b><p class="muted">${state.theme==='dark'?t('dark'):t('light')}</p></div><button class="switch ${state.theme==='dark'?'on':''}" id="themeToggle"><span></span></button></div><div class="label mt2">${t('language')}</div><select class="select full" id="langSetting">${Object.entries(CONFIG.languages).map(([k,n])=>`<option value="${k}" ${k===state.lang?'selected':''}>${n}</option>`).join('')}</select></div><div class="card box"><div class="label">${t('demoMode')}</div><h3>${t('localFirst')}</h3><p class="muted">Cases persist in browser localStorage so the demo works without external credentials.</p><div class="pills"><span class="pill">✓ No attachment execution</span><span class="pill">✓ No URL auto-open</span><span class="pill">✓ 5 MB limit</span></div></div></div><div class="card box section"><div class="label">${t('security')}</div><div class="security-grid"><div>🛡 <b>Untrusted input</b><span>Email content is parsed as data only.</span></div><div>🔗 <b>External URLs</b><span>${t('urlsNever')}</span></div><div>📎 <b>Attachments</b><span>${t('attachmentsNever')}</span></div><div>◎ <b>GeoLocation</b><span>${t('geoNote')}</span></div></div></div><div class="card box section"><div class="label">RESET DEMO</div><button class="btn danger" id="resetCases">Clear all local cases</button></div>`; $('#themeToggle').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';localStorage.setItem(CONFIG.themeKey,state.theme);shell();}; $('#langSetting').onchange=e=>{state.lang=e.target.value;localStorage.setItem(CONFIG.langKey,state.lang);shell();}; $('#resetCases').onclick=()=>{if(confirm('Clear all locally stored MailTrace cases?')){cases=[];saveCases();state.current=null;state.view='dashboard';renderView();toast('All local cases cleared');}}; }

function help(){ setHeader(); $('#content').innerHTML=`<div class="grid two"><div class="card box"><div class="label">HOW TO PRESENT</div><ol class="steps"><li>Open Dashboard.</li><li>Load the Phishing Demo.</li><li>Show risk score + reasons + SPF/DKIM/DMARC.</li><li>Open Threat Graph and GeoLocation.</li><li>Load the three campaign demos from Analyze to demonstrate correlation.</li><li>Generate the forensic report.</li></ol></div><div class="card box"><div class="label">WHAT MAILTRACE DOES</div><p class="muted">MailTrace is a defensive web prototype for authorized analysts. It accepts .eml evidence, extracts indicators, scores suspicious patterns, organizes a case, compares shared infrastructure and produces a report.</p><p class="muted"><b>Important:</b> IP geolocation is approximate. Correlation is an investigation lead, not proof of attacker identity.</p></div></div><div class="card box section"><div class="label">SUPPORTED INPUT</div><div class="pills"><span class="pill">.eml / RFC-style message</span><span class="pill">Multiple files</span><span class="pill">5 MB per file</span><span class="pill">Demo cases included</span></div></div>`; }

function renderView(){
  document.documentElement.dataset.theme=state.theme; setHeader();
  const fn={dashboard,analysis:analysisView,cases:investigations,case:()=>caseView(),correlation:correlationView,intel:intelView,graph:graphView,geo:geoView,reports,settings,help}[state.view]||dashboard; fn();
  const notes=$('#notes'); if(notes) notes.placeholder='Record observations, escalation actions, or evidence references…';
  $$('#nav a').forEach(a=>a.classList.toggle('active',a.dataset.view===state.view || (state.view==='case'&&a.dataset.view==='cases')));
}

function caseView(){ analysisView(); }

function bindDropZone(el){ if(!el)return; ['dragenter','dragover'].forEach(ev=>el.addEventListener(ev,e=>{e.preventDefault();el.classList.add('dragging')})); ['dragleave','drop'].forEach(ev=>el.addEventListener(ev,e=>{e.preventDefault();el.classList.remove('dragging')})); el.addEventListener('drop',e=>{if(e.dataTransfer?.files?.length)handleFiles([...e.dataTransfer.files])}); }

async function handleFiles(files){
  if(!files.length)return; state.selectedFiles=files;
  const invalid=files.find(f=>!f.name.toLowerCase().endsWith('.eml') || f.size>CONFIG.maxFileBytes); if(invalid){toast(t('uploadError'));return;}
  state.view='analysis'; renderView(); toast(`Reading ${files.length} file(s)…`);
  for(const file of files){ const text=await file.text(); const c=await analyzeEmail(text,file.name,'upload',false); cases.unshift(c); state.current=c; c.timeline.push({time:now(),label:'Case stored',detail:'Investigation persisted to browser localStorage.'}); }
  saveCases();
  if(files.length>1){ toast(`${files.length} investigations created. Correlation updated.`); } else toast(t('analyzeComplete'));
  renderView();
}
async function runDemo(safe=false){ const c=await analyzeEmail(safe?DEMO_SAFE:DEMO_PHISH,safe?'demo-benign.eml':'demo-phishing.eml','demo',true); saveCurrent(c); state.current=c; state.view='analysis'; renderView(); toast(safe?'Safe demo loaded':'Phishing demo loaded'); }
async function loadCampaignDemos(){
  for(const [raw,name] of [[DEMO_PHISH,'demo-campaign-1.eml'],[DEMO_CAMPAIGN_2,'demo-campaign-2.eml'],[DEMO_CAMPAIGN_3,'demo-campaign-3.eml']]){const c=await analyzeEmail(raw,name,'demo',true); saveCurrent(c);} state.current=cases[0]; state.view='correlation'; renderView(); toast('Campaign demo set loaded');
}

// Add a hidden keyboard shortcut: Ctrl+Shift+C loads correlation demo set.
document.addEventListener('keydown',e=>{if(e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==='c'){e.preventDefault();loadCampaignDemos();}});

// Initial shell
shell();

// Global drag/drop on the whole window
window.addEventListener('dragover',e=>{e.preventDefault();});
window.addEventListener('drop',e=>{e.preventDefault(); if(e.dataTransfer?.files?.length)handleFiles([...e.dataTransfer.files]);});
