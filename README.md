# 🛡️ FortiFi – Intelligent Fraud Prevention System for Mobile Banking

**FortiFi** is a multi-layered fraud detection and prevention system designed to protect mobile and internet banking platforms from impersonated registrations, SIM-swaps, device spoofing, and behavioral anomalies. It combines real-time data signals, behavioral biometrics, adaptive cognitive challenges, and machine learning to ensure only legitimate users gain access.

---

## 🚀 Features

- 📱 **SIM & Device Integrity Verification**  
  Detect SIM-swaps, spoofed devices, and mismatched login attempts using telco metadata and device fingerprinting.

- 🧠 **Behavioral Biometrics & Continuous Authentication**  
  Analyze keystroke patterns, swipe gestures, and interaction behavior for passive session monitoring.

- 🧩 **Cognitive Challenge Engine**  
  Serve dynamic puzzles or visual tasks to detect bots and prevent social engineering-based logins.

- 🤖 **AI-Powered Risk Scoring**  
  Use ML models to compute real-time risk scores and trigger appropriate responses.

- 🧑‍💻 **Admin Dashboard**  
  Real-time visualization of user sessions, risk scores, flagged attempts, and behavioral trends.

- 🔐 **Passwordless Adaptive Authentication**  
  Integrates WebAuthn and fallback OTP mechanisms based on contextual session risk.

---

## 🏗️ Project Structure

fortifi/
├── backend/ # FastAPI or Node.js backend APIs
├── ml-engine/ # Machine learning scoring engine + model APIs
├── frontend/ # React-based user-facing app
├── dashboard/ # Admin risk monitoring dashboard
├── database/ # PostgreSQL schema, Redis config
├── deployments/ # Docker Compose, .env samples, CI/CD scripts
├── docs/ # Architecture diagrams, API docs, guides
├── README.md
└── LICENSE


---

## ⚙️ Tech Stack

- **Frontend:** React.js, TailwindCSS, FingerprintJS  
- **Backend:** FastAPI / Node.js, PostgreSQL, Redis  
- **ML Models:** Scikit-learn, SHAP (for explainability)  
- **Authentication:** WebAuthn (FIDO2), Twilio OTP (fallback)  
- **DevOps:** Docker, Docker Compose, Railway / Render for deployment

---

## 🧪 How to Run (Locally)

### 1. Clone the repository
```bash
git clone https://github.com/your-team/fortifi.git
cd fortifi

2. Setup environment variables
Copy and edit .env.sample files in each subproject:
cp .env.sample .env

3. ## 🐳 Docker Setup (Local Development)

1. Copy the `.env.sample` to `.env` and fill in credentials.
2. From the `deployments/` folder, run:
   ```bash
   docker-compose up --build

---

### 🔹 Test Docker Setup (Optional Now)

Once others start adding Dockerfiles in `/backend`, `/ml-engine`, etc., you’ll be ready to test:
```bash
cd deployments
docker-compose up --build


4. Visit in browser
Frontend: http://localhost:3000

Backend API: http://localhost:8000

Dashboard: http://localhost:4000

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

📬 Contact
Got questions or suggestions? Reach out via GitHub Issues or email the team.