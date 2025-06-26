import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled, { CSSObject } from "styled-components";

interface ModalProps {
  isOpen: boolean;
  close?: () => void;
  children: React.ReactNode;
  customStyle?: CSSObject;
  $background?: boolean;
}

export const LegacyModal = ({ isOpen, close, children, customStyle, $background }: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let existingModalRoot = document.getElementById("modal");

    if (!existingModalRoot) {
      existingModalRoot = document.createElement("div");
      existingModalRoot.id = "modal";
      document.body.appendChild(existingModalRoot);
    }

    setModalRoot(existingModalRoot);

    return () => {
      if (!document.getElementById("modal")?.hasChildNodes()) {
        existingModalRoot?.remove();
      }
    };
  }, []);

  if (!isOpen || !modalRoot) return null;
  return ReactDOM.createPortal(
    <Background onClick={close} customStyle={customStyle} $background={$background}>
      {children}
    </Background>,
    modalRoot
  );
};

export const Background = styled.div<{ 
  customStyle?: CSSObject;
  $background?: boolean;
}>`
  ${({ customStyle }) => customStyle && Object.entries(customStyle)
    .map(([key, value]) => `${key}: ${value} !important;`)
    .join("\n")
  };

  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  ${({ $background }) => $background ? `background-color: rgba(0, 0, 0, 0.4);` : `background-color: transparent;`};
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0;
  overflow: auto;
`;