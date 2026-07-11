import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export interface MorphTextProps {
  /** Array of words / phrases to cycle through. */
  words?: string[];
  /** Duration (ms) each word is displayed before transitioning. */
  interval?: number;
  /** Font size passed as a CSS value. */
  fontSize?: string;
  /** Font family override. */
  fontFamily?: string;
  /** Text alignment: "left" or "center". */
  align?: "left" | "center";
  /** Extra CSS classes on the root wrapper. */
  className?: string;
  /** Extra CSS classes on the text element. */
  textClassName?: string;
}

export function MorphText({
  words = ["CREATE", "DESIGN", "DEVELOP"],
  interval = 3000,
  fontSize = "clamp(2rem, 8vw, 5rem)",
  fontFamily = '"Space Grotesk", sans-serif',
  align = "center",
  className,
  textClassName,
}: MorphTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  const isLeft = align === "left";

  return (
    <div
      className={cn(
        "relative flex flex-col w-full",
        isLeft ? "items-start justify-start text-left" : "items-center justify-center text-center",
        className
      )}
      style={{ fontFamily }}
    >
      <div 
        className={cn("relative flex items-center h-[1.2em] w-full", isLeft ? "justify-start" : "justify-center")}
        style={{ fontSize }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute font-black tracking-tight leading-none whitespace-nowrap",
              textClassName
            )}
            style={{
              left: isLeft ? "0" : "50%",
              transform: isLeft ? "translate(0, -50%)" : "translate(-50%, -50%)",
              top: "50%",
            }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MorphText;
