# AI Gadget Advisor - 7th Sem Mini Project (Agentic AI System)

An interactive, multi-agent AI Gadget Advisor web application tailored for the **Indian E-Commerce Market** (Amazon.in, Flipkart, Croma, Vijay Sales, Reliance Digital). Recommends gadgets based on user requirements, budget, specifications, ratings, and reviews with live reflection loops, session memory, voice search, and head-to-head battle arena duels.

---

## 🌟 Key Features

1. **Multi-Agent Architecture**:
   - **Product Search Tool Agent**: Filters mock dataset across 6 categories (Smartphones, Laptops, Audio, Smartwatches, Tablets, Monitors).
   - **Price Comparison & Discount Agent**: Audits real-time pricing across 5 top Indian e-commerce stores in INR (₹) with bank offers (HDFC, ICICI, SBI).
   - **Review & Sentiment Analysis Agent**: Calculates sentiment scores (0-100%) and verified buyer pros/cons.
   - **Recommendation Synthesis Engine**: Multi-Criteria Decision Index (MCDM) calculating top picks and match scores.
   - **Reflection & Self-Correction Agent**: Quality audit agent checking budget compliance and generating AI Investment Advisory notes.
   - **Session Memory Agent**: Short-term and persistent LocalStorage query memory.

2. **Dynamic UI & Interactive Tools**:
   - **🎙️ AI Voice & Speech Assistant**: Speech-to-Text voice query input and Text-to-Speech audio recommendation readout.
   - **⚔️ Gadget Battle Arena**: Head-to-head comparison duel with animated victory stat meters.
   - **📈 6-Month Price Trend Chart**: Historical SVG price trend visualizer with a 90-day Price Predictor.
   - **🛒 Same Price Range Alternatives**: Competing budget choices with priority badges (Battery, Performance, Display, Value).
   - **📦 Amazon.in & Flipkart Style Specs**: Detailed specification layout structured by Display, Processor, Camera, Battery, Build, and Warranty.
   - **🛍️ Direct E-Commerce Purchase Links**: Clickable links opening Amazon.in, Flipkart, Croma, Vijay Sales, and Reliance Digital in a new tab.
   - **📄 Academic Project Report Exporter**: One-click printable PDF report generator for project evaluation and submission.
   - **🔬 Agent Prompt & Telemetry Inspector**: View raw system prompts, agent personas, and JSON telemetry output schemas.

---

## 🛠️ Technology Stack

- **Frontend**: React + Vite
- **Styling**: Modern Vanilla CSS Glassmorphism Design System
- **Icons**: Lucide React Icons
- **Effects**: Canvas Confetti

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd ai-gadget-advisor
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
ai-gadget-advisor/
├── src/
│   ├── agents/
│   │   ├── searchTool.js            # Product Search Agent
│   │   ├── priceComparisonTool.js   # Multi-Store Price Agent
│   │   ├── reviewAnalyzer.js        # Sentiment & Review Agent
│   │   ├── recommendationEngine.js  # Synthesis & MCDM Engine
│   │   ├── memoryManager.js         # Short & Long-term Memory
│   │   ├── reflectionAgent.js       # Reflection & Self-Correction Agent
│   │   └── agentOrchestrator.js     # Master Workflow Controller
│   ├── components/
│   │   ├── Navbar.jsx               # Header & Tab Navigation
│   │   ├── WorkflowPipeline.jsx     # Live Agent Pipeline Stepper
│   │   ├── SearchControls.jsx       # Requirement & Budget Controls
│   │   ├── BestRecommendationCard.jsx# Winner Showcase Card with Specs
│   │   ├── SamePriceAlternatives.jsx# Competing Budget Options
│   │   ├── ComparisonTable.jsx      # Side-by-Side Product Matrix
│   │   ├── PriceMatrix.jsx          # Cross-Store Price Breakdown
│   │   ├── ReflectionInspector.jsx  # Reflection Audit Panel
│   │   ├── GadgetBattleArena.jsx    # Head-to-Head Duel Component
│   │   ├── PriceTrendChart.jsx      # 6-Month Price Trend SVG Chart
│   │   ├── VoiceAssistant.jsx       # Speech-to-Text & Text-to-Speech
│   │   ├── AgentPromptInspector.jsx # Telemetry & System Prompts
│   │   ├── ReportExporter.jsx       # Academic PDF Report Exporter
│   │   ├── MemoryHistoryModal.jsx   # Session Memory Inspector
│   │   └── GadgetCard.jsx           # Catalogue Card Component
│   ├── data/
│   │   └── gadgetsData.js           # 30+ Gadgets Database (INR Pricing)
│   ├── utils/
│   │   └── linkUtils.js             # Store Purchase Link Generator
│   ├── App.jsx                      # Main Dashboard Application
│   └── index.css                    # Glassmorphism Design System
└── README.md
```
