import SocialProfile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import { Wrapper } from './App.styled';
import user from './database/user';
import data from './database/data';
import friends from './database/friends';
import transactions from './database/transactions';

export default function App() {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Wrapper>
      <SocialProfile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
}
