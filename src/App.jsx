import React from "react";
import "./App.css";
import Projectsection from "./Project";
import Educationsection from "./Education";
import Headersection from "./Header";
import Homesection from "./Home";
import Contactsection from "./Contact";
import Footersection from "./Footer";

export default function App() {
  return (
    <>
      <Headersection />
      <Homesection />
      <Educationsection />
      <Projectsection />
      <Contactsection />
      <Footersection />
    </>
  );
};