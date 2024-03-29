'use client';

import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const hashIndex = props.href.toString().indexOf('#');
    if (
        hashIndex !== -1 &&
        window.location.pathname === props.href.toString().slice(0, hashIndex)
    ) {
        e.preventDefault();
        //remove everything before the hash
        const targetId = e.currentTarget.href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        window.scrollTo({
        top: elem?.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
        });
    }
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;