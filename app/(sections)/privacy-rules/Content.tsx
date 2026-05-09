"use client";

import { motion } from "framer-motion";
import RulesBlock from "./RulesBlock";
import RulesItem from "./RulesItem";

export default function RulesContent() {
  return (
    <div className="relative bg-white/5 backdrop-blur-2xl rounded-4xl p-6 md:p-12 border border-white/15 overflow-hidden shadow-2xl">
      {/* Glass top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      {/* Glass inner glow */}
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-4xl" />
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center leading-snug">
        Privacy Policy of Equator Bumi Lestari Foundation
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-6 space-y-6 md:space-y-8"
      >
        <RulesBlock title="1. INTRODUCTION">
          <p>
            This Privacy Policy explains how Equator Bumi Lestari Foundation (“We,”
            “Us,” or “Our”) collects, uses, shares, and protects your personal
            information obtained through our website and interest registration
            forms (“Initial Services”). We are committed to protecting your
            privacy.
          </p>
        </RulesBlock>

        <RulesBlock title="2. INFORMATION WE COLLECT">
          <RulesItem label="2.1.">
            Information You Provide Directly: The personal information we
            request and collect includes your Name, Email address, and WhatsApp
            number. Additionally, in the event of a token swap, your wallet
            address will be automatically known to us.
          </RulesItem>
          <RulesItem label="2.2.">
            Limited Data Scope: This data is limited and may include information
            related to ownership and transactions of EGGM Tokens by users on the
            EGGMPIRE platform, as detailed in our Terms & Conditions of Service.
          </RulesItem>
          <RulesItem label="2.3.">
            Information Collected Automatically: We may collect non-personal
            information such as IP addresses, browser types, and interaction
            history with our website for analytics and security purposes.
          </RulesItem>
        </RulesBlock>

        <RulesBlock title="3. PURPOSE OF INFORMATION USE">
          <RulesItem label="3.1.">
            To use your email address to send confirmations and guidance for
            continuing the process with our partners.
          </RulesItem>
          <RulesItem label="3.2.">
            To use data received from partners for ecosystem monitoring,
            security, and user support as described in the Terms & Conditions.
          </RulesItem>
          <RulesItem label="3.3.">
            For Ecosystem Security and Support: To use data received from
            partners to monitor the health of the EGGM Token ecosystem, prevent
            misuse, and facilitate resolution of issues that token holders may
            encounter.
          </RulesItem>
        </RulesBlock>

        <RulesBlock title="4. SHARING INFORMATION WITH THIRD PARTIES">
          <RulesItem label="4.1">
            We do not sell, trade, or transfer your data to any other third
            parties for any purpose.
          </RulesItem>
        </RulesBlock>

        <RulesBlock title="5. DATA RETENTION">
          <RulesItem>
            We will retain your email address for as long as necessary to
            fulfill the purposes outlined in this policy, or as required by
            applicable legal provisions.
          </RulesItem>
        </RulesBlock>

        <RulesBlock title="6. YOUR RIGHTS">
          <RulesItem>You have the right to:</RulesItem>
          <RulesItem label="6.1.">
            Access and Correction: Request access to view and correct your email
            data.
          </RulesItem>
          <RulesItem label="6.2.">
            Deletion: Request the deletion of your email data from our systems.
          </RulesItem>
          <RulesItem label="6.3.">
            Opt-Out: Decline to receive further communications from us. To
            exercise these rights, you may contact us at: [Privacy Officer
            Contact Email or Form].
          </RulesItem>
        </RulesBlock>

        <RulesBlock title="7. DATA SECURITY">
          <RulesItem>
            We implement reasonable technical and organizational measures to
            protect your personal information from unauthorized access,
            disclosure, or use.
          </RulesItem>
        </RulesBlock>

        <RulesBlock title="8. CHANGES TO THIS PRIVACY POLICY">
          <RulesItem>
            We may update this Privacy Policy from time to time. The latest
            version will always be available on this page, indicating the “Last
            Updated” date.
          </RulesItem>
        </RulesBlock>

        <RulesBlock title="9. CONTACT US">
          <RulesItem>
            If you have any questions about this Privacy Policy, please contact:
          </RulesItem>
          <p>Data Privacy Officer</p>
          <p>Equator Bumi Lestari Foundation</p>
          <p>Email: admin@equator.id</p>
        </RulesBlock>
      </motion.div>
    </div>
  );
}
