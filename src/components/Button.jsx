import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg bg-gradient-to-r from-[#3652e1] to-[#7e56f3] active:scale-[0.96] ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
