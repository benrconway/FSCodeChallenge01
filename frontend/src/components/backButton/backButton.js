import React from "react";

export default function BackButton() {
  return (
    <button
      onClick={() => {
        window.history.back();
      }}
    >
      {"< Back"}
    </button>
  );
}
