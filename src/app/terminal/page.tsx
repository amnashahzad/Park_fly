import React from 'react';
import PageLayout from "@/components/layouts/Airport";
import Terminal from '@/components/widgets/Terminal';


const AirportPage: React.FC = () => {
  return (
    <PageLayout>
        <Terminal/>
    </PageLayout>
  );
};

export default AirportPage;