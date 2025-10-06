import React from "react";

export const dynamic = "force-dynamic";

function calculateYearsDifference(startDate: Date) {
  const startMs = startDate.getTime();
  const endMs = new Date().getTime();
  const diffMs = endMs - startMs;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const diffYears = diffDays / 365.2425;
  return diffYears;
}

const Experience = () => {
  const diff = calculateYearsDifference(new Date("4/6/2022"));
  const years = diff.toFixed(1);

  return (
    <h2>
      <span className="font-serif font-bold mr-2">{years}</span>
      YEARS EXP
    </h2>
  );
};

export default Experience;
