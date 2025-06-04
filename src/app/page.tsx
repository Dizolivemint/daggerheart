"use client";
import React, { useState, ChangeEvent } from "react";
import CharacterHeader from "./components/CharacterHeader";
import AbilitiesSection from "./components/AbilitiesSection";
import DamageHealthSection from "./components/DamageHealthSection";
import HopeExperienceSection from "./components/HopeExperienceSection";
import GoldSection from "./components/GoldSection";
import WeaponsSection from "./components/WeaponsSection";
import ArmorSection from "./components/ArmorSection";
import InventorySection from "./components/InventorySection";
import InventoryWeaponsSection from "./components/InventoryWeaponsSection";
import ClassFeatureSection from "./components/ClassFeatureSection";
import { FormState, Weapon, Armor, InventoryWeapon } from "./types";

export default function Home() {
  const [form, setForm] = useState<FormState>({
    name: "",
    pronouns: "",
    heritage: "",
    subclass: "",
    level: "",
    agility: "",
    strength: "",
    finesse: "",
    instinct: "",
    presence: "",
    knowledge: "",
    evasion: false,
    armor: Array(8).fill(false),
    minorDamage: 0,
    majorDamage: 0,
    severeDamage: 0,
    hp: Array(8).fill(false),
    stress: Array(8).fill(false),
    hope: Array(6).fill(false),
    experience: Array(8).fill(false),
    gold: Array(10).fill(false),
    goldBags: Array(10).fill(false),
    goldChest: Array(5).fill(false),
    proficiency: 0,
    primaryWeapon: { name: "", trait: "", damage: "", feature: "" },
    secondaryWeapon: { name: "", trait: "", damage: "", feature: "" },
    activeArmor: { name: "", baseThresholds: "", baseScore: "", feature: "" },
    inventory: "",
    inventoryWeapons: [
      { name: "", trait: "", damage: "", feature: "", primary: false, secondary: false },
      { name: "", trait: "", damage: "", feature: "", primary: false, secondary: false },
    ],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleArrayCheck = (field: keyof FormState, idx: number) => {
    setForm((prev) => ({
      ...prev,
      [field]: Array.isArray(prev[field])
        ? (prev[field] as boolean[]).map((v, i) => (i === idx ? !v : v))
        : prev[field],
    }));
  };

  const handleProficiency = (idx: number) => {
    setForm((prev) => ({ ...prev, proficiency: idx + 1 }));
  };

  // Helper for rendering checkboxes in a row
  const renderChecks = (field: keyof FormState, count: number): React.ReactNode => {
    const arr = form[field];
    if (!Array.isArray(arr)) return null;
    return (
      <div className="flex gap-1">
        {arr.map((checked, i) => (
          <input
            key={i}
            type="checkbox"
            checked={!!checked}
            onChange={() => handleArrayCheck(field, i)}
            className="w-4 h-4"
          />
        ))}
      </div>
    );
  };

  return (
    <form className="max-w-5xl mx-auto p-4 grid gap-6 text-sm">
      <CharacterHeader form={form} handleChange={handleChange} renderChecks={renderChecks} />
      <AbilitiesSection form={form} handleChange={handleChange} />
      <DamageHealthSection form={form} renderChecks={renderChecks} setForm={setForm} />
      <HopeExperienceSection form={form} renderChecks={renderChecks} />
      <GoldSection form={form} renderChecks={renderChecks} />
      <WeaponsSection form={form} handleProficiency={handleProficiency} setForm={setForm} />
      <ArmorSection form={form} setForm={setForm} />
      <InventorySection form={form} handleChange={handleChange} />
      <InventoryWeaponsSection form={form} setForm={setForm} />
      <ClassFeatureSection />
    </form>
  );
}
