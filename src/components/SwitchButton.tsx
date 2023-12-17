import { ReactNode, useState } from 'react';

interface SwitchButtonProps{
  contentChecked: string | ReactNode;
  contentUnchecked: string | ReactNode;
  colorChecked: string;
  colorUnchecked: string;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({contentChecked, contentUnchecked, colorChecked, colorUnchecked}) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer mr-2">
      <input type="checkbox" value="" className="sr-only peer" checked={checked} onClick={toggleChecked} />
      <div className={`w-14 h-7 ${colorUnchecked} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:${colorChecked}`}></div>
      <span className={`absolute text-xs ${checked ? 'left-2 text-white' : 'right-2 text-gray-600'}`}>{checked ? contentChecked : contentUnchecked}</span>
    </label>
  );
};

export default SwitchButton;