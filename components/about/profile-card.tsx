"use client";

import { memo } from "react";
import { Card, CardFooter, Image } from "@heroui/react";
import { motion } from "framer-motion";

import { HighlightText } from "@/components/textAnimations/highlight-text";
import { SplittingText } from "@/components/textAnimations/splitting-text";
import { ProfileCardProps } from "@/components/about/types";

/**
 * NOTE:
 * - pune un PNG/SVG cu transparență în `image`
 * - glow-ul este discret și rulează continuu
 * - imaginea e "object-contain" ca să nu taie logo-ul
 */
export const ProfileCard = memo(function ProfileCard({
  image,
  name,
  title,
  description,
}: ProfileCardProps) {
  return (
    <Card className="w-full max-w-6xl p-0 mx-auto mb-12 overflow-hidden shadow-md md:p-0 rounded-2xl dark:shadow-neutral-700 bg-white/90 dark:bg-black/60">
      <div className="flex flex-col items-center gap-8 mdplus:flex-row md:items-start">
        {/* Left logo card (same size/layout, no bg, animated) */}
        <div className="w-full md:w-[300px] relative h-[300px]">
          <Card isFooterBlurred className="w-full h-full overflow-hidden">
            {/* animated glow behind logo */}
            <motion.div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.06, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              // radial gradient glow
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(0,153,255,0.35) 0%, rgba(120,60,255,0.25) 35%, rgba(0,0,0,0) 70%)",
              }}
            />

            {/* floating logo (no cropping) */}
            <motion.div
              className="relative z-10 flex items-center justify-center w-full h-full"
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: [0, -6, 0], rotate: [0, 0.4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                alt="Venturely logo"
                className="object-contain !bg-transparent"
                src={image}       // ex: "/venturely-logo.svg"
                radius="none"
                removeWrapper
              />
            </motion.div>

            <CardFooter className="absolute bottom-0 z-20 border-t bg-black/50 border-white/20">
              <div className="flex flex-col text-white">
                <HighlightText className="text-lg font-semibold" text={name} />
                <p className="text-sm text-white/80">{title}</p>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Right Description (unchanged) */}
        <div className="max-w-2xl px-6 py-4 text-sm leading-relaxed text-muted-foreground">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              <SplittingText
                delay={index * 500}
                inView={true}
                inViewOnce={true}
                motionVariants={{ stagger: 0.08 }}
                text={paragraph}
                type="words"
              />
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
});
