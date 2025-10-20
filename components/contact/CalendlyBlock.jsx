"use client";
import { InlineWidget } from "react-calendly";

export default function CalendlyBlock() {
  const url =
    "https://calendly.com/petrecirceag/consultanta-dezvoltare-website";

  return (
    <div className="relative z-30 w-full overflow-hidden border pointer-events-auto rounded-2xl border-white/10 bg-black/30">
      <InlineWidget
        url={`${url}?hide_gdpr_banner=1`}
        styles={{ height: "720px", width: "100%" }}
        pageSettings={{
          primaryColor: "6f3aff",
          textColor: "ffffff",
          backgroundColor: "0b0b0f",
          hideEventTypeDetails: false,
          hideLandingPageDetails: true,
        }}
        prefill={{
          name: "",
          email: "",
        }}
        utm={{
          utmSource: "venturely.online",
          utmMedium: "contact-page",
          utmCampaign: "book-15min",
        }}
      />
    </div>
  );
}
