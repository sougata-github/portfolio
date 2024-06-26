"use client";

import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";

import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

const StairsTransition = () => {
  const pathname = usePathname();

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  if (!isLargeScreen) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex">
            <Stairs />
          </div>

          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairsTransition;
