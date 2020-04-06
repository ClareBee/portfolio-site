import PropTypes from 'prop-types';
const PictureSet = ({
  pictureName,
  styleSelector,
  id,
  altText,
  width,
  height,
}) => {
  return (
    <picture>
      <source
        srcSet={require(`../images/${pictureName}?webp`)}
        type="image/webp"
      />
      <source
        srcSet={require(`../images/${pictureName}`)}
        type="image/png"
      />
      <img
        className={styleSelector}
        width={width}
        height={height}
        src={require(`../images/${pictureName}`)}
        alt={altText}
        id={id}
      />
    </picture>
  );
};

PictureSet.propTypes = {
  pictureName: PropTypes.string.isRequired,
  styleSelector: PropTypes.string,
  altText: PropTypes.string.isRequired,
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.height,
};

export default PictureSet;
