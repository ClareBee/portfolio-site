const PageTitle = ({ title, subtitle }) => (
  <div className="page-title">
    <h1 className="heading-1">{title}</h1>
    <hr className="page-title__divider" />
    <h4 className="heading-4">{subtitle}</h4>
  </div>
);

export default PageTitle;
