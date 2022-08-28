import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import JobStatistics from '../components/JobStatistics';

export default function Home() {
  return (
    <main className="h-screen flex flex-row">
      <Aside />
      <section className="w-full h-full px-10">
        <Header />
        <hr className='w-full mt-5' />
        <JobStatistics />
        <JobStatistics />
      </section>
    </main>
  );
}