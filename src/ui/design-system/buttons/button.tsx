import React from "react";
import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "desabled" | "icon";
  icon?: any;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  desabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  desabled,
  isLoading,
  children,
}: Props) => {
  let variantStyle: string = "",
    sizeSTyle: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "accent": // default variant is accent
      variantStyle = " bg-primary hover:bg-primary-400 text-white rounded";
      break;

    case "secondary": // default variant is accent
      variantStyle = " bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;

    case "icon":
        if (iconTheme === "accent") {
            variantStyle = "bg-primary hover:bg-primary-400 text-white rounded-full"
        }

        if (iconTheme === "secondary") {
            variantStyle = "bg-primary-200 hover:bg-primary-300/50 text-primary rounde-full"
        }

        if (iconTheme === "gray") {
            variantStyle = "bg-primary-700 hover:bg-gray-600 text-primary rounde-full"
        }

      break;

    case "outline":
      variantStyle = " bg-white hover:bg-gray-400/50 rounded border border-gray-500 text-gray-900";
      break;

    case "desabled":
      variantStyle = " bg-gray-400 boder  border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    
    
  }
// for put in the default variant style for the outline variant  
  switch (size) {
    case "large":
      sizeSTyle = " font-medium text-caption1 px-[22px] py-[18px] ";
      break;
    case "small":
      sizeSTyle = " font-medium text-caption3 px-[14px] py-[12px]";
      break;
    case "medium": // default style 
      sizeSTyle = " font-medium text-caption2 px-[18px] py-[15px]";
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(variantStyle, iconSize, sizeSTyle,"")}
        onClick={() => console.log("click clicked")}
        disabled={desabled}
      >

        {icon && variant === "icon" ?
        
        (<>
        
        </>) :
        
        (<>{children}</>) }

        
      </button>
    </>
  );
};
