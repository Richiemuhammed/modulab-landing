import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Avatar component for the comment bubble
// Uses bg-accent (yellow), white text, 14px size, no gradient, 12px text
const Avatar = () => (
  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white font-bold text-[12px] border-2 border-white">
    JD
  </div>
);

// Animation Sequence: TaskCardWithComment
// This animation shows a task card sliding down and a comment bubble sliding up, meeting in the middle.
const TaskCardWithComment: React.FC = () => {
  return (
    // Animation sequence container for TaskCardWithComment
    <div className="animation-sequence taskCardWithComment w-full flex flex-col items-center justify-center h-full min-h-[320px] md:min-h-[380px]">
      {/* Stack the task card and comment bubble vertically with a gap */}
      <div className="flex flex-col items-center gap-2 w-full">
        {/* Task Card: slides down from the top, slightly shifted right, smaller padding, subtle icon, subtle shadow */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, x: 24 }} // shift right by 24px
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white text-grey-80 rounded-[8px] shadow-sm px-3 py-2 border border-gray-100 flex items-center w-auto max-w-[90%]"
        >
          {/* Subtle icon for visual interest, 14px */}
          <CheckCircleIcon className="w-6 h-6 text-accent mr-2 flex-shrink-0" />
          {/* Task title, 14px, 500 weight */}
          <div className="font-medium" style={{ fontSize: 14 }}>New Feature: AI-Powered Feedback Parser</div>
        </motion.div>
        {/* Divider line for structure - now more visible, shorter width, and using a darker grey */}
        <div className="w-12 h-px my-1 border-t border-grey-30" />
        {/* Comment Bubble: slides up from the bottom, slightly shifted left, smaller padding, subtle shadow */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, x: -24 }} // shift left by 24px
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="bg-white text-grey-80 rounded-[8px] shadow-sm px-2.5 py-2 border border-gray-100 flex items-center w-auto max-w-[95%] relative"
        >
          {/* Avatar for the commenter, 14px, yellow, 12px text */}
          <Avatar />
          {/* Comment text, font 14px, gap 6px from avatar, font-medium (500) */}
          <div className="ml-[6px] flex flex-col">
            <span className="font-medium" style={{ fontSize: 14 }}>Let’s refine the logic before release.</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Main AnimatedProjectFeed component
// This is the entry point for all animation sequences (currently only TaskCardWithComment)
const AnimatedProjectFeed: React.FC = () => {
  return (
    // Outer container for the animated feed (sizing and layout)
    <div className="relative w-full max-w-[480px] bg-transparent rounded-2xl flex flex-col justify-center items-center overflow-visible p-0">
      {/* Render the first animation sequence: TaskCardWithComment */}
      <TaskCardWithComment />
    </div>
  );
};

export default AnimatedProjectFeed; 