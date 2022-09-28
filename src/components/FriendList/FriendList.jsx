import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';

import FriendsItem from '../FriendsItem/FriendsItem';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </Friends>
  );
  // pass as children is OK?
  // return <Friends>{friends.map(friend => FriendsItem(friend))}</Friends>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
