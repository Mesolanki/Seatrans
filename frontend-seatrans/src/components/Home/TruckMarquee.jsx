"use client";

import styles from "./TruckMarquee.module.css";

const SPOKES = [
  { x1: 8,   y1: 0,     x2: 4,   y2: 0 },
  { x1: 4,   y1: 6.93,  x2: 2,   y2: 3.46 },
  { x1: -4,  y1: 6.93,  x2: -2,  y2: 3.46 },
  { x1: -8,  y1: 0,     x2: -4,  y2: 0 },
  { x1: -4,  y1: -6.93, x2: -2,  y2: -3.46 },
  { x1: 4,   y1: -6.93, x2: 2,   y2: -3.46 }
];

export default function TruckMarquee() {
  return (
    <div className={styles.truckWrap} aria-hidden="true">
      {/* Parallax speed lines in background */}
      <div className={styles.speedLine1}/>
      <div className={styles.speedLine2}/>
      
      {/* Road */}
      <div className={styles.road}>
        <div className={styles.roadDash}/>
      </div>
      
      <div className={styles.truck}>
        <svg className={styles.truckSvg} viewBox="0 0 310 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="trailerBodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="25%" stopColor="#f1f5f9"/>
              <stop offset="85%" stopColor="#cbd5e1"/>
              <stop offset="100%" stopColor="#94a3b8"/>
            </linearGradient>
            <linearGradient id="cabBodyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e4e8c"/>
              <stop offset="40%" stopColor="#0c2340"/>
              <stop offset="100%" stopColor="#051020"/>
            </linearGradient>
            <linearGradient id="windshieldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e0f2fe"/>
              <stop offset="60%" stopColor="#bae6fd"/>
              <stop offset="100%" stopColor="#7dd3fc"/>
            </linearGradient>
            <linearGradient id="wheelChromeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="45%" stopColor="#cbd5e1"/>
              <stop offset="55%" stopColor="#64748b"/>
              <stop offset="100%" stopColor="#e2e8f0"/>
            </linearGradient>
            <radialGradient id="tireGrad" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#1e293b"/>
              <stop offset="90%" stopColor="#0f172a"/>
              <stop offset="100%" stopColor="#020617"/>
            </radialGradient>
            <linearGradient id="exhaustGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#94a3b8"/>
              <stop offset="50%" stopColor="#ffffff"/>
              <stop offset="100%" stopColor="#475569"/>
            </linearGradient>
            <radialGradient id="smokeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(148, 163, 184, 0.8)"/>
              <stop offset="60%" stopColor="rgba(203, 213, 225, 0.4)"/>
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)"/>
            </radialGradient>
            <linearGradient id="lightBeamGrad" x1="0" y1="0.5" x2="1" y2="0.5">
              <stop offset="0%" stopColor="rgba(255, 245, 190, 0.75)"/>
              <stop offset="30%" stopColor="rgba(255, 245, 190, 0.45)"/>
              <stop offset="100%" stopColor="rgba(255, 245, 190, 0)"/>
            </linearGradient>
            <linearGradient id="tailGlowGrad" x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stopColor="rgba(192, 57, 43, 0.65)"/>
              <stop offset="100%" stopColor="rgba(192, 57, 43, 0)"/>
            </linearGradient>
          </defs>

          {/* Tail light glow */}
          <polygon points="3,18 -25,12 -25,56 3,50" fill="url(#tailGlowGrad)" className={styles.tailLightGlow} />

          {/* TRAILER BODY */}
          <rect x="3" y="12" width="186" height="44" rx="2" fill="url(#trailerBodyGrad)" stroke="#8fa0b0" strokeWidth="1"/>
          <rect x="3" y="12" width="186" height="6"  rx="1" fill="var(--brand-blue)"/>
          <rect x="3" y="50" width="186" height="6"  rx="0" fill="var(--brand-navy)" opacity="0.12"/>
          {/* Panel seams */}
          {[43,83,123,163].map(x=><line key={x} x1={x} y1="18" x2={x} y2="56" stroke="rgba(139,160,176,0.5)" strokeWidth="0.8"/>)}
          {/* Branding */}
          <text x="97" y="36" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--brand-navy)" letterSpacing="3" opacity="0.82">SEATRANS</text>
          <text x="97" y="48" textAnchor="middle" fontSize="6" fontWeight="600" fill="var(--brand-blue)" letterSpacing="2" opacity="0.65">GLOBAL LOGISTICS</text>
          {/* Rear lights */}
          <rect x="4" y="18" width="4" height="8" rx="1" fill="#c0392b" opacity="0.8"/>
          <rect x="4" y="44" width="4" height="6" rx="1" fill="#c0392b" opacity="0.6"/>
          {/* CAB BODY */}
          <path d="M190 16 L190 56 L208 56 L208 16Z" fill="url(#cabBodyGrad)" stroke="#0a1e36" strokeWidth="0.8"/>
          <path d="M208 16 L208 56 L258 56 L258 28 Q256 16 242 16Z" fill="url(#cabBodyGrad)" stroke="#0a1e36" strokeWidth="1"/>
          {/* Windshield */}
          <path d="M210 18 L210 40 L255 40 L255 30 Q252 18 240 18Z" fill="url(#windshieldGrad)" stroke="var(--brand-blue)" strokeWidth="0.8"/>
          {/* Side window */}
          <rect x="191" y="20" width="17" height="14" rx="1" fill="rgba(190,230,255,0.5)" stroke="#1a3a5c" strokeWidth="0.7"/>
          {/* Door line */}
          <line x1="213" y1="18" x2="213" y2="56" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
          <rect x="216" y="36" width="8" height="2" rx="1" fill="rgba(255,255,255,0.28)"/>
          {/* Grille */}
          <rect x="252" y="28" width="7" height="28" rx="0" fill="#94a3b8" opacity="0.9"/>
          {[34,39,44,49].map(y=><rect key={y} x={253} y={y} width="5" height="2" rx="0.5" fill="rgba(255,255,255,0.3)" strokeWidth="0"/>)}
          
          {/* Headlights and Glow Beam */}
          <polygon points="259,20 310,8 310,48 259,29" fill="url(#lightBeamGrad)" className={styles.headlightBeam} />
          <rect x="252" y="20" width="7" height="9" rx="1" fill="rgba(255,245,190,0.85)" stroke="#d4a820" strokeWidth="0.5" className={styles.headlightBulb} />
          
          {/* Bumper */}
          <rect x="251" y="52" width="9" height="5" rx="1" fill="#8fa0b0" stroke="#6b7f8f" strokeWidth="0.5"/>
          {/* Mirror */}
          <line x1="190" y1="24" x2="180" y2="26" stroke="#8fa0b0" strokeWidth="1.2"/>
          <rect x="175" y="23" width="6" height="8" rx="1" fill="#94a3b8" stroke="#6b7f8f" strokeWidth="0.7"/>
          {/* Fuel tanks */}
          <rect x="191" y="53" width="20" height="7" rx="3" fill="#64748b" stroke="#4b5563" strokeWidth="0.8"/>
          <rect x="214" y="53" width="20" height="7" rx="3" fill="#64748b" stroke="#4b5563" strokeWidth="0.8"/>
          {/* Exhaust stacks */}
          <rect x="237" y="3"  width="5" height="16" rx="2" fill="url(#exhaustGrad)" stroke="#1f2937" strokeWidth="0.8"/>
          <rect x="244" y="5"  width="5" height="14" rx="2" fill="url(#exhaustGrad)" stroke="#1f2937" strokeWidth="0.8"/>
          {/* Smoke Puffs */}
          <circle className={styles.smokePuff1} cx="239" cy="1" r="5" fill="url(#smokeGrad)"/>
          <circle className={styles.smokePuff2} cx="246" cy="-1" r="5" fill="url(#smokeGrad)"/>
          <circle className={styles.smokePuff3} cx="239" cy="1" r="5" fill="url(#smokeGrad)"/>
          <circle className={styles.smokePuff4} cx="246" cy="-1" r="5" fill="url(#smokeGrad)"/>
          
          {/* Wheel Dust Particles */}
          <circle className={styles.dustParticle1} cx="30" cy="66" r="4" fill="url(#smokeGrad)"/>
          <circle className={styles.dustParticle2} cx="62" cy="66" r="4" fill="url(#smokeGrad)"/>
          <circle className={styles.dustParticle3} cx="214" cy="66" r="4" fill="url(#smokeGrad)"/>
          <circle className={styles.dustParticle4} cx="244" cy="66" r="4" fill="url(#smokeGrad)"/>

          {/* Steps */}
          <rect x="236" y="56" width="14" height="3" rx="0.5" fill="#546e7a"/>
          <rect x="238" y="59" width="12" height="3" rx="0.5" fill="#455a64"/>
          {/* WHEELS — steer axle 1 */}
          <g className={styles.spinningWheel} style={{ transformOrigin: "244px 66px" }}>
            <circle cx="244" cy="66" r="13" fill="url(#tireGrad)" stroke="#0a1520" strokeWidth="1.2"/>
            <circle cx="244" cy="66" r="8"  fill="url(#wheelChromeGrad)" stroke="#1a2635" strokeWidth="0.8"/>
            <circle cx="244" cy="66" r="3"  fill="var(--brand-navy)"/>
            {SPOKES.map((s, idx) => (
              <line key={idx} x1={244 + s.x1} y1={66 + s.y1} x2={244 + s.x2} y2={66 + s.y2} stroke="#546e7a" strokeWidth="1"/>
            ))}
          </g>
          {/* WHEELS — steer axle 2 (pusher/tag steer) */}
          <g className={styles.spinningWheel} style={{ transformOrigin: "214px 66px" }}>
            <circle cx="214" cy="66" r="13" fill="url(#tireGrad)" stroke="#0a1520" strokeWidth="1.2"/>
            <circle cx="214" cy="66" r="8"  fill="url(#wheelChromeGrad)" stroke="#1a2635" strokeWidth="0.8"/>
            <circle cx="214" cy="66" r="3"  fill="var(--brand-navy)"/>
            {SPOKES.map((s, idx) => (
              <line key={idx} x1={214 + s.x1} y1={66 + s.y1} x2={214 + s.x2} y2={66 + s.y2} stroke="#546e7a" strokeWidth="1"/>
            ))}
          </g>

          <g className={styles.spinningWheel} style={{ transformOrigin: "30px 66px" }}>
            <circle cx="30"  cy="66" r="13" fill="url(#tireGrad)" stroke="#0a1520" strokeWidth="1.2"/>
            <circle cx="30"  cy="66" r="8"  fill="url(#wheelChromeGrad)" stroke="#1a2635" strokeWidth="0.8"/>
            <circle cx="30"  cy="66" r="3"  fill="var(--brand-navy)"/>
            {SPOKES.map((s, idx) => (
              <line key={idx} x1={30 + s.x1} y1={66 + s.y1} x2={30 + s.x2} y2={66 + s.y2} stroke="#546e7a" strokeWidth="1"/>
            ))}
          </g>
          {/* WHEELS — trailer axle 2 */}
          <g className={styles.spinningWheel} style={{ transformOrigin: "62px 66px" }}>
            <circle cx="62" cy="66" r="13" fill="url(#tireGrad)" stroke="#0a1520" strokeWidth="1.2"/>
            <circle cx="62" cy="66" r="8"  fill="url(#wheelChromeGrad)" stroke="#1a2635" strokeWidth="0.8"/>
            <circle cx="62" cy="66" r="3"  fill="var(--brand-navy)"/>
            {SPOKES.map((s, idx) => (
              <line key={idx} x1={62 + s.x1} y1={66 + s.y1} x2={62 + s.x2} y2={66 + s.y2} stroke="#546e7a" strokeWidth="1"/>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
