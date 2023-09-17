const PageButtons = ({ label, ...props }) => {
  return (
    <button className="home-button" {...props}>
      {label}
    </button>
  );
};
export default PageButtons;
