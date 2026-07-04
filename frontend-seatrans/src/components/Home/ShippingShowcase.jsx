"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ShippingShowcase.module.css";

export default function ShippingShowcase() {
  // Simulator states
  const [cargoLoaded, setCargoLoaded] = useState(false);
  const [isCruising, setIsCruising] = useState(false);
  const [isStormy, setIsStormy] = useState(false);
  const [lightningFlash, setLightningFlash] = useState(false);

  // Stats values
  const [speed, setSpeed] = useState(0);
  const [engineLoad, setEngineLoad] = useState(0);
  const [capacity, setCapacity] = useState(25);

  // Lightning frequency in storm mode
  useEffect(() => {
    if (!isStormy) {
      setLightningFlash(false);
      return;
    }
    const interval = setInterval(() => {
      setLightningFlash(true);
      setTimeout(() => setLightningFlash(false), 250);
    }, 4500);

    return () => clearInterval(interval);
  }, [isStormy]);

  // Smooth telemetry transitions
  useEffect(() => {
    let targetSpeed = 0;
    let targetLoad = 10;
    let targetCapacity = 25;

    if (isCruising) {
      targetSpeed = isStormy ? 11.8 : 22.4;
      targetLoad = isStormy ? 94 : 78;
    } else {
      targetSpeed = 0;
      targetLoad = cargoLoaded ? 22 : 12;
    }

    if (cargoLoaded) {
      targetCapacity = 85;
    }

    // Interval to tick stats values
    const timer = setInterval(() => {
      setSpeed((prev) => {
        const diff = targetSpeed - prev;
        return Math.abs(diff) < 0.2 ? targetSpeed : +(prev + diff * 0.1).toFixed(1);
      });
      setEngineLoad((prev) => {
        const diff = targetLoad - prev;
        return Math.abs(diff) < 1 ? targetLoad : Math.round(prev + diff * 0.1);
      });
      setCapacity((prev) => {
        const diff = targetCapacity - prev;
        return Math.abs(diff) < 1 ? targetCapacity : Math.round(prev + diff * 0.1);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isCruising, isStormy, cargoLoaded]);

  return (
    <section className={`${styles.section} ${isStormy ? styles.stormTheme : ""}`}>
      {/* Dynamic Lightning Flash Overlay */}
      {isStormy && (
        <div className={`${styles.lightningOverlay} ${lightningFlash ? styles.flashActive : ""}`} />
      )}

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Seatrans Digital Simulator</span>
          <h2 className={styles.heading}>
            Oceanic Freight <span className={styles.accent}>Fleet in Action</span>
          </h2>
          <p className={styles.subText}>
            Simulate cargo loading, weather response systems, and engine telemetry on our flagship vessel, the <strong className={styles.highlightText}>Seatrans Crusader</strong>.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className={styles.grid}>
          
          {/* Controls Panel */}
          <div className={styles.dashboardCard}>
            <div className={styles.glassHeader}>
              <div className={styles.liveIndicator}>
                <span className={styles.radarPing} />
                <span className={styles.liveText}>SIMULATOR ONLINE</span>
              </div>
              <h3 className={styles.cardTitle}>Vessel Control Console</h3>
            </div>

            {/* Telemetry Readouts */}
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryItem}>
                <span className={styles.telLabel}>Vessel Name</span>
                <span className={styles.telVal}>SEATRANS CRUSADER</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.telLabel}>Vessel Status</span>
                <span className={`${styles.telVal} ${isCruising ? styles.cruisingStatus : styles.mooredStatus}`}>
                  {isCruising ? (isStormy ? "STORM NAV" : "CRUISING") : "MOORED / STABLE"}
                </span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.telLabel}>Current Speed</span>
                <span className={styles.telVal}>{speed} knots</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.telLabel}>Engine Load</span>
                <span className={styles.telVal}>{engineLoad}%</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.telLabel}>Cargo Loadout</span>
                <span className={styles.telVal}>{capacity}%</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.telLabel}>Weather Context</span>
                <span className={`${styles.telVal} ${isStormy ? styles.stormText : styles.clearText}`}>
                  {isStormy ? "HIGH RAIN & WIND" : "CLEAR & SUNNY"}
                </span>
              </div>
            </div>

            {/* Simulation Controls */}
            <div className={styles.actionBlock}>
              <button
                onClick={() => setCargoLoaded(!cargoLoaded)}
                className={`${styles.consoleBtn} ${cargoLoaded ? styles.btnActive : ""}`}
                title="Toggles cargo loadout stacking on the deck"
              >
                {cargoLoaded ? "Unload Container Stack" : "Load Cargo Stack"}
              </button>

              <button
                onClick={() => setIsCruising(!isCruising)}
                className={`${styles.consoleBtn} ${isCruising ? styles.btnActive : ""}`}
                title="Toggles cruising speed, engine smoke, and propeller bubbles"
              >
                {isCruising ? "Anchor Ship (Stop Engine)" : "Depart Port (Start Engine)"}
              </button>

              <button
                onClick={() => setIsStormy(!isStormy)}
                className={`${styles.consoleBtn} ${isStormy ? styles.btnActiveAlert : ""}`}
                title="Toggles ocean storm mode with wind, lightning, and rain overlays"
              >
                {isStormy ? "Restore Clear Skies" : "Activate Ocean Storm"}
              </button>
            </div>
          </div>

          {/* Graphical Simulator Window */}
          <div className={styles.simulationWindow}>
            
            {/* Harbor Backdrop City Skyline & Industrial Silhouettes */}
            <div className={styles.sceneryBackdrop}>
              <svg className={styles.scenerySvg} viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Distant mountains/hills */}
                <path d="M0 130 Q120 100 240 120 T480 110 Q540 105 600 120 L600 180 L0 180 Z" 
                      fill={isStormy ? "rgba(15, 23, 42, 0.5)" : "rgba(30, 58, 138, 0.08)"} />
                <path d="M100 135 Q220 115 340 130 T580 125 L580 180 L100 180 Z" 
                      fill={isStormy ? "rgba(15, 23, 42, 0.3)" : "rgba(30, 58, 138, 0.05)"} opacity="0.8" />
                
                {/* Harbor warehouses & silos */}
                <rect x="220" y="112" width="30" height="18" fill={isStormy ? "rgba(15, 23, 42, 0.4)" : "rgba(12, 35, 64, 0.06)"} />
                <polygon points="220,112 235,102 250,112" fill={isStormy ? "rgba(15, 23, 42, 0.5)" : "rgba(12, 35, 64, 0.08)"} />
                <circle cx="270" cy="115" r="15" fill={isStormy ? "rgba(15, 23, 42, 0.3)" : "rgba(12, 35, 64, 0.05)"} />
                <rect x="268" y="100" width="4" height="30" fill={isStormy ? "rgba(15, 23, 42, 0.4)" : "rgba(12, 35, 64, 0.06)"} />

                {/* Distant industrial cargo cranes */}
                <path d="M380 130 L385 95 L405 95 M385 95 L395 130" 
                      stroke={isStormy ? "rgba(71, 85, 105, 0.4)" : "rgba(30, 101, 179, 0.15)"} strokeWidth="1.5" />
                <path d="M430 130 L434 90 L455 90 M434 90 L444 130" 
                      stroke={isStormy ? "rgba(71, 85, 105, 0.4)" : "rgba(30, 101, 179, 0.15)"} strokeWidth="1.5" />

                {/* Distant docked vessel silhouette */}
                <path d="M490 128 L540 128 L555 120 L552 128 L560 128 L558 135 L495 135 Z" 
                      fill={isStormy ? "rgba(15, 23, 42, 0.4)" : "rgba(12, 35, 64, 0.07)"} />
              </svg>
            </div>

            {/* Sun/Moon and Cloudscapes */}
            <div className={styles.skyEnvironment}>
              {!isStormy ? (
                <>
                  <div className={styles.sun} />
                  <div className={`${styles.cloud} ${styles.cloud1}`} />
                  <div className={`${styles.cloud} ${styles.cloud2}`} />
                  <div className={`${styles.cloud} ${styles.cloud3}`} />
                </>
              ) : (
                <>
                  <div className={styles.moon} />
                  <div className={`${styles.stormCloud} ${styles.stormCloud1}`} />
                  <div className={`${styles.stormCloud} ${styles.stormCloud2}`} />
                </>
              )}
            </div>

            {/* Concrete Dock Platform on Left */}
            <div className={styles.harborDock}>
              <div className={styles.dockConcrete}>
                <div className={styles.dockSafetyStripe} />
                <div className={styles.bollard} />
                <div className={styles.bollard} style={{ left: "80px" }} />
              </div>
            </div>

            {/* Port Crane Structure */}
            <div className={`${styles.harborCrane} ${cargoLoaded ? styles.craneLoadedState : ""}`}>
              <svg viewBox="0 0 160 200" className={styles.craneSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Crane Base Legs */}
                <line x1="20" y1="200" x2="35" y2="40" stroke="#1e293b" strokeWidth="2.5" />
                <line x1="80" y1="200" x2="65" y2="40" stroke="#1e293b" strokeWidth="2.5" />
                <line x1="20" y1="200" x2="80" y2="200" stroke="#0f172a" strokeWidth="3" />
                
                {/* Structural Cross Bracings */}
                <line x1="26" y1="120" x2="74" y2="120" stroke="#334155" strokeWidth="1.2" />
                <line x1="26" y1="120" x2="65" y2="40" stroke="#334155" strokeWidth="0.8" />
                <line x1="74" y1="120" x2="35" y2="40" stroke="#334155" strokeWidth="0.8" />
                <line x1="29" y1="80" x2="71" y2="80" stroke="#334155" strokeWidth="1" />
                
                {/* Operator Cabin details */}
                <rect x="58" y="44" width="14" height="12" rx="1" fill="#e2e8f0" stroke="#1e293b" strokeWidth="0.8" />
                <rect x="60" y="47" width="4" height="6" fill="#38bdf8" />
                <rect x="66" y="47" width="4" height="6" fill="#38bdf8" />

                {/* Horizontal Boom Gantry */}
                <rect x="0" y="30" width="160" height="10" rx="1.5" fill="#334155" stroke="#0f172a" strokeWidth="1.2" />
                <line x1="50" y1="10" x2="50" y2="30" stroke="#1e293b" strokeWidth="3" />
                <line x1="50" y1="10" x2="10" y2="30" stroke="#1e293b" strokeWidth="1.5" />
                <line x1="50" y1="10" x2="150" y2="30" stroke="#1e293b" strokeWidth="1.5" />

                {/* Trolley Hook Block (Slides horizontally and lowers cable) */}
                <g className={styles.craneTrolley}>
                  <rect x="100" y="38" width="16" height="7" rx="1" fill="#0f172a" />
                  {/* Cables */}
                  <line className={styles.cableLine} x1="104" y1="44" x2="104" y2="90" stroke="#475569" strokeWidth="0.8" />
                  <line className={styles.cableLine} x1="112" y1="44" x2="112" y2="90" stroke="#475569" strokeWidth="0.8" />
                  {/* Cargo box held by hook */}
                  <g className={styles.craneCargoBox}>
                    <rect x="94" y="90" width="32" height="16" rx="1.5" fill="var(--brand-blue)" stroke="#ffffff" strokeWidth="0.8" />
                    {/* Container metal ribs */}
                    {[100, 106, 112, 118, 124].map((rx) => (
                      <line key={rx} x1={rx} y1="90" x2={rx} y2="106" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" />
                    ))}
                    <text x="110" y="100" fill="#ffffff" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.2">SEATRANS</text>
                  </g>
                </g>
              </svg>
            </div>

            {/* Container Ship Frame (Bobbing & cruising effects) */}
            <div className={`${styles.vesselFrame} ${isCruising ? styles.vesselRunning : ""} ${isStormy ? styles.vesselStormy : ""}`}>
              <svg viewBox="0 0 420 160" className={styles.shipSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hullGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                  <linearGradient id="cabinGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Engine Exhaust Pipe Smoke Puffs */}
                <g className={styles.smokestackGroup}>
                  <circle className={`${styles.smokePuff} ${styles.puff1}`} cx="338" cy="40" r="4" fill="rgba(148,163,184,0.35)" />
                  <circle className={`${styles.smokePuff} ${styles.puff2}`} cx="338" cy="35" r="6" fill="rgba(148,163,184,0.25)" />
                  <circle className={`${styles.smokePuff} ${styles.puff3}`} cx="338" cy="30" r="8" fill="rgba(148,163,184,0.18)" />
                </g>

                {/* Stacked Cargo Deck (Loaded Containers) */}
                <g className={`${styles.vesselCargoStack} ${cargoLoaded ? styles.cargoVisible : ""}`}>
                  {/* Row 1 */}
                  <rect x="70" y="65" width="40" height="18" rx="1.5" fill="#1e3a8a" stroke="#ffffff" strokeWidth="0.8" />
                  {[76, 82, 88, 94, 100, 106].map((x) => <line key={x} x1={x} y1="65" x2={x} y2="83" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />)}
                  <text x="90" y="76" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">ST-01</text>
                  
                  <rect x="112" y="65" width="40" height="18" rx="1.5" fill="var(--brand-blue)" stroke="#ffffff" strokeWidth="0.8" />
                  {[118, 124, 130, 136, 142, 148].map((x) => <line key={x} x1={x} y1="65" x2={x} y2="83" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />)}
                  <text x="132" y="76" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">SEATRANS</text>

                  <rect x="154" y="65" width="40" height="18" rx="1.5" fill="#0f172a" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
                  {[160, 166, 172, 178, 184, 190].map((x) => <line key={x} x1={x} y1="65" x2={x} y2="83" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />)}
                  <text x="174" y="76" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">ST-03</text>

                  <rect x="196" y="65" width="40" height="18" rx="1.5" fill="var(--brand-blue)" stroke="#ffffff" strokeWidth="0.8" />
                  {[202, 208, 214, 220, 226, 232].map((x) => <line key={x} x1={x} y1="65" x2={x} y2="83" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />)}
                  <text x="216" y="76" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">SEATRANS</text>

                  {/* Row 2 (Stacked on top) */}
                  <rect x="91" y="47" width="40" height="18" rx="1.5" fill="#0f172a" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
                  {[97, 103, 109, 115, 121, 127].map((x) => <line key={x} x1={x} y1="47" x2={x} y2="65" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />)}
                  <text x="111" y="58" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">ST-05</text>

                  <rect x="133" y="47" width="40" height="18" rx="1.5" fill="#1e3a8a" stroke="#ffffff" strokeWidth="0.8" />
                  {[139, 145, 151, 157, 163, 169].map((x) => <line key={x} x1={x} y1="47" x2={x} y2="65" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />)}
                  <text x="153" y="58" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">ST-06</text>

                  <rect x="175" y="47" width="40" height="18" rx="1.5" fill="var(--brand-blue)" stroke="#ffffff" strokeWidth="0.8" />
                  {[181, 187, 193, 199, 205, 211].map((x) => <line key={x} x1={x} y1="47" x2={x} y2="65" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />)}
                  <text x="195" y="58" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">SEATRANS</text>
                </g>

                {/* Preloaded Base Container (Always present) */}
                <g>
                  <rect x="238" y="65" width="40" height="18" rx="1.5" fill="#1e3a8a" stroke="#ffffff" strokeWidth="0.8" />
                  {[244, 250, 256, 262, 268, 274].map((x) => <line key={x} x1={x} y1="65" x2={x} y2="83" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />)}
                  <text x="258" y="76" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">ST-CORE</text>
                </g>

                {/* SHIP superstructure (Bridge & Cabins) */}
                <rect x="306" y="50" width="42" height="34" rx="2" fill="url(#cabinGrad)" stroke="#475569" strokeWidth="1" />
                {/* Navigation deck windows */}
                <rect x="310" y="55" width="8" height="7" rx="0.5" fill="#bae6fd" stroke="#334155" strokeWidth="0.5" />
                <rect x="323" y="55" width="8" height="7" rx="0.5" fill="#bae6fd" stroke="#334155" strokeWidth="0.5" />
                <rect x="336" y="55" width="8" height="7" rx="0.5" fill="#bae6fd" stroke="#334155" strokeWidth="0.5" />
                
                {/* Bridge radar mast system */}
                <line x1="327" y1="50" x2="327" y2="36" stroke="#1e293b" strokeWidth="1.5" />
                <line x1="322" y1="41" x2="332" y2="41" stroke="#1e293b" strokeWidth="1" />
                {/* Rotating radar scanner */}
                <line className={styles.shipRadarScanner} x1="321" y1="36" x2="333" y2="36" stroke="#475569" strokeWidth="1.8" />
                {/* Glowing warning mast light */}
                <circle className={styles.mastLightRed} cx="327" cy="41" r="1.2" fill="#ef4444" filter="url(#glow)" />
                <circle className={styles.mastLightGreen} cx="332" cy="41" r="1.2" fill="#22c55e" filter="url(#glow)" />

                {/* Smokestack structure */}
                <rect x="332" y="30" width="12" height="20" rx="0.5" fill="#0f172a" />
                <rect x="332" y="27" width="12" height="3" rx="0.5" fill="var(--brand-blue)" />

                {/* Propeller Shaft & Rudder (Submerged) */}
                <circle className={styles.shipPropeller} cx="376" cy="115" r="4.5" fill="#475569" stroke="#1e293b" strokeWidth="0.8" />
                <line x1="376" y1="115" x2="368" y2="115" stroke="#334155" strokeWidth="1.8" />
                <path d="M386 100 L386 122 L382 120 Z" fill="#1e293b" />

                {/* Main Vessel Hull */}
                <path d="M34 83 L298 83 L372 83 L366 112 L298 112 L50 112 Z" fill="url(#hullGrad)" stroke="#0f172a" strokeWidth="1.2" />
                {/* Dynamic hull trim line */}
                <path d="M34 83 L372 83 L369 88 L37 88 Z" fill="var(--brand-blue)" />
                {/* Anchor details */}
                <circle cx="58" cy="94" r="2.5" fill="#020617" />
                <path d="M58 95 L58 101 M55 99 L61 99" stroke="#94a3b8" strokeWidth="1" />

                {/* Bow Splash & Engine bubbles */}
                <g className={styles.hullBubbles}>
                  <circle className={`${styles.bubble} ${styles.b1}`} cx="378" cy="116" r="2" fill="#ffffff" opacity="0.8" />
                  <circle className={`${styles.bubble} ${styles.b2}`} cx="384" cy="114" r="3" fill="#ffffff" opacity="0.6" />
                  <circle className={`${styles.bubble} ${styles.b3}`} cx="392" cy="117" r="1.5" fill="#ffffff" opacity="0.5" />
                  <circle className={`${styles.bubble} ${styles.b4}`} cx="400" cy="115" r="2.5" fill="#ffffff" opacity="0.4" />
                </g>
              </svg>
            </div>

            {/* Dynamic Water & Waves layer */}
            <div className={styles.seaEnvironment}>
              <div className={`${styles.wave} ${styles.waveBack}`} />
              <div className={`${styles.wave} ${styles.waveMid}`} />
              <div className={`${styles.wave} ${styles.waveFront}`} />
            </div>

            {/* Rain Particles overlay (Visible during storm mode) */}
            {isStormy && (
              <div className={styles.rainSystem} aria-hidden="true">
                <div className={styles.rainDrop1} />
                <div className={styles.rainDrop2} />
                <div className={styles.rainDrop3} />
                <div className={styles.rainDrop4} />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
