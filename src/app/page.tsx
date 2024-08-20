

import { fetchLocations } from "@/sanity/lib/sanity.query";
import { lazy, Suspense } from "react";

const Index = lazy(() => import('./index'));

const Home = async () => {
  const locations = await fetchLocations();
  return (
    <Suspense fallback={<>Loading...</>}>
      <Index locations={locations} />
    </Suspense>
  );
};


export default Home;