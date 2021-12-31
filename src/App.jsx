import SocialProfile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

import { Wrapper } from './App.styled';
import user from './database/user';
import data from './database/data';
import friends from './database/friends';

export default function App() {
  return (
    <Wrapper>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </Wrapper>
  );
}
