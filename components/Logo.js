import React, { Component } from "react";
import Link from "next/link";
import "./Logo.scss";

export function Logo(props) {
  const { logoSrc, logoAlt = "Logo", onClick, collapsed, scrolling } = props;

  return (
    <div
      className={`navi-logo ${scrolling ? "scrolling" : ""} ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <Link href="/">
        <img src={logoSrc} alt={logoAlt} onClick={onClick} />
      </Link>
    </div>
  );
}

export default Logo;
