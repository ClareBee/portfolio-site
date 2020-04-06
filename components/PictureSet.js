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
        width={width ? width : null}
        height={height ? height : null}
        src={require(`../images/${pictureName}`)}
        alt={altText}
        id={id}
      />
    </picture>
  );
};

export default PictureSet;
