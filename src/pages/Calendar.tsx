import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

const Calendar = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Attendance Reports" />

      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <table className="w-full">
          
        </table>
      </div>
      
    </DefaultLayout>
  );
};

export default Calendar;
