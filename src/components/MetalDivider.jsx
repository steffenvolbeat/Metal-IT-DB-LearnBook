/**
 * MetalDivider - Metal-typischer, animierter Divider
 * Zeigt einen Neon-Glow-Divider mit Animation zwischen Abschnitten
 * @returns {JSX.Element} Divider-Element
 */
import React from "react";

const MetalDivider = () => (
  <div className="w-full flex justify-center my-10">
    <div className="h-1 w-2/3 bg-gradient-to-r from-neon-blue via-electric-purple to-toxic-green rounded-full shadow-neon animate-pulse" />
  </div>
);

export default MetalDivider;
