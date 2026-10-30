import { useEffect, useRef, useState } from "react";
import styles from "./ProjectGallery.module.css";

const ProjectGallery = ({ projects }) => {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updateControls = () => {
      setAtStart(track.scrollLeft <= 1);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    };
    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  const scrollGallery = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.8, 200),
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.gallery}>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => scrollGallery(-1)}
        disabled={atStart}
        aria-label="Scroll projects backward"
      >
        &#8249;
      </button>
      <div className={styles.track} ref={trackRef}>
        {projects.map((project) => {
          const cover = (
            <img
              src={
                project.cover.startsWith("https://")
                  ? project.cover
                  : `${import.meta.env.BASE_URL}${project.cover}`
              }
              alt={project.title}
            />
          );
          return project.link ? (
            <a
              key={project.title}
              className={styles.item}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              {cover}
            </a>
          ) : (
            <span key={project.title} className={styles.item}>
              {cover}
            </span>
          );
        })}
      </div>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => scrollGallery(1)}
        disabled={atEnd}
        aria-label="Scroll projects forward"
      >
        &#8250;
      </button>
    </div>
  );
};

export default ProjectGallery;
