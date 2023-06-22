import NextImage from "next/image";

interface ProjectCardProps {
  photoUrl: string;
  title: string;
  client: string;
  work: string;
}

export function ProjectCard({ photoUrl, title, client, work }: ProjectCardProps) {
  return (
    <div className="flex flex-col max-w-xl space-y-8 pb-10 md:pb-24">
      <NextImage
        src={photoUrl}
        alt={`Card ${title}`}
        width={560}
        height={620}
        className="rounded-2xl"
      />
      <div className="flex flex-col space-y-8">
        <div className="flex gap-8 items-center">
          <h3 className="font-bold text-2xl">
            {title}
          </h3>
          <div className="border border-brand w-12 h-px"></div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex gap-4 items-center">
            <span className="text-gray-400 text-sm">Client: </span>
            <span>{client}</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-gray-400 text-sm">Work: </span>
            <span>{work}</span>
          </div>
        </div>
      </div>
    </div>
  );
}