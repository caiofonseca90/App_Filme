
const ProgressBar = ({percent}) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    
  return (
    <div className="">
      <svg className="transform -rotate-90" width={radius * 2} height={radius * 2}>
        <circle
          className="stroke-gray-300"
          cx={radius}
          cy={radius}
          r={radius - 4}
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          className="stroke-blue-500"
          cx={radius}
          cy={radius}
          r={radius - 4}
          strokeWidth="8"
          fill="transparent"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
        {percent}%
      </div>
    </div>
  );
};

export default ProgressBar;
