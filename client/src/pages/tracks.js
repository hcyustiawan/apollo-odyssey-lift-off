import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';
import { QueryResult } from '../components';
export const TRACKS = gql`
  query HomeTracksQuery {
    tracksForHome {
      id
      title
      author {
        photo
        name
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, loading, error } = useQuery(TRACKS)

  if (loading) return 'Loading...'
  if (error) return `ERROR: ${error.message}`

  return <Layout grid>
    <QueryResult loading={loading} data={data} error={error}>
      {
        data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))
      }
    </QueryResult>
  </Layout>
};

export default Tracks;
