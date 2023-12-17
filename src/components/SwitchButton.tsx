import { ReactNode, useState } from 'react';

interface SwitchButtonProps{
  contentChecked: string | ReactNode;
  contentUnchecked: string | ReactNode;
  bgColor: string;
  onSwitch(): void;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({contentChecked, contentUnchecked, bgColor, onSwitch}) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
    onSwitch();
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer mr-2">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={toggleChecked} />
      <div className={`w-14 h-7 ${bgColor} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:${bgColor}`}></div>
      <span className={`absolute text-sm ${checked ? 'left-2 text-white' : 'right-2 text-white'}`}>{checked ? contentChecked : contentUnchecked}</span>
    </label>
  );
};

export default SwitchButton;