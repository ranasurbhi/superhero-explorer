import React, { useState, useEffect } from "react";
import CharacterGrid from "../components/CharacterGrid";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import Navbar from "../components/NavBar";
import Loader from "../components/loader";
import MouseGlow from "../components/MouseGlow";
import { fetchCharacters } from "../api/marvel";
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("az");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const charactersPerPage = 10;

  const getData = async () => {
    setIsLoading(true);

    const orderBy = sortOrder === "az" ? "name" : "-name";
    const offset = (currentPage - 1) * charactersPerPage;

    const { characters: fetchedCharacters, total } = await fetchCharacters({
      offset,
      limit: charactersPerPage,
      nameStartsWith: searchTerm,
      orderBy,
    });

    setCharacters(fetchedCharacters);
    setTotal(total);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [searchTerm, sortOrder, currentPage]);

  const handlePageChange = (page) => {
    const totalPages = Math.ceil(total / charactersPerPage);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="home-page">
      <MouseGlow />
      <Navbar />

      <div className="outer-container">
        <main className="content-wrapper">
          <h1 className="main-title glitch-text" data-text="Superhero Explorer">
            Superhero Explorer
          </h1>

          <div className="search-sort-wrapper">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <CharacterGrid characters={characters} onCardClick={handleCardClick} />
          )}

          <div className="pagination-wrapper">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(total / charactersPerPage)}
              onPageChange={handlePageChange}
            />
          </div>
        </main>
      </div>

      <Modal character={selectedCharacter} onClose={closeModal} />
    </div>
  );
};

export default Home;
