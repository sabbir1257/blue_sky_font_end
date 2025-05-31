import Container from '@/components/ui/Container';
import Separator from '@/components/ui/Separator';
import React from 'react';
import TeamsCard from '../teams/TeamsCard';

const OurTeam = () => {
  return (
    <Container className="mb-20">
      <section className="flex flex-col items-center gap-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our TEAM{' '}
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>
        <Separator />
        <p className="paragraph">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
        {/* service cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 w-full">
          <TeamsCard imageUrl="/images/man1.jpg" />
          <TeamsCard imageUrl="/images/man2.jpg" />
          <TeamsCard imageUrl="/images/man3.jpg" />
          <TeamsCard imageUrl="/images/man4.jpg" />
        </div>
      </section>
    </Container>
  );
};

export default OurTeam;
