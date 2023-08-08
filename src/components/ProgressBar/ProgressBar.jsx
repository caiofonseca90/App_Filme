const ProgressBar = ({ percent }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 10) * circumference;

  let colorClass = "text-neutral-100"; // Default color class
  let strokeClass = "text-neutral-100"; // Default color class
  let strokeClass3d = "text-neutral-100"; // Default color class

  // Change color based on the percent value
  if (percent <= 4) {
    colorClass = "text-red-500"; // Red color class
    strokeClass = "stroke-red-500"; // Red color class
    strokeClass3d = "stroke-red-600"; // Yellow color class
  } else if (percent >= 4.1 && percent <= 6.9) {
    colorClass = "text-yellow-500"; // Yellow color class
    strokeClass = "stroke-yellow-400"; // Yellow color class
    strokeClass3d = "stroke-yellow-600"; // Yellow color class
  } else if (percent >= 7) {
    colorClass = "text-green-500"; // Green color class
    strokeClass = "stroke-green-500"; // Green color class
    strokeClass3d = "stroke-green-700"; // Yellow color class
  }

  return (
    <div className="relative bg-slate-900 rounded-full p-1 shadow-lg cursor-pointer hover:scale-105 duration-100">
      <svg className="transform -rotate-90" width={radius * 2} height={radius * 2}>
        <circle
          className={`stroke-slate-400 shadow-lg `}
          cx={radius}
          cy={radius}
          r={radius - 4}
          strokeWidth="6"
          fill="transparent"
        />
        <circle
          className={`transition-all ${strokeClass} shadow-lg`}
          cx={radius}
          cy={radius}
          r={radius - 4}
          strokeWidth="7"
          fill="transparent"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
        {/* 3d */}
        <circle
          className={`transition-all ${strokeClass3d} shadow-sm ` }
          cx={radius}
          cy={radius}
          r={radius - 4}
          strokeWidth="4"
          fill="transparent"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-[1rem] ${colorClass} transition-all`}>
        {percent}%
      </div>
    </div>
    
  );
};

export default ProgressBar;

