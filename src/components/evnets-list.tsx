import EventCard from "@/components/event-card";
import { getEvents } from "@/lib/server-utils";
import PaginationControls from "./pagination-controls";
type EventListProps = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: EventListProps) => {
  const { events, totalCount } = await getEvents(city, page);
  const previousPage = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPage =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="flex max-w-[1100px] flex-wrap justify-center gap-10 px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls previousPage={previousPage} nextPage={nextPage} />
    </section>
  );
};

export default EventsList;
