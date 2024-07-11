import type { Metadata } from 'next';
import { redirectUrls } from './_utils/redirects';

interface TrackerPageParams {
  params: {
    key: string;
    redirect: string;
  };
}

const TrackerPage: React.FC<TrackerPageParams> = async ({ params }) => {
  const { key, redirect } = params;
  if (!redirectUrls[redirect.toLocaleLowerCase()]) {
    return <>404 Bad redirect</>;
  }
  return (
    <>
      Track… {key}, {redirect}
    </>
  );
};

export async function generateMetadata({
  params,
}: TrackerPageParams): Promise<Metadata> {
  const { key, redirect } = params;

  return {
    title: redirect,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg'],
    // },
  };
}

export default TrackerPage;
