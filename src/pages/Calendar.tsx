import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import axios from 'axios';
import { useState , useEffect  } from 'react';


const Calendar = () => {

  const [users, setUsers] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://phs.azzappointments.com/apis/public/api/admin/attendance-reports"
        );
        setUsers(response.data.users);
        //console.log("user ", response.data.users[1]);
        // console.log("days", response.data.days);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Attendance Reports" />
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {Array.isArray(users) && users.map((user: any, index: number) => (
            <div key={index}>
              <p>{user.id}</p>
              <p>{user.name}</p>
            </div>
          ))} 
      </div>
    </DefaultLayout>
  );
};

export default Calendar;
