import clsx from "clsx";
import React from "react";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body"
    | "body-base"
    | "body-lg"
    | "caption1"
    | "caption2"
    | "caption2"
    | "caption3"
    | "caption4"
    | "body-sm";
  children: React.ReactNode;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "span" | "p";
  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string;
}

export const Typographiy = ({
  variant = "h3",
  children,
  component: Component = "div",
  theme = "black",
  weight = "medium",
  className,
}: Props) => {
  let variantStyle: string = "";
  let themeStyle: string = "";

  switch (variant) {
    case "display":
      variantStyle = " text-8xl";
      break;
    case "h1":
      variantStyle = " text-green-7xl";
      break;
    case "h2":
      variantStyle = " text-6xl";
      break;
    case "h3": // default variant style
      variantStyle = " text-5xl";
      break;
    case "h4":
      variantStyle = " text-4xl";
      break;
    case "h5":
      variantStyle = " text-3xl";
      break;
    case "lead":
      variantStyle = " text-2xl";
      break;
    case "body-lg":
      variantStyle = " text-lg";
      break;
    case "body-base":
      variantStyle = " text-base";
      break;
    case "body-sm":
      variantStyle = " text-sm";
      break;
    case "caption1":
      variantStyle = " text-caption1";
      break;
    case "caption2":
      variantStyle = " text-caption2";
      break;

    case "caption3":
      variantStyle = " text-caption3";
      break;

    case "caption4":
      variantStyle = " text-caption4";
      break;
  }
// define style for caption style and variant 
  switch (theme) {
    case "black": // black theme style
      themeStyle = "text-gray";
      break;
    case "white":
      themeStyle = "text-white";
      break;
    case "gray":
      themeStyle = "text-gray-700";
      break;
    case "primary":
      themeStyle = "text-primary";
      break;
    case "secondary":
      themeStyle = "text-secondary";
      break;

    default:
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyle,
        weight === "medium" && "font-medium",
        "text-8xl  ",
        themeStyle
      )}
    >
      {children}
    </Component>
  );
};
