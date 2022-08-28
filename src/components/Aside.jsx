import React, { useState } from 'react';
import IconsAside from './IconsAside';

export default function Aside() {
  const [open, setOpen] = useState(true);
  const hiddeItems = () => {
    if(open) {
      return "flex";
    } return "hidden";
  }

  const arrayMenu = [ 
    {
      icon:'fa-house',
      name: 'Overview',
    },
    {
      icon:'fa-file',
      name: 'Payroll',
    },
    {
      icon:'fa-user',
      name: 'Employees',
    },
    {
      icon:'fa-briefcase',
      name: 'Jobs',
    },
    {
      icon:'fa-users',
      name: 'Candidates',
    },
    {
      icon:'fa-calendar-days',
      name: 'Calendar',
    },

    {
      icon:'fa-gear',
      name: 'Settings',
    },

    {
      icon:'fa-circle-question',
      name: 'Help Center',
    }
  ];

  return(
    <aside className={`${open ? 'w-10%' : 'w-5%'} transition duration-1000 transition-width h-full border-r border-gray-300`}>
      <div className="flex flex-row items-center">
        <div className='pl-4 w-12' onClick={() => setOpen(!open)}>
          <img src={require("../images/v.png")} alt="icon Zeflow" className={`${open ? 'pt-0' : 'pt-3'} w-full object-cover`} />
        </div>
        <p className={`pl-4 p-4 font-bold ${hiddeItems()}`}>ZDN</p>
      </div>
      <hr className={`w-full ${hiddeItems()}`} />
      <p className={`pl-4 pt-4 pb-2 text-gray-500 ${hiddeItems()}`}>General</p>
      <ul className="pb-3 flex flex-col text-gray-800 text-sm">
        {
          arrayMenu.filter((item, index) => index <= 5).map((item, index) => (
            <IconsAside open={open} index={index} item={item} />
          ))
        }
      </ul>
      <hr className={`w-full py-2 ${hiddeItems()}`} />
      <p className={`pl-4 pt-4 pb-2 text-gray-500 ${hiddeItems()}`}>
        Support
      </p>
      <ul className="flex-col text-gray-800 text-sm">
        {
          arrayMenu.filter((item, index) => index > 5).map((item, index) => (
            <IconsAside open={open} index={index} item={item} />
          ))
        }
      </ul>
    </aside>
  );
}