import React from "react";
import { useMutation, useQuery } from "@apollo/client";

import { VENUE_PLANS_QUERY, VENUES_QUERY } from "./queries";
import { ARCHIVE_PLAN, ARCHIVE_SONG } from "./mutations";

export const SongDataContext = React.createContext();

export default function SongProvider(props) {
  const [venueID, setVenueID] = React.useState();

  const { loading: venuesLoading, data: venuesData } = useQuery(VENUES_QUERY);

  const {
    loading: plansLoading,
    data: plansData,
    refetch: refetchPlans,
  } = useQuery(VENUE_PLANS_QUERY, {
    skip: !venueID,
    variables: { venueID },
  });

  React.useEffect(() => {
    if (!venueID && venuesData?.venues?.length) {
      setVenueID(venuesData?.venues[0].id);
    }
  }, [venueID, venuesData?.venues]);

  const [archivePlan] = useMutation(ARCHIVE_PLAN);
  const [archiveSong] = useMutation(ARCHIVE_SONG);

  const values = React.useMemo(
    () => ({
      venueID,
      setVenueID,
      venuesLoading,
      plansLoading,
      currentVenue: venuesData?.venues?.find((v) => v.id === venueID * 1),
      venues: venuesData?.venues || [],
      plans: plansData?.plans || [],
      refetchPlans,
      archivePlan,
      archiveSong,
    }),
    [
      venueID,
      venuesLoading,
      plansLoading,
      venuesData?.venues,
      plansData?.plans,
      refetchPlans,
      archivePlan,
      archiveSong,
    ]
  );

  return <SongDataContext.Provider {...props} value={values} />;
}

export function useSongData() {
  return React.useContext(SongDataContext);
}
