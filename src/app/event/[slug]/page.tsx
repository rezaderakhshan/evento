import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: EventPageProps): Promise<Metadata> => {
  const slug = params.slug;
  const event = await getEvent(slug);
  return {
    title: event.name,
  };
};

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="mb-12">{children}</section>;
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl">{children}</h2>;
};

const SectionContent = ({ children }: { children: React.ReactNode }) => (
  <p className="mx-auto max-w-4xl text-lg leading-8 text-white/75">
    {children}
  </p>
);

export const generateStaticParams = () => {
  return [{ slug: "comedy-extravaganza" }, { slug: "dj-practice-session" }];
};
const EventPage = async ({ params }: EventPageProps) => {
  const { slug } = params;

  const event = await getEvent(slug);
  const evnetImage =
    "https://www.datocms-assets.com/17746/1649246563-club-dj-career-main-body.jpg?auto=format&w=1920";
  return (
    <main>
      <section className="relative flex items-center justify-center overflow-hidden py-14 lg:py-20">
        <Image
          className="z-0 object-cover blur-3xl"
          src={evnetImage}
          fill
          quality={10}
          sizes="(max-width: 1280px) 100vw, 1280px"
          alt="Event background image"
        />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:gap-16">
          <Image
            src={evnetImage}
            width={300}
            height={201}
            alt={event.name}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "2-digit",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl">
              Orgnized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-blur state-effects mt-5 w-[95vw] rounded-md border-2 border-white/10 bg-white/20 py-2 text-lg capitalize sm:w-full lg:mt-auto">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] px-5 py-16 text-center">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
};

export default EventPage;
