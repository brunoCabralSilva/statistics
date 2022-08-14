import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Login() {
    const [open, setOpen] = useState(true);

    const showMenu = () => {
      setOpen(!open);
    }

    const hiddeMenu = () => {
      if(open) {
        return "w-10% transition duration-1000";
      } return "w-5% transition duration-1000";
    }

    const hiddeItems = () => {
      if(open) {
        return "flex";
      } return "hidden";
    }

    const paddingHidden = () => {
      if(open) {
        return "pt-0";
      } return "pt-3";
    }

    return (
      <main className="h-screen flex flex-row">
        <aside className={`${ hiddeMenu() } h-full border-r border-gray-300`}>
          <div className="flex flex-row items-center">
            <div className='pl-4 w-12' onClick={showMenu}>
              <img src={require("../images/v.png")} alt="" className={`${paddingHidden()} w-full object-cover`} />
            </div>
            <p className={`pl-4 p-4 font-bold ${hiddeItems()}`}>Zeflow</p>
          </div>
          <hr className={`w-full ${hiddeItems()}`} />
          <p className={`pl-4 pt-4 pb-2 text-gray-500 ${hiddeItems()}`}>General</p>
          <ul className={`pb-3 flex-col text-gray-800 text-sm ${hiddeItems()}`}>
            <li className="py-1 w-full hover:bg-g-transp"><i class="fa-solid fa-house w-1/3 text-center"></i><span className="w-2/3">Overview</span></li>
            <li className="py-1 w-full hover:bg-g-transp"><i class="fa-solid fa-file w-1/3 text-center"></i><span className="w-2/3">Payroll</span></li>
            <li className="py-1 w-full hover:bg-g-transp"><i class="fa-solid fa-user w-1/3 text-center"></i><span className="w-2/3">Employees</span></li>
            <li className="py-1 w-full hover:bg-g-transp"><i class="fa-solid fa-briefcase w-1/3 text-center"></i><span className="w-2/3">Jobs</span></li>
            <li className="py-1 w-full hover:bg-g-transp"><i class="fa-solid fa-users w-1/3 text-center"></i><span className="w-2/3">Candidates</span></li>
            <li className="py-1 w-full hover:bg-g-transp"><i class="fa-solid fa-calendar-days w-1/3 text-center"></i><span className="w-2/3">Calendar</span></li>
          </ul>
          <hr className={`w-full py-2 ${hiddeItems()}`} />
          <p className={`pl-4 pt-4 pb-2 text-gray-500 ${hiddeItems()}`}>Support</p>
          <ul className={`flex-col text-gray-800 text-sm ${hiddeItems()}`}>
          <li className="py-1 w-full hover:bg-g-transp"><i class="fa-solid fa-gear w-1/3 text-center"></i><span className="w-2/3">Settings</span></li>
            <li className="py-1 w-full hover:bg-g-transp"><i class="fa-solid fa-circle-question w-1/3 text-center"></i><span className="w-2/3">Help Center</span></li>
          </ul>
        </aside>
        <section className="w-full h-full px-10">
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
            <hr className='w-full' />
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
              <div className='flex flex-col w-22%'>
                <div className="w-full h-1/2">
                  Total Employees
                  300
                  Employee
                  </div>
                  <hr className="w-full" />
                <div className="w-full h-1/2">
                  Job View
                  4400
                  Viewers
                  </div>
              </div>
              <hr className="h-full w-2"/>
              <div className='flex flex-col w-22%'>
                <div className="w-full h-1/2">
                  Resigned Employees
                  23
                  Employee
                </div>
                <hr className="w-full" />
                <div className="w-full h-1/2">
                  Job Applied
                  1266
                  Applicants
                </div>
              </div>
              <div className="w-60% bg-gray-200">Job Statistics</div>
            </div>
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
            <div className="rounded-xl w-full h-full  border border-gray-300 my-4 flex flex-row">

            </div>
        </section>
      </main>
    );
  }

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Login;
