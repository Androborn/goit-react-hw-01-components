import PropTypes from 'prop-types';
import {
  Profile,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Followers,
  Views,
  Likes,
  Label,
  Quantity,
} from './SocialProfile.styled';

export default function SocialProfile({
  username,
  tag,
  location,
  avatar,
  stats,
}) {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Followers>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Followers>
        <Views>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Views>
        <Likes>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Likes>
      </Stats>
    </Profile>
  );
}

// change stats to collection? (+keys!)

SocialProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  // stats: PropTypes.shape({
  //   followers: PropTypes.number.isRequired,
  //   views: PropTypes.number.isRequired,
  //   likes: PropTypes.number.isRequired,
  // }).isRequired,
};
