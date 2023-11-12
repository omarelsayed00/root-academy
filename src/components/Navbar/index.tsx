import { NextPage } from "next";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { BackDrop } from "./styles";
import { createPortal } from "react-dom";

const Backdrop: NextPage<{ onClose: () => void }> = ({ onClose }) => {
  return <BackDrop onClick={onClose} />;
};

const NavbarModal: FC<{ onClose: () => void; children: ReactNode }> = ({
  children,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);

  const backdrop = document.querySelector("#backdrop-root")!;
  const modal = document.querySelector("#modal-root")!;

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted ? createPortal(<Backdrop onClose={onClose} />, backdrop) : null}
      {mounted ? createPortal(children, modal) : null}
    </>
  );
};

export default NavbarModal;
