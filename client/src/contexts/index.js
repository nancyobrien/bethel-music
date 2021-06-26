import React from "react";

import Notifications from "./notifications";
import DocumentSearch from "./documentSearch";
import Document from "./document";
import Visualizations from "./visualizations";
import Favorites from "./favorites";

// Add new context providers here, and they will be composed together in render
// The first entry in the array will be the outermost context
const providers = [
  Notifications,
  DocumentSearch,
  Document,
  Visualizations,
  Favorites,
];

export default function Contexts({ children }) {
  const reversedProviders = [...providers].reverse(); //don't mutate the original, or it can flop back to unreversed
  return reversedProviders.reduce(
    (composition, Provider) => <Provider children={composition || children} />,
    false
  );
}
