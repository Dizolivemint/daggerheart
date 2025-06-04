import React from "react";

export default function ClassFeatureSection() {
  return (
    <fieldset className="border rounded p-2">
      <legend className="font-bold">Class Feature</legend>
      <div className="text-xs whitespace-pre-line">
        <b>RANGER'S FOCUS</b>
        {`
Spend a Hope and make an attack against a target. On a success, deal your attack's normal damage and temporarily make the attack's target your Focus. Until this feature ends or you make a different creature your Focus, you gain the following benefits against your Focus:
- You know precisely what direction they are in.
- When you deal damage to them, they must mark 3 Stress.
- When you fail an attack against them, you can end your Ranger's Focus feature to reroll your Duality Dice.`}
      </div>
    </fieldset>
  );
} 