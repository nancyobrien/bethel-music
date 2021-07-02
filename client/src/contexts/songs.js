import React from "react";
import { useQuery } from "@apollo/client";

import { VENUE_PLANS_QUERY, VENUES_QUERY } from "./queries";

export const SongDataContext = React.createContext();

export default function SongProvider(props) {
  const [venueID, setVenueID] = React.useState();

  const { loading: venuesLoading, data: venuesData } = useQuery(VENUES_QUERY);

  const { loading: plansLoading, data: plansData } = useQuery(
    VENUE_PLANS_QUERY,
    {
      skip: !venueID,
      variables: { venueID },
    }
  );

  React.useEffect(() => {
    if (!venueID && venuesData?.venues?.length) {
      setVenueID(venuesData?.venues[0].id);
    }
  }, [venueID, venuesData?.venues]);

  const values = React.useMemo(
    () => ({
      venueID,
      setVenueID,
      venuesLoading,
      plansLoading,
      currentVenue: venuesData?.venues?.find((v) => v.id === venueID),
      venues: venuesData?.venues || [],
      plans: plansData?.plans || [],
    }),
    [venueID, venuesLoading, plansLoading, venuesData?.venues, plansData?.plans]
  );

  return <SongDataContext.Provider {...props} value={values} />;
}

export function useSongData() {
  return React.useContext(SongDataContext);
}
