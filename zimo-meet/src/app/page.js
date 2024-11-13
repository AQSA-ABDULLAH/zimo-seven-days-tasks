"use client";
import { useState } from "react";
import Application from "./components/ApplicationForm/Application";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
import Section13 from "./components/Section13";
import Section14 from "./components/Section14";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";

const countries = [
  "United Kingdom", "United States", "Pakistan", "India", "Algeria", "Angola",
  "Argentina", "Australia", "Austria", "Bahamas", "Bahrain", "Bangladesh",
  "Barbados", "Belgium", "Belize", "Brazil", "Bulgaria", "Cameroon", "Canada",
  "Cape Verde"
];

const roles = [
  "1", "2", "3", "4", "5", "6",
  "7", "8", "9"
];

export default function Home() {
  const [showApplication, setShowApplication] = useState(false);

  // Function to show the Application section
  const handleApplyClick = () => {
    setShowApplication(true);
  };

  return (
    <div>
      {!showApplication ? (
        <>
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Section11 />
          <Section12 />
          <Section13 countries={countries} roles={roles} onApplyClick={handleApplyClick} />
          <Section14 />
        </>
      ) : (
        <Application />
      )}
    </div>
  );
}


