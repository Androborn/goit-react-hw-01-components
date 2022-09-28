import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendsItem.styled';

export default function FriendsItem({ isOnline, avatar, name }) {
  return (
    <Friend>
      <Status status={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Friend>
  );
}

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
