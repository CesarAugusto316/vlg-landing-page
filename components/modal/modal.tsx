'use client'
import React, { FC, useEffect, useRef } from 'react';
import { animated, useTransition } from '@react-spring/web';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const ref = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    if (ref.current) {
      document.body.appendChild(ref.current);
    }
  }, []);

  const transition = useTransition(isOpen, {
    from: {
      y: '300%',
      opacity: 0.3,
    },
    enter: {
      y: '0%',
      opacity: 1,
    },
    leave: {
      y: '300%',
      opacity: 0,
    },
    config: {
      tension: 260,
      mass: 1.40
    }
  });

  const AnimatedModal: FC = () => transition((style, isOpen) => (
    isOpen && (
      <animated.div onClick={onClose} style={{ opacity: style.opacity }} className={styles.backdrop}>
        <animated.div onClick={(e) => e.stopPropagation()} style={style} className={styles.container}>
          {children}
        </animated.div>
      </animated.div>
    )
  ));

  return (
    createPortal(<AnimatedModal />, ref.current)
  );
};
