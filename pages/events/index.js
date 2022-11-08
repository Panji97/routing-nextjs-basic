import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

function AllEvents() {
  const router = useRouter();
  const event = getAllEvents();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={event} />;
    </>
  );
}

export default AllEvents;
