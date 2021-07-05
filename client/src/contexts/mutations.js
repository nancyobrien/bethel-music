import { gql } from "@apollo/client";

export const ARCHIVE_SONG = gql`
  mutation archivePlanSong($id: Int!, $archived: Boolean) {
    archivePlanSong(id: $id, archived: $archived) {
      id
      archived
    }
  }
`;

export const  ARCHIVE_PLAN = gql`
  mutation archivePlan($id: Int!, $archived: Boolean) {
    archivePlan(id: $id, archived: $archived) {
      id
      archived
    }
  }
`;
