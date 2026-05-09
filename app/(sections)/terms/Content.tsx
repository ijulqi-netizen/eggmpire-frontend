"use client";

import { motion } from "framer-motion";
import TermsBlock from "./TermsBlock";
import TermsItem from "./TermsItem";

export default function TermsContent() {
  return (
    <div className="relative bg-white/5 backdrop-blur-2xl rounded-4xl p-6 md:p-12 border border-white/15 overflow-hidden shadow-2xl">
      {/* Glass top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      {/* Glass inner glow */}
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-4xl" />
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center leading-snug">
        Terms & Conditions – PT Eggmpire Bumi Lestari
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-6 space-y-6 md:space-y-8"
      >
        <TermsBlock title="INTRODUCTION">
          <p>
            These Terms and Conditions (“T&C”) govern the use of services
            provided by Yayasan Equator Bumi Lestari (“We,” “Us,” “Our,” or the
            “Platform”), which facilitates users in expressing interest (leads)
            in conducting cryptocurrency asset swaps. Following complete
            registration, the swap process will proceed through a vesting
            mechanism on the Ethereum blockchain, with DEX listing on Uniswap.
          </p>
        </TermsBlock>

        <TermsBlock title="1. PURPOSE OF SERVICES">
          <TermsItem label="1.1.">
            Our Platform acts as an initial gateway for Users interested in
            obtaining information and being directed to the Ethereum blockchain,
            where the actual exchange (swap) of crypto assets takes place (e.g.,
            from USDC to EGGM Token or vice versa).
          </TermsItem>
          <TermsItem label="1.2.">
            All technical processes related to swapping, deposits, withdrawals,
            and swap execution are conducted entirely on the Ethereum
            blockchain.
          </TermsItem>
          <TermsItem label="1.3.">
            Yayasan Equator Bumi Lestari does not operate as a crypto asset
            exchange, does not provide custodial wallet services, and never
            holds Users’ crypto assets.
          </TermsItem>
          <TermsItem label="1.4.">
            Yayasan Equator Bumi Lestari facilitates complete account registration,
            identity verification (KYC), and initial registration processes, and
            partners in executing social and climate action initiatives.
          </TermsItem>
        </TermsBlock>

        <TermsBlock title="2. INTEGRATED DATA COLLECTION AND SHARING">
          <TermsItem label="2.1.">
            Data Collected on This Platform (EGGM): At the interest registration
            stage, the data we request and collect from you includes your Name,
            Email address, and WhatsApp phone number.
          </TermsItem>

          <TermsItem label="2.2.">
            Purpose of Data Collection: The purpose of this comprehensive data
            collection and sharing is to enable PT Eggmpire Bumi Lestari, as the
            token issuer, to:
          </TermsItem>
          <TermsItem>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Monitor and analyze the EGGM token ecosystem to ensure its
                health and security.
              </li>
              <li>
                Provide better support, facilitation, and protection to all EGGM
                Token holders.
              </li>
              <li>
                Identify and help resolve potential technical or administrative
                issues related to the EGGM Token.
              </li>
              <li>
                Deliver customer relations services and execute various social
                and climate action initiatives through real-world
                implementation.
              </li>
            </ul>
          </TermsItem>

          <TermsItem label="2.3.">
            Data Processing Principles: All data processing will be conducted in
            compliance with principles of confidentiality and personal data
            protection, and will only be used for the purposes stated above.
          </TermsItem>
        </TermsBlock>

        <TermsBlock title="3. CRYPTO ASSET SWAP MECHANISMS AND RISKS">
          <TermsItem label="3.1.">
            You understand that the mechanism for swapping crypto assets
            involves high market risks, including extreme price volatility.
            Asset values may rise or fall significantly within a short period.
          </TermsItem>
          <TermsItem label="3.2.">
            Transactions on the blockchain network are final and irreversible.
          </TermsItem>
          <TermsItem label="3.3.">
            You bear full responsibility for the security of your account in
            your respective wallet and for any transaction decisions you make.
          </TermsItem>
        </TermsBlock>

        <TermsBlock title="4. USER OBLIGATIONS AND PROHIBITIONS">
          <TermsItem label="4.1.">
            You are required to provide accurate and truthful information.
          </TermsItem>
          <TermsItem label="4.2.">
            You are prohibited from using the services for any activities that
            violate applicable laws, including money laundering, terrorism
            financing, or fraud.
          </TermsItem>
        </TermsBlock>

        <TermsBlock title="5. LIMITATION OF LIABILITY">
          <TermsItem label="5.1.">
            Our liability is limited to the collection of user interest and the
            transmission of initial email data.
          </TermsItem>
          <TermsItem label="5.2.">
            We are not liable for any losses, transaction failures, technical
            issues, or disputes that arise after you have received EGGM Tokens
            in your respective wallet.
          </TermsItem>
        </TermsBlock>

        <TermsBlock title="6. AMENDMENTS AND GOVERNING LAW">
          <TermsItem>
            We reserve the right to amend these T&C at any time. Any changes
            shall become effective upon announcement.
          </TermsItem>
        </TermsBlock>
      </motion.div>
    </div>
  );
}
