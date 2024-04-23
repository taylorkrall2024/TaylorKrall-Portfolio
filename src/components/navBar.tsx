"use client";

import { DarkThemeToggle, Navbar } from "flowbite-react";

export function Navigation() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Taylor Krall</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle></DarkThemeToggle>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}