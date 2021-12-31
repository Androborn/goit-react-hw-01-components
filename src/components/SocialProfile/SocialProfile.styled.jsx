import styled from 'styled-components';

export const Profile = styled.div`
  width: 25vw;
  text-align: center;
  display: block;
  overflow: hidden;
  border-radius: 0.5em;
  box-shadow: 1px 1px 2px 1px rgba(34, 60, 80, 0.2);
  margin-bottom: 2em;
`;

export const Description = styled.div`
  background-color: #ffffff;
  padding: 2em 0;
`;

export const Avatar = styled.img`
  margin: 0 auto 2em;
  width: 50%;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
  color: #1f3349;
`;

export const Tag = styled.p`
  margin-bottom: 0.5em;
  color: #768696;
`;

export const Location = styled(Tag)``;

export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid #e4e9f0;
  background-color: #f3f6f9;
`;

export const Followers = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: calc(100% / 3);
  height: 5em;
  border-right: 1px solid #e4e9f0;
  background-color: #f3f6f9;
`;

export const Views = styled(Followers)``;

export const Likes = styled(Followers)`
  border: none;
`;
// how to apply "not n-th child"?

export const Label = styled.span`
  color: #768696;
`;

export const Quantity = styled.span`
  font-weight: bold;
  color: #1f3349;
`;
