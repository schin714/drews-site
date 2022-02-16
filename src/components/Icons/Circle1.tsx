interface CircleProps {
  size: string;
  color: string;
}

const Circle1 = ({ size, color }: CircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 379 379"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="189.5" cy="189.5" r="189.5" fill={color} />
    </svg>
  );
};

export default Circle1;
