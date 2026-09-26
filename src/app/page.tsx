import Banner from "@/components/banner/Banner";
import WorkoutLibraryGrid from "@/components/workout-library/WorkoutGrid";

export default function Home() {
  return (
    <div className="mx-5">
      <Banner />
      <WorkoutLibraryGrid />
    </div>
  );
}
