import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import Dashboard from '@/components/dashboard/Dashboard';
import DashboardChart3 from '@/components/dashboard/Chart3';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Posts'
          count={100}
          icon={<Newspaper className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Categories'
          count={12}
          icon={<Folder className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Users'
          count={750}
          icon={<User className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Comments'
          count={1200}
          icon={<MessageCircle className='text-slate-500' size={72} />}
        />
      </div>
      <AnalyticsChart />
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full mt-10'>
        <div className='w-full md:w-1/2'>
          <Dashboard />
        </div>
        <div className='w-full md:w-1/2'>
          <DashboardChart3 />
        </div>
      </div>

    </>
  );
}
