import  Head from 'next/head';
import useSWR from 'swr';
import { useAuth } from '../lib/auth';
import { Button, Heading, Text, Icon, Flex } from '@chakra-ui/react';
import SiteEmptyState from '../components/SiteEmptyState';
import DashboardShell from '../components/DashboardShell';
import SiteTableSkeleton from '../components/SiteTableSkeleton';
import SiteTableHeader from '../components/SiteTableHeader';
import SiteTable from '@/components/SiteTable';
import fetcher from '@/utils/fetcher';

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR('api/sites', fetcher);
  //const isPaidAccount = user?.stripeRole !== 'free';

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  if (data.sites) {
    return (
      <DashboardShell>
        <SiteTableHeader/>
        <SiteTable sites={data.sites} />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader/>
      <SiteEmptyState />
    </DashboardShell>
  );
};


export default Dashboard;