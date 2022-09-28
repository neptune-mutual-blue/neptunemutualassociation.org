const Cross = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19 1 1 19M1 1l18 18" stroke="#fff" />
  </svg>
);

export default Cross;
