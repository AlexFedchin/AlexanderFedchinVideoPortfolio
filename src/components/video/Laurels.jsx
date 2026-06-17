import { useState } from "react";
import { cn } from "@/utils/cn";
import Lightbox from "@/components/gallery/Lightbox";

export default function Laurels({ laurels, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!laurels?.length) return null;

  // Give each laurel an id so Lightbox can key on it
  const items = laurels.map((l, i) => ({ ...l, id: i }));

  return (
    <>
      <ul
        className={cn(
          "w-full flex flex-wrap justify-center gap-x-7 gap-y-4",
          className,
        )}
      >
        {items.map(({ src, alt, id }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => setOpenIndex(id)}
              aria-label={`View laurel: ${alt}`}
              className="cursor-pointer transition-opacity duration-200 hover:opacity-70"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto opacity-90"
              />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        photos={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}
