import { gql } from "@apollo/client";

export const VENUES_QUERY = gql`
  query venues {
    venues {
      id
      pcoID
      name
    }
  }
`;

export const VENUE_PLANS_QUERY = gql`
  query plans($venueID: ID!) {
    plans(venueID: $venueID) {
      id
      pcoID
      url
      planDate
      archived
      venue {
        id
        name
        pcoID
      }
      songs {
        id
        slot
        song_key
        archived
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
