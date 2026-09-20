import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Project/Projects';
import Skills from './Components/Skill/Skills';
import Intro from './intro/Intro';

function Experience() {
  return <section id="experience" className="experience section-shell">
    <div className="section-heading"><span>EXPERIENCE</span><h2>Building software that has to work.</h2></div>
    <div className="timeline">
      <article><div className="timeline-meta"><b>Mar 2025 — Present</b><span>Mumbai, India</span></div><div><h3>Systems Engineer <em>· TCS (NSE)</em></h3><p>Modernising market infrastructure for post-trade and market-open workflows.</p><ul><li>Migrated Project Hercules’ critical post-trade layer from C to Java for a more maintainable, scalable trading platform.</li><li>Re-architected legacy SMFS flows on FOX and built the Futures &amp; Options Pre-Open system.</li><li>Integrated RMS and COS processing flows and contributed to the SEBI-mandated CAS rollout.</li></ul></div></article>
      <article><div className="timeline-meta"><b>Jan — Jun 2024</b><span>Ahmedabad, India</span></div><div><h3>SDE Intern <em>· Shipmnts</em></h3><p>Collaborated with 30+ engineers on scalable full-stack products using React, Rails, GraphQL, Postgres, and MongoDB.</p><ul><li>Co-built a reusable component library that reduced duplicate frontend logic by about 30%.</li><li>Optimised legacy APIs and queries, cutting API calls by about 15% and search latency by about 5%.</li></ul></div></article>
      <article><div className="timeline-meta"><b>Jun — Nov 2023</b><span>Vadodara, India</span></div><div><h3>Software Engineer <em>· Freelance</em></h3><p>Delivered React/Electron automation and order-management tools that reduced manual entry by about 80% and handling time by about 90%.</p></div></article>
    </div>
  </section>;
}
function Highlights() { return <section className="highlights section-shell"><div className="section-heading"><span>HIGHLIGHTS</span><h2>Curious by default. Competitive by nature.</h2></div><div className="highlight-grid"><div><strong>600+</strong><span>QuickFill active users</span></div><div><strong>3rd</strong><span>National rank at DuHacks</span></div><div><strong>Top 1.32%</strong><span>LeetCode Guardian</span></div><div><strong>8.5</strong><span>B.Tech IT CPI · DDU</span></div></div></section>; }
function App() { return <div className="App"><Navbar /><main><Intro /><Skills /><Experience /><Projects /><Highlights /></main><Footer /></div>; }
export default App;
