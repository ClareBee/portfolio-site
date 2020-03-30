import { FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

function AccordionItem({ item, index, toggleItem }) {
  return (
    <div
      key={item.id}
      className={
        item.expanded ? 'accordion__item expanded' : 'accordion__item'
      }
      onClick={() => toggleItem(index)}
    >
      <div className="accordion__question">
        <span className="accordion__chevron">
          <FaChevronRight />
        </span>

        {item.question}
      </div>
      <div className="accordion__answer">{item.answer}</div>
    </div>
  );
}

AccordionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    expanded: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }),
  index: PropTypes.number,
  toggleItem: PropTypes.func,
};
export default AccordionItem;
