import { Footer, Header } from "@/sections/landingPage";
import { QuotesForm, QuotesHeading } from "@/sections/quotePage";
import React from "react";

export default function GetQuotes() {
  return (
    <section className="overflow-x-hidden">
      <main className="bg pb-10 relative">
        <Header />
        <QuotesHeading />
      </main>
      <QuotesForm />
      <Footer />
    </section>
  );
}
