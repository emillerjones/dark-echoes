import { useState } from "react";
import { episodeList } from "./data";


export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeListDisplay() {
    return (
      <section className="roster">
        <h2>Roster</h2>
        <ul className="roster">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an Episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode : {selectedEpisode.id}</h2>
        <h1>
          {selectedEpisode.title}
        </h1>
        <p>
          {selectedEpisode.description}
        </p>
      </section>
    );
  }



  return (
    <>
      <header>
        <h1>Episode List</h1>
      </header>
      <main>
        <EpisodeListDisplay />
        <EpisodeDetails />
      </main>
    </>
  );
}
