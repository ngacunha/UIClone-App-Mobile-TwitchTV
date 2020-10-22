import React from "react";
import { FlatList, Text, View } from "react-native";
import CategoryList from "../../components/CategoryList";
import ChannelList from "../../components/ChannelList";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import StreamList from "../../components/StreamList";
import Title from "../../components/Title";

import { Container, Main, Wrapper } from "./styles";

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const {data, indicesWithTitle} = React.useMemo(() => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },
      {
        key: "FOLLOWED_CATEGORIES",
        render: () => <Title>Followed Categories</Title>,
        isTitle: true
      },
      {key: "C1", render: () => <CategoryList /> },
      {
        key: "LIVE_CHANNELS",
        render: () => <Title>Live Channels</Title>,
        isTitle: true
      },
      {key: "C2", render: () => <StreamList /> },
      {
        key: "CONTINUE_WATCHING",
        render: () => <Title>Continue Wathing</Title>,
        isTitle: true
      },
      {key: "C3", render: () => <StreamList /> },
      {
        key: "OFFLINE_CHANNELS",
        render: () => <Title>Offline Channels</Title>,
        isTitle: true
      },
      {key: "C4", render: () => <ChannelList /> },
    ];
    const indicesWithTitle: number[] = [];

    items.forEach((item, index) => item.isTitle && indicesWithTitle.push(index))

    return {
      data: items,
      indicesWithTitle,
    }
  }, []);
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({item}) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indicesWithTitle}

            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
