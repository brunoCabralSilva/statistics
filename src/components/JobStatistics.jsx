import React from 'react';

export default function JobStatistics() {
  return(
    <div>
      <div className="flex flex-row justify-between items-center">
        <p className="pt-8 pb-6 font-bold">Job Statistics</p>
        <div className="flex flex-row">
          <input type="date" clasName="text-gray-500 text-sm" />
          <button type="button" className="text-white ml-2 px-2 py-1 text-sm rounded bg-green-site">
            <i class="fa-solid fa-arrow-up pr-1"></i>
            Export
          </button>
        </div>
      </div>
      <div className="rounded-xl w-full h-48 border border-gray-300 flex flex-row">
      </div>
    </div>
  );
}