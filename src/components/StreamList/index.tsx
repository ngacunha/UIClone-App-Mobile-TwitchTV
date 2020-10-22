import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg'

import { 
  List,
  StreamAvatar,
  StreamCategory,
  StreamColumn,
  StreamContainer,
  StreamDescription,
  StreamHeader,
  StreamRow,
  StreamThumbnail,
  StreamUsername,
  TagRow,
  TagText,
  TagView 
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>Oficial_Twitch</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com Next.js, Chakra UI e GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  )
  return (
    <List> 
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
