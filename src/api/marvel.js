// src/api/marvel.js
import axios from "axios";

const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const TS = "1720378800";
const HASH = "d5df33ed870bb2cdbc8b4717f9c93e74";

const BASE_URL = "https://gateway.marvel.com/v1/public/characters";

export const fetchCharacters = async ({ offset = 0, limit = 10, nameStartsWith = "", orderBy = "name" }) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        ts: TS,
        apikey: PUBLIC_KEY,
        hash: HASH,
        limit,
        offset,
        orderBy,
        ...(nameStartsWith && { nameStartsWith }),
      },
    });

    // Map data to match previous dummy structure
    const characters = response.data.data.results.map((char) => ({
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      comics: char.comics.available,
      series: char.series.available,
    }));

    return {
      characters,
      total: response.data.data.total,
    };
  } catch (error) {
    console.error("Marvel API error:", error.response?.data || error.message);
    return { characters: [], total: 0 };
  }
};
