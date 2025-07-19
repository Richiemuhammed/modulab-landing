import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackdropProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ open, onClose, children }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        {/* Prevent click from closing when clicking inside modal content */}
        <div onClick={e => e.stopPropagation()} className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Backdrop; 