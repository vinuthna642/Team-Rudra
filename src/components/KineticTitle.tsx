import React from 'react';
import { motion } from 'motion/react';

interface KineticTitleProps {
  text: string;
  subtitle?: string;
  category?: string;
  size?: 'normal' | 'large' | 'hero';
  align?: 'left' | 'center';
  highlightWord?: string;
}

export const KineticTitle: React.FC<KineticTitleProps> = ({
  text,
  subtitle,
  category,
  size = 'normal',
  align = 'left',
  highlightWord
}) => {
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -40,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 150,
      },
    },
  };

  const sizeClasses = {
    normal: 'text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight',
    large: 'text-3xl md:text-4xl lg:text-5xl font-black tracking-tight',
    hero: 'text-4xl md:text-5xl lg:text-6xl font-black tracking-tight',
  }[size];

  const alignClasses = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClasses} select-none mb-3`}>
      {category && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-2 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{category}</span>
        </motion.div>
      )}

      {/* Kinetic Animated Title ("Moment Letters") */}
      <motion.h1
        key={text}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`flex flex-wrap ${align === 'center' ? 'justify-center' : 'justify-start'} ${sizeClasses} text-white leading-tight font-['Outfit']`}
      >
        {letters.map((char, index) => {
          const isSpace = char === ' ';
          return (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariants}
              className={`inline-block ${
                isSpace ? 'w-2 md:w-3' : ''
              } hover:text-emerald-400 transition-colors duration-200 cursor-default`}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 text-sm md:text-base text-emerald-100/80 font-medium max-w-3xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
