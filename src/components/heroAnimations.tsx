import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HERO_HEIGHT = 400;
const HERO_WIDTH = 640; // aspect-video

const projectNameText = 'My Awesome Project';
const descriptionText = 'A modern web application';

const HeroAnimations: React.FC = () => {
  const [step, setStep] = useState(0);
  const [typedProjectName, setTypedProjectName] = useState('');
  const [typedDescription, setTypedDescription] = useState('');

  // Step timing (ms) - spaced out for better flow
  const timings = {
    rest: 1000,
    toButton: 1500,
    buttonClick: 800,
    modalIn: 1200,
    typingProjectName: 2000,
    typingDescription: 2000,
    toModalCreate: 1500,
    modalCreateClick: 800,
    modalOut: 1000,
    toast: 2500,
  };

  // Cursor positions (adjusted to match actual button locations)
  const cursorPos = {
    rest: { x: 40, y: HERO_HEIGHT - 80 },
    button: { x: 120, y: HERO_HEIGHT - 70 },
    modalCreate: { x: HERO_WIDTH / 2 - 20, y: HERO_HEIGHT / 2 + 40 },
  };

  // Stepper effect
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (step === 0) timeout = setTimeout(() => setStep(1), timings.rest);
    if (step === 1) timeout = setTimeout(() => setStep(2), timings.toButton);
    if (step === 2) timeout = setTimeout(() => setStep(3), timings.buttonClick);
    if (step === 3) timeout = setTimeout(() => setStep(4), timings.modalIn);
    if (step === 4) {
      // Typing project name
      let i = 0;
      setTypedProjectName('');
      const type = () => {
        setTypedProjectName(projectNameText.slice(0, i + 1));
        if (i < projectNameText.length - 1) {
          i++;
          timeout = setTimeout(type, 32);
        } else {
          timeout = setTimeout(() => setStep(5), timings.typingProjectName);
        }
      };
      type();
    }
    if (step === 5) {
      // Typing description
      let i = 0;
      setTypedDescription('');
      const type = () => {
        setTypedDescription(descriptionText.slice(0, i + 1));
        if (i < descriptionText.length - 1) {
          i++;
          timeout = setTimeout(type, 28);
        } else {
          timeout = setTimeout(() => setStep(6), timings.typingDescription);
        }
      };
      type();
    }
    if (step === 6) timeout = setTimeout(() => setStep(7), timings.toModalCreate);
    if (step === 7) timeout = setTimeout(() => setStep(8), timings.modalCreateClick);
    if (step === 8) timeout = setTimeout(() => setStep(9), timings.modalOut);
    if (step === 9) timeout = setTimeout(() => setStep(0), timings.toast);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [step]);

  // Cursor animation keyframes - simplified to show only twice
  let cursorAnimate = {};
  if (step === 0) cursorAnimate = cursorPos.rest;
  if (step === 1 || step === 2) cursorAnimate = cursorPos.button;
  if (step >= 3 && step <= 6) cursorAnimate = { opacity: 0 }; // Hide during modal and typing
  if (step === 7) cursorAnimate = cursorPos.modalCreate; // Show for Build button click
  if (step >= 8) cursorAnimate = cursorPos.rest;

  // Modal visibility
  const showModal = step >= 3 && step <= 8;
  // Toast visibility
  const showToast = step === 9;

  return (
    <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden flex items-center justify-center bg-transparent mx-auto">
      {/* Dashboard Mockup */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-6">
        {/* Header */}
        <div className="w-36 sm:w-40 md:w-48 h-6 sm:h-7 md:h-9 bg-white border border-grey-30 rounded-[8px] shadow-sm flex items-center px-2 md:px-3 mb-2">
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#242424] rounded-full mr-1.5 md:mr-2"></div>
          <div className="text-[10px] sm:text-[11px] md:text-[13px] text-grey-70 font-medium">Dashboard</div>
        </div>
        {/* Content */}
        <div className="w-60 sm:w-68 md:w-80 h-12 sm:h-14 md:h-18 bg-white border border-grey-30 rounded-[8px] shadow-sm mb-3 md:mb-4 flex flex-col justify-center px-3 md:px-4 space-y-1.5 md:space-y-2">
          <div className="h-1.5 md:h-2 bg-grey-20 rounded w-3/4"></div>
          <div className="h-1.5 md:h-2 bg-grey-20 rounded w-1/2"></div>
          <div className="h-1.5 md:h-2 bg-grey-20 rounded w-2/3"></div>
        </div>
        {/* Create Project Button */}
        <motion.button
          className="relative w-40 sm:w-44 md:w-56 h-8 sm:h-9 md:h-11 bg-[#242424] text-white text-[11px] sm:text-[12px] md:text-[15px] rounded-[8px] font-medium shadow-sm flex items-center justify-center transition-all duration-200 hover:bg-[#1a1a1a] border-0 hover:border-0 focus:outline-none focus:ring-0"
          animate={step === 2 ? { scale: [1, 0.95, 1.05, 1] } : { scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          Create Project
        </motion.button>
      </div>
      
      {/* Modal */}
      {showModal && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10 p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="bg-white border border-grey-30 rounded-[12px] p-4 sm:p-5 md:p-6 shadow-lg w-64 sm:w-72 md:w-88 max-w-[85vw]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-[13px] md:text-[15px] font-semibold text-grey-90 mb-3 md:mb-4">New Project</div>
            <div className="space-y-3 md:space-y-4">
              {/* Project Name */}
              <div>
                <div className="text-[10px] md:text-[12px] text-grey-60 font-medium mb-1">Project Name</div>
                <div className="h-8 md:h-10 bg-grey-20 rounded-[8px] border border-grey-30 px-2 md:px-3 flex items-center shadow-sm text-[11px] md:text-[13px] text-grey-80">
                  {step >= 4 ? typedProjectName : ''}
                  {step === 4 && <span className="animate-pulse">|</span>}
                </div>
              </div>
              {/* Description */}
              <div>
                <div className="text-[10px] md:text-[12px] text-grey-60 font-medium mb-1">Description</div>
                <div className="h-8 md:h-10 bg-grey-20 rounded-[8px] border border-grey-30 px-2 md:px-3 flex items-center shadow-sm text-[11px] md:text-[13px] text-grey-80">
                  {step >= 5 ? typedDescription : ''}
                  {step === 5 && <span className="animate-pulse">|</span>}
                </div>
              </div>
              {/* Modal Create Button */}
              <motion.button
                className="w-full bg-[#242424] text-white text-[11px] md:text-[13px] px-3 md:px-4 py-2 md:py-2.5 rounded-[8px] font-medium shadow-sm mt-2 transition-all duration-200 hover:bg-[#1a1a1a] border-0 hover:border-0 focus:outline-none focus:ring-0"
                animate={step === 7 ? { scale: [1, 0.95, 1.05, 1] } : { scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                Build
              </motion.button>
        </div>
          </motion.div>
        </motion.div>
      )}

      {/* Toast */}
      {showToast && (
        <motion.div
          className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-green-50 border border-green-200 rounded-[10px] px-3 md:px-4 py-2 md:py-3 shadow-lg flex items-center gap-2 md:gap-3 z-20"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: [0.8, 1.1, 0.95, 1] }}
          exit={{ x: 100, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-green-500 rounded-full"></div>
          <span className="text-[11px] md:text-[13px] text-green-700 font-medium">Project Created!</span>
        </motion.div>
      )}

      {/* Animated Pointing Hand Cursor */}
      <motion.img
        src="/pointinghand.svg"
        alt="Pointing hand cursor"
        className="absolute w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 z-30 drop-shadow-lg"
        animate={cursorAnimate}
        transition={{ type: 'tween', duration: 1.8, ease: 'easeInOut' }}
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default HeroAnimations; 