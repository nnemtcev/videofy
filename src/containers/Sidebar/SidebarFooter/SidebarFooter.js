import React from "react";
import "./SidebarFooter.scss";

export function SidebarFooter() {
  return (
    <React.Fragment>
      <div className="footer-block">
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </div>
      <div className="footer-block">
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new features</div>
      </div>
      <div className="footer-block">
        <div>All prices include VAT</div>
      </div>
      <div className="footer-block">
        <div>© Videofy - Made by Nick Nemtcev</div>
      </div>
    </React.Fragment>
  );
}
