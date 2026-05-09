"use client";

import CarouselFeatured from "@/components/ui/CarouselFeatured";
import Divider from "@/components/ui/Divider";
import FloatingInput from "@/components/ui/FloatingInput";
import FloatingTextarea from "@/components/ui/FloatingTextarea";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const vp = { once: true, margin: "-60px" };

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const formContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const infoContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

function ContactIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
      <Image src={src} alt={alt} width={20} height={20} unoptimized />
    </div>
  );
}

export default function ContactUs() {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    if (!data.name || !data.email || !data.message) {
      alert("Please fill all fields");
      return;
    }
    console.log("data", data);
  };

  return (
    <section
      id="contact"
      className="relative pb-16 px-4 xs:px-6 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-5.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <Divider spacing="md" size="4xl" mobileSize="2xl">
          Contact Us
        </Divider>

        {/* Glass card — scales up + fades in */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease }}
          viewport={vp}
          className="relative bg-white/5 backdrop-blur-2xl rounded-4xl p-6 md:p-12 shadow-2xl w-full border border-white/15 overflow-hidden"
        >
          {/* Glass top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          {/* Glass inner glow */}
          <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-4xl" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            viewport={vp}
            className="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-12"
          >
            Get In Touch With Us
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* LEFT: FORM — fields stagger from left */}
            <motion.form
              id="contact-form"
              className="space-y-6 md:space-y-8 order-1"
              onSubmit={submitForm}
              variants={formContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <motion.div variants={fromLeft}>
                <FloatingInput id="name" name="name" label="Name" />
              </motion.div>
              <motion.div variants={fromLeft}>
                <FloatingInput
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                />
              </motion.div>
              <motion.div variants={fromLeft}>
                <FloatingTextarea id="message" name="message" label="Message" />
              </motion.div>
            </motion.form>

            {/* RIGHT: INFO + BUTTON — items stagger from right */}
            <div className="flex flex-col justify-between h-full items-start order-2">
              <motion.div
                className="space-y-6 md:space-y-8 w-full"
                variants={infoContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <motion.div
                  variants={fromRight}
                  className="flex items-center gap-4 text-white group cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <ContactIcon src="/icons/email.svg" alt="email" />
                  <span className="text-sm sm:text-base md:text-lg truncate">
                    admin@eggmpire.com
                  </span>
                </motion.div>

                <motion.div
                  variants={fromRight}
                  className="flex items-center gap-4 text-white group cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <ContactIcon src="/icons/phone.svg" alt="phone" />
                  <span className="text-sm sm:text-base md:text-lg">
                    +62 811 2140807
                  </span>
                </motion.div>

                <motion.div
                  variants={fromRight}
                  className="flex items-center gap-4 text-white group cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <ContactIcon src="/icons/telegram.svg" alt="telegram" />
                  <span className="text-sm sm:text-base md:text-lg">
                    +62 811 2140807
                  </span>
                </motion.div>
              </motion.div>

              {/* Button */}
              <motion.div
                className="mt-10 md:mt-12 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.5 }}
                viewport={vp}
              >
                <button
                  type="submit"
                  form="contact-form"
                  className="w-full md:w-auto px-10 py-4 md:py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all shadow-lg active:scale-95"
                >
                  Submit
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Featured By carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={vp}
          className="mt-17.5"
        >
          <CarouselFeatured />
        </motion.div>
      </div>
    </section>
  );
}
