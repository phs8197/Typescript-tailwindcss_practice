import React from "react";
import Logo from "../img/logo.png";
import LogoWhite from "../img/logo_white.png";
import Button from "./Button";

interface NavProps {
  dark: boolean;
  moveScroll: (scroll: number) => void;
}

function Nav(props: NavProps) {
  return (
    <div
      className={`top-0 z-10 fixed w-full flex columns h-32 pt-5 ${
        props.dark === true
          ? "text-primary"
          : "text-secondary transition-colors"
      } `}
      onClick={() => props.moveScroll(980)}
    >
      {" "}
      <header className="w-1/4 flex justify-center items-center">
        <img
          src={`${props.dark === true ? Logo : LogoWhite}`}
          style={{ width: "73px", height: "85px" }}
        ></img>
      </header>
      <ul className="flex w-2/4 justify-evenly items-center">
        <li className="cursor-pointer">ABOUT</li>
        <li className="cursor-pointer">SHOP</li>
        <li className="cursor-pointer">COFFEE</li>
        <li className="cursor-pointer">CONTACT</li>
      </ul>
      <ul className="flex w-1/4 justify-center items-center">
        <Button dark={props.dark} transparent={true}>
          LOGIN
        </Button>
        <Button dark={props.dark} transparent={false}>
          JOIN
        </Button>
      </ul>
    </div>
  );
}

export default Nav;
