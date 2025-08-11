import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logof from "./logof.jpg";

const App = () => {
  // first section usestate //
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [selectedDate4, setSelectedDate4] = useState(null);

  //################ EARN LEAVE CALCULATION ####################//

  const [totalWorkingDay, setTotalWorkingDay] = useState<string>("");
  const [totalLeave, setTotalLeave] = useState<number>(0);
  const [useTotalLeave, setUseTotalLeave] = useState<string>("");
  const [remaingLeave, setRemaingLeave] = useState<number>(0);
  const [perDayRate, setPerDayRate] = useState<number>(0);
  const [totalEarnLeaveAmount, setTotalEarnLeaveAmount] = useState<number>(0);

  useEffect(() => {
    const workingDayNum = Number(totalWorkingDay) || 0;
    const useLeaveNum = Number(useTotalLeave) || 0;

    const calculatedTotalLeave = workingDayNum / 18;
    setTotalLeave(Number(calculatedTotalLeave.toFixed(2)));

    const calculatedRemainingLeave = calculatedTotalLeave - useLeaveNum;
    setRemaingLeave(Number(calculatedRemainingLeave.toFixed(2)));

    const basicSalary = 7400  ; // Example basic salary
    const calculatedPerDayRate = basicSalary / 30;
    setPerDayRate(Number(calculatedPerDayRate.toFixed(2)));

    const calculatedEarnLeaveAmount =
      calculatedRemainingLeave * calculatedPerDayRate;
    setTotalEarnLeaveAmount(Number(calculatedEarnLeaveAmount.toFixed(2)));
  }, [totalWorkingDay, useTotalLeave]);

  // Helper to handle number input and vanish 0
  const handleNumberInput = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (value === "0") setValue("");
    else setValue(value);
  };

  //##################### END EARN LEAVE CALCULATION ####################//

  return (
    <div className="container mx-auto shadow-md bg-white rounded-sm pb-6">
      <section className="flex items-center justify-between">
        <div className="flex flex-col text-center py-4 w-full  ml-[19px]">
          <h1 className="text-[22px] font-bold  text-center md:text-left">
            DEBONAIR LIMITED | ORBITEX KNITWEAR LIMITED
          </h1>
          <p className="text-center md:text-left">
            Gorat, Zirabo, Ashulia-Dhaka-1341
          </p>
          <p className="text-[14px] text-center md:text-left font-bold">
            {" "}
            Employee Final Settlement
          </p>
        </div>
        <div className="  mr-[14px] hidden md:block">
          <img src={logof} alt="" className="w-[140px] " />
        </div>
      </section>

      {/*  first section done */}
      <section className="text-gray-600 body-font py-1">
        <div className="container px-5 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Employee Resignation Information and Related Dates.
            </h3>
            <div className=" py-2 px-1 border ">
              <select
                id="resign_type"
                className="border py-[7px] font-bold border-gray-300  text-gray-600 text-base  font-400 w-full focus:outline-none"
              >
                <option value="Resign" selected>
                  {" "}
                  SELECT YOUR COMPANY{" "}
                </option>
                <option value="DL">DEBONAIR LIMITED </option>
                <option value="OKL">ORBITEX KNITWEAR LIMITED</option>
                <option value="FKL">FRIENDS KNITING LIMITED </option>
                <option value="DL-2">DEBONAIR LIMITED UINIT-2</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-0">
            {/* Left Column (70%) */}
            <div className="w-full md:w-[60%]">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-t border-gray-300">
                      <th className="font-bold text-[12px] py-[4px] px-[4px]">ID NO</th>
                      <td className="py-[4px] px-[4px]">
                        <div className="relative">
                          <input
                            type="number"
                            className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                            placeholder="Enter employee id...."
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  text-[12px] w-1/3 py-[4px] px-[4px]">
                        Name:
                      </th>
                      <td className="py-[6px] px-[4px]">
                        <input
                          type="text"
                          disabled
                          className="w-full   px-1 text-[12px] py-[6px] shadow-xs  bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          value={"Md. Manik Ali"}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px]  py-[4px] px-[4px]">
                        Designation:
                      </th>
                      <td className="py-[6px] px-[4px]">
                        <input
                          type="text"
                          disabled
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          value={"Senior Officer"}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  text-[12px] py-[4px] px-[4px]">
                        Sub Section:
                      </th>
                      <td className="py-[5px] px-[4px]">
                        <div className="relative">
                          <input
                            type="text"
                            disabled
                            className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                            value={"Accounts"}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px]  py-[4px] px-[4px]">
                        Joining Date:
                      </th>
                      <td className="py-[6px] px-[4px]">
                        <div className="w-full">
                          <input
                            type="text"
                            disabled
                            className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                            value={"10-05-2024"}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="font-bold text-[12px] py-[4px] px-[4px]">
                        Type of Resignation:
                      </th>
                      <td className="py-[3.5px] px-[4px]">
                        <div className="relative">
                          <select
                            id="resign_type"
                            className="border py-[7px] font-bold border-gray-300 text-gray-600 text-base  font-400 w-full focus:outline-none"
                          >
                            <option value="Resign">RESIGN</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column (30%) */}
            <div className="w-full md:w-[40%]">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="font-bold  px-[4px] text-[12px]">Date:</th>
                      <td className="px-[4px] py-[4px]">
                        <div className="w-full">
                          <DatePicker
                            selected={selectedDate4}
                            onChange={(date: any) => setSelectedDate4(date)}
                            dateFormat="dd/MM/yyyy"
                            className=" text-[11px] font-bold border py-[7px] w-[361px] border-gray-300 px-[4px]   focus:outline-none"
                            placeholderText="DD-MM-YYYY"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className=" font-bold text-[12px]   px-[4px] py-[4px]">
                        Section:
                      </th>
                      <td className="px-[4px] py-[4px]">
                        <input
                          type="text"
                          disabled
                          className="w-full  px-1 text-[12px] py-[7px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          value={"Accounts"}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px]  px-[4px]">
                        Resignation Date:
                      </th>
                      <td className="px-[4px] py-[4px]">
                        <div className="w-full">
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date: any) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className=" px-[4px] border w-[361px] font-bold py-[7px] border-gray-300 text-[11px]  focus:outline-none"
                            placeholderText="DD-MM-YYYY"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px]  px-[4px]">Effective Date:</th>
                      <td className="px-[4px] py-[4px]">
                        <div className="w-full">
                          <DatePicker
                            selected={selectedDate2}
                            onChange={(date: any) => setSelectedDate2(date)}
                            dateFormat="dd/MM/yyyy"
                            className=" px-[4px] text-[11px] w-[361px] py-[7px] font-bold border border-gray-300  focus:outline-none"
                            placeholderText="DD-MM-YYYY"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] px-[4px] py-[4px]">
                        Salary Payment Date:
                      </th>
                      <td className="px-[4px] py-[4px]">
                        <div className="w-full">
                          <DatePicker
                            selected={selectedDate3}
                            onChange={(date: any) => setSelectedDate3(date)}
                            dateFormat="dd/MM/yyyy"
                            className=" px-[4px] text-[11px] w-[361px] py-[7px] font-bold border border-gray-300  focus:outline-none"
                            placeholderText="DD-MM-YYYY"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  px-[4px] py-[4px] text-[12px]">
                        Month Name:
                      </th>
                      <td className="px-[4px] py-[4px] font-bold">
                        <input
                          type="text"
                          disabled
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          value={"February-2025"}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end first section */}

      {/* salary information with leave, absent days section */}

      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Salary and Attendance Summary.
            </h3>
          </div>
          <div className="flex flex-wrap gap-0">
            {/* Box 1 */}
            <div className="w-full lg:w-1/4">
              <div className="h-full  bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="font-bold text-[12px] py-[9px] px-[5px]">
                        Basic Salary:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[9px] px-[5px]">
                        House Rent:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[9px] px-[5px]">
                        Medical Allowance:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[9px] px-[5px]">Food:</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[9px] px-[5px]">
                        Transport:
                      </th>
                    </tr>
                    <tr>
                      <th className="font-bold text-[12px] py-[10px] px-[5px]">Total:</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-full lg:w-1/4">
              <div className="h-full   overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    {[
                      "Basic Salary",
                      "House Rent",
                      "Medical Allowance",
                      "Food Allowance",
                      "Transport Allowance",
                    ].map((idx) => (
                      <tr key={idx} className="border-b border-gray-300">
                        <td className="py-[4px] px-[5px]">
                          <input
                            disabled
                            type="number"
                            className="w-full px-2 py-1 text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                            placeholder="0.00"
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="py-[11px] px-[5px] bg-gray-300 text-black">
                        <h4 className="font-bold">00.00 Tk</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-full lg:w-1/4">
              <div className="h-full  bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[9px] px-[5px]">
                        Attendance:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px]  py-[9px] px-[5px]">
                        Weekly Off / Other Leave:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[9px] px-[5px]">Absence:</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[9px] px-[5px]">
                        Total Days:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[29.5px] px-[5px]">
                        Total:
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 4 */}
            <div className="w-full lg:w-1/4">
              <div className="h-full  bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    {[...Array(3)].map((_, idx) => (
                      <tr key={idx} className="border-b border-gray-300">
                        <td className="py-[4px] px-[5px]">
                          <input
                            type="number"
                            disabled
                            className="w-full px-2 py-1 text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                            placeholder="0"
                          />
                        </td>
                      </tr>
                    ))}
                    <tr className="border-b border-gray-300 font-bold">
                      <td className="py-[8px] px-[5px]">
                        <input
                          type="number"
                          disabled
                          className="w-full px-2 py-1 text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[26.5px] px-[5px]">
                        <h4>00.00 Tk</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end salary information with leave, absent days section */}

      {/* over time section */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Overtime Calculation Summary.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Box 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative flex justify-center items-center">
                <p className="text-center font-bold text-[13px]">
                  Overtime: <br /> ( Basic Salary / 208 ) * Overtime Hours.
                </p>
              </div>
            </div>

            {/* Box 2 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Total Overtime:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Overtime Rate:
                      </th>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        Total:
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 3 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="00.00"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>00.00 Tk</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end overtime section */}

      {/* earn leave section  */}

      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Earned Leave Calculation Details.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Column 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 py-4 overflow-hidden text-center px-10 relative flex justify-center items-center">
                <p className="text-center  font-bold text-[13px]">
                  Earn leave: if the job period is over 1 year, total present
                  days / 18 * daily rate.
                </p>
              </div>
            </div>

            {/* Column 2 - 40% */}
            <div className="w-full lg:basis-[40%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="font-semibold text-[12px] py-[12px] px-[5px]">
                        Earn leave days = Total present days / 18:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Number of leave days taken:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Number of leave days payable:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Daily rate:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        Total:
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 3 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs placeholder:text-gray-900 text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0"
                          value={totalWorkingDay}
                          min={0}
                          onChange={(e) =>
                            handleNumberInput(
                              e.target.value,
                              setTotalWorkingDay
                            )
                          }
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 4 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-400 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0.00"
                          value={totalLeave}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold placeholder:text-gray-900 shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0.00"
                          value={useTotalLeave}
                          min={0}
                          onChange={(e) =>
                            handleNumberInput(e.target.value, setUseTotalLeave)
                          }
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          disabled
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-400 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0.00"
                          value={remaingLeave}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          disabled
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-400 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0.00"
                          value={perDayRate}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>
                          {totalEarnLeaveAmount
                            ? totalEarnLeaveAmount + " Tk"
                            : "0.00 Tk"}
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end eard leave section */}
      {/* service benefit section */}

      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Service Benefit Calculation Details.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Column 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 py-4 overflow-hidden text-center px-10 relative flex justify-center items-center">
                <p className="text-center font-bold text-[12px]">
                  Service Benefit - For employment duration 05-10 years: Basic
                  salary/30 * 14 days basic pay per year. Above 10 years: Basic
                  salary/30 * 30 days basic pay per full year.
                </p>
              </div>
            </div>

            {/* Column 2 - 40% */}
            <div className="w-full lg:basis-[40%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Joining Date:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Effective Resignation Date:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Total Service Days, from joining to resignation:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Eligible Years - Total days/365:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        Total:
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 3 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          disabled
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="24-05-2024"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          disabled
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="22-09-2024"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          disabled
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0.00"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22.7px] px-[5px]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 4 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          disabled
                          type="text"
                          className="w-full px-2 py-[6.5px] text-[12px] border-none font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          disabled
                          type="text"
                          className="w-full px-2 py-[7.5px] text-[12px] border-none font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          disabled
                          type="text"
                          className="w-full px-2 py-[7px] border-none text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          min="0"
                          className="w-full px-2 py-[5.5px] text-[12px] font-bold shadow-xs placeholder:text-gray-900 text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>00.00 Tk</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end service benefit section */}

      {/* benefit section start */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Benefits Calculation Details.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Box 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative flex justify-center items-center">
                <p className="text-center font-bold text-[13px]">Benefits</p>
              </div>
            </div>

            {/* Box 2 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Other Allowances:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Attendance Bonus:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Food Bill:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] py-[12px] px-[5px]">
                        Compensation:
                      </th>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        Total:
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 3 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="00.00"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="00.00"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="00.00"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="00.00"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>00.00 Tk</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end benefit section */}

      {/* another benefit section */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Other Benefits Calculation Details.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Box 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative flex justify-center items-center">
                <p className="text-center font-bold text-[13px]">
                  Other Benefits
                </p>
              </div>
            </div>

            {/* Box 2 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] text-[12px] px-[5px]">
                        Tiffin Bill:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="text-[12px] font-bold py-[12px] px-[5px]">
                        Night Bill:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="text-[12px] font-bold py-[12px] px-[5px]">
                        Extra Overtime:
                      </th>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className=" font-bold py-[12px] px-[5px] text-right">
                        Total:
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 3 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]" colSpan={3}>
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="00.00"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]" colSpan={3}>
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="00.00"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0 Hours"
                        />
                      </td>
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="00.00"
                        />
                      </td>
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="00 Taka"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]" colSpan={3}>
                        <h4>00.00 Tk</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end another benefit section */}

      {/* deduction section start  */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Miscellaneous Deductions.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Column 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 py-4 overflow-hidden text-center px-10 relative flex justify-center items-center">
                <p className="text-center font-bold text-[13px]">
                  Miscellaneous
                </p>
              </div>
            </div>

            {/* Column 2 - 40% */}
            <div className="w-full lg:basis-[40%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="text-[12px] font-bold py-[12px] px-[5px]">
                        Deduction for Absence:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="text-[12px] font-bold py-[12px] px-[5px]">
                        Other Deduction ( If any ):
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="text-[12px] font-bold py-[12px] px-[5px]">
                        Tax Applicable Area:
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="text-[12px] font-bold py-[12px] px-[5px]">Stamp:</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        Total:
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 3 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 4 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0.00"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0.00"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0.00"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-[12px] font-bold shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="0.00"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>00.00 Tk</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end deduction section */}

      {/* total amount section   */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Total Payable.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            <div className="w-full lg:basis-[60%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <div className="h-full bg-opacity-75 border border-gray-300 overflow-hidden text-center relative flex justify-center items-center">
                  <p className="text-center font-extrabold text-[18px]">
                    NET PAYABLE AMOUNT : 
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:basis-[40%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 text-[18px] font-bold bg-gray-300 text-center text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>00.00 Tk</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end total ammount section */}

      {/* BUTTON SECTION */}
      <div className="container px-5 pt-8 mx-auto">
        <div className="flex justify-end gap-2">
          <button className="text-xl w-32 h-12 rounded bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
            <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            প্রিন্ট
          </button>

          <button className="text-xl w-32 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
            <span className="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            সংরক্ষণ
          </button>
        </div>
      </div>
      {/* END BUTTON SECTION */}
    </div>
  );
};

export default App;
