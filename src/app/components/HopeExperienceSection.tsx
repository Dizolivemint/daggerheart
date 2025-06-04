import React from "react";
import { FormState } from "../types";

type Props = {
  form: FormState;
  renderChecks: (field: keyof FormState, count: number) => React.ReactNode;
};

export default function HopeExperienceSection({ form, renderChecks }: Props) {
  return (
    <div className="flex gap-8">
      <div>
        <label>Hope</label>
        {renderChecks("hope", 6)}
      </div>
      <div>
        <label>Experience</label>
        {renderChecks("experience", 8)}
      </div>
    </div>
  );
} 