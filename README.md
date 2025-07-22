<h1 align="center">🎥 Riverside.fm Clone (React)</h1>

<p align="center">
  A work-in-progress clone of <a href="https://riverside.fm" target="_blank">Riverside.fm</a> built using <strong>React.js</strong> and <strong>CSS</strong>.
</p>

<p align="center">
  <strong>Status:</strong> 🚧 In Development
</p>

<hr>

<h2>📌 Project Overview</h2>

<p>
 This is a frontend clone of Riverside.fm, but it’s not just about replicating its look—it’s about understanding how the platform delivers studio-quality recordings. Riverside achieves this by locally capturing every participant’s audio and video—up to 48 kHz uncompressed WAV and 4K video—directly on their device, then progressively uploading to the cloud as the session progresses, ensuring performance isn't impacted by internet issues. It stores individual tracks per guest (audio and video separate), offering fine-grained control during post-production. This clone explores recreating these functional behaviors in the UI: from the visual cues indicating recording status, to modular component layouts for session management. The aim is to grasp the architectural patterns behind Riverside’s workflow, while practicing React component design and frontend interactions inspired by their high-fidelity user journey.
</p>

<h2>🎯 Key Goals</h2>

<ul>
  <li>✅ Responsive homepage layout</li>
  <li>✅ Reusable dropdown components (like Riverside’s Product/Solutions)</li>
  <li>🔄 Footer CTA section</li>
  <li>🔜 Dynamic routing (using React Router)</li>
  <li>🔜 Scroll animations with Framer Motion</li>
</ul>

<h2>🧰 Tech Stack</h2>

<table>
  <tr>
    <td><strong>Framework</strong></td>
    <td>React.js (Vite or CRA)</td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td>CSS Modules / Tailwind CSS (TBD)</td>
  </tr>
  <tr>
    <td><strong>Icons</strong></td>
    <td>Lucide React</td>
  </tr>
  <tr>
    <td><strong>Animations</strong></td>
    <td>Framer Motion</td>
  </tr>
</table>

<h2>📁 Folder Structure (Planned)</h2>

<pre>
riverside-clone/
├── public/
├── src/
│   ├── assets/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
</pre>

```bash
git clone https://github.com/yourusername/riverside-clone.git
cd riverside-clone
npm install
npm run dev

