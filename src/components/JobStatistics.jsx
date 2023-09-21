import React from 'react';
import { Chart } from 'react-google-charts';


export const data = [
  ['Biblotecas', 'Número de Usuários'],
  ['React', 151],
  ['Vue', 161],
  ['Angular', 101],
  ['Bootstrap', 151],
  ['Taiwind', 14],
];

const options = {
  title: "Bibliotecas",
  is3D: true,
}

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
          <Chart
            chartType="PieChart"
            data={ data }
            options={ options }
            width={"50%"}
            height={"100%"}
          />
          <Chart
            chartType="ColumnChart"
            data={ data }
            options={ options }
            width={"50%"}
            height={"100%"}
          />
          <Chart
            chartType="BarChart"
            data={ data }
            options={ options }
            width={"50%"}
            height={"100%"}
          />
      </div>
    </div>
  );
}