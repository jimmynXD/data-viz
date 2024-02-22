import type { NextPage } from 'next';

import { XDSandDanceNoSSR } from '@/survey/web';

import { BaseLayout, PageMetaTitle } from '../components';

export const ComingSoonPage: NextPage = () => {
  return (
    <>
      <PageMetaTitle primary>Data Visualizer</PageMetaTitle>
      <BaseLayout>
        <main className='flex flex-col items-center page-max-xl pt-4'>
          <div className='px-4 max-w-xl text-center'>
            <h2 className='text-2xl font-bold text-center text-xd-primary-black drop-shadow-sm'>
              See data. Different.
            </h2>
            <p className='text-base text-xd-secondary-black-rgb'>
              Vizualize survey data in ways that have never been possible, so
              you can make the right decision. Every time.
            </p>
          </div>

          <div className='md:px-4 mx-auto w-full pt-8'>
            <XDSandDanceNoSSR />
          </div>
        </main>
      </BaseLayout>
    </>
  );
};
