import PropTypes from 'prop-types';
import colorRandomizer from '../../services/colorRandomizer';
import {
  StatSection,
  Title,
  Stats,
  StatItem,
  StatLabel,
  StatNumber,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

      <Stats>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: colorRandomizer() }}>
            <StatLabel>{label}</StatLabel>
            <StatNumber>{percentage}%</StatNumber>
          </StatItem>
        ))}
      </Stats>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
