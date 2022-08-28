import React from 'react';

export default function IconsAside(props) {
  const { open, index, item } = props;
  return(
    <li className={`py-1 w-full hover:bg-g-transp flex ${
      open
        ? 'mt-0'
        : index === 0 ? 'mt-16' : 'mt-3'}`}>
      <div className={`flex justify-center items-center ${open ? 'w-1/3 text-base' : 'w-1/2 text-xl'}`}>
        <i class={`${open ? 'pl-2 transition-spacing' : 'transition-spacing pl-6'} fa-solid ${item.icon} text-center `} />
      </div>
      <span className={`w-2/3 ${open ? 'w-2/3 delay-75 opacity-1 transition-opacity' : 'w-0 opacity-0 duration transition-opacity'}`}>
        { item.name }
      </span>
    </li>
  );
}