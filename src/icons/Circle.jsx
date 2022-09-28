const Circle = (props) => (
  <svg width={10} height={10} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={5} cy={5} r={5} {...props} />
  </svg>
);

export default Circle;
