import React from "react";

import SongsData from "./songs";

// Add new context providers here, and they will be composed together in render
// The first entry in the array will be the outermost context
const providers = [SongsData];

export default function Contexts({ children }) {
  const reversedProviders = [...providers].reverse(); //don't mutate the original, or it can flop back to unreversed
  return reversedProviders.reduce(
    (composition, Provider) => <Provider children={composition || children} />,
    false
  );
}
