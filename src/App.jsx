import SocialProfile from './components/SocialProfile/SocialProfile';

import { Wrapper } from './App.styled';
import user from './database/user';

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
    </Wrapper>
  );
}
