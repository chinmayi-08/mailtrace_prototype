# MailTrace — SIH26106 Complete Prototype

**Problem Statement:** SIH26106 — AI-Powered Email Threat Detection, GeoLocation and Forensic Intelligence Platform  
**Theme:** Blockchain & Cybersecurity  
**Category:** Software  
**Team:** Nova Tech  
**Product:** MailTrace

## What is included

This version combines the existing prototype foundation with the upgrades discussed for the SIH demonstration:

- Web-based SOC / cyber-forensics dashboard
- Single and multiple `.eml` upload
- Safe RFC-style email parsing
- Sender / Reply-To / Return-Path / Received / Message-ID extraction
- URL, IP, domain, email and attachment metadata extraction
- SPF / DKIM / DMARC result parsing
- Explainable hybrid risk scoring
- AI-style phishing probability layer (prototype heuristic, explicitly labelled)
- SHA-256 evidence hash using Web Crypto when available
- Approximate IP geolocation visualization with explicit demo/fallback boundaries
- Threat intelligence screens for IP, domains and URLs
- Threat graph
- Cross-case correlation using shared IP/domain/URL indicators
- Campaign demo set for showing correlation to judges
- Investigator notes and evidence timeline
- Case register with search
- Forensic report with Print / Save as PDF
- Dark and light theme
- English / Hindi / Kannada UI language selection
- Help and safety guidance
- Responsive layout for laptop / projector / smaller displays
- Browser localStorage persistence
- Local Node server for a zero-dependency runnable version
- Demo `.eml` files included

## Run locally

### Option A — Node.js (recommended)

Requires Node.js 18+.

```bash
node server.js
```

Open:

`http://localhost:3000`

Windows: double-click `run.bat`.  
Linux/macOS: `./run.sh`

### Option B — Python

If you do not have Node.js:

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Demo flow for judges

1. Open Dashboard.
2. Click **Try Phishing Demo**.
3. Show the risk score, classification, detection reasons and SPF/DKIM/DMARC.
4. Open **Threat Graph**.
5. Open **GeoLocation** and explain that IP geolocation is approximate.
6. Open **Threat Intel** and explain the demo/fallback label.
7. Go to **Analyze Email** and upload the three `demo-campaign-*` files. The cases are stored locally.
8. Open **Correlation** to show shared domain / URL / IP relationships.
9. Open a case and generate the **Forensic Report**.

### Campaign demo shortcut

From any page, press `Ctrl + Shift + C` to load the three campaign demo cases and jump to Correlation.

## Deployment

### Render as a Web Service

This project has a built-in Node HTTP server and no runtime package dependencies.

- Build command: *(leave blank)*
- Start command: `node server.js`
- Environment: Node

Render will use its `PORT` variable automatically.

### Render as a Static Site

You can also deploy the folder as a Static Site with no build step and publish directory `.`. The site is fully client-side. For the easiest route with a custom domain or backend later, the Node Web Service setup above is recommended.

## Important security / scope notes

- Email is treated as **untrusted input**.
- Attachments are **never executed**.
- URLs are **never opened automatically**.
- API/provider secrets are not stored in browser code.
- The prototype does not claim to identify an exact attacker or exact physical location.
- IP geolocation is only an approximate network-location clue.
- Shared infrastructure is an investigation lead, not proof of common ownership.
- The AI layer is a prototype hybrid heuristic/NLP-style score, not a certified ML model. For a production build, replace it with a tested classifier behind a backend API and keep the explanation layer.
- Demo IPs such as `203.0.113.x` and `198.51.100.x` are documentation/test ranges and are not real attacker infrastructure.

## Suggested production architecture

```text
Browser UI (React/Next.js)
        |
        v
Secure Backend API
        |
        +--> Email parser / forensic engine
        +--> ML phishing classifier
        +--> SPF/DKIM/DMARC verification
        +--> DNS / RDAP / GeoIP / reputation providers
        +--> PostgreSQL / Supabase case store
        +--> Report generation
```

The current package intentionally stays dependency-light so the SIH prototype can run reliably during judging.
