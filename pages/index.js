import { getFeaturedEvents } from "../dummy-data.js";
import EventList from "../components/events/event-list.js";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
}

export default HomePage;
