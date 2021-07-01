import { gql } from "@apollo/client";

export const VENUES_QUERY = gql`
  query venues {
    venues {
      id
      name
    }
  }
`;

export const VENUE_PLANS_QUERY = gql`
  query plans($venueID: ID) {
    plans(venueID: $venueID) {
      id
      pcoID
      planDate
      venue {
        id
        name
        pcoID
      }
      songs {
        id
        slot
        song_key
        song {
          id
          title
          author
          ccliNumber
        }
        leader {
          id
          fullName
        }
      }
      leaders {
        id
        leader {
          id
          fullName
        }
      }
    }
  }
`;
