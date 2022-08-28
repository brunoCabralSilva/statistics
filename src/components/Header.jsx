import React from 'react';

export default function Header() {
  return(
    <div className="flex flex-row justify-between items-center mt-2">
      <div className="w-80% flex flex-row justify-between">
        <input type="text" className="ml-2 w-1/2"placeholder="Search something" />
        <i class="fa-solid fa-bell px-2"></i>
      </div>
      <div className="flex flex-row items-center w-17%">
        <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
        <div className="p-2 flex flex-col py-1 justify-center">
          <p className="text-sm">Gabe Lackmen<br />
          <span className="text-gray-600 text-sm">Admin</span>
          </p>
        </div>
      </div>
    </div>
  );
}