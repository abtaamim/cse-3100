import React from "react";
const SearchFilter = (props) => {
  const { searchTerm, setSearch, getNamedCats, breeds } = props
  return (
    <div class="d-flex flex-row gap-2">
      <div className="mb-3 input-group">
        <input
          type="text"
          className="form-control outline-secondary"
          placeholder="Search by name"
          value={searchTerm}
          onChange={setSearch}
          // onChange={(e) => {
          //   setSearchTerm(e.target.value);
          // }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getNamedCats();
            }
          }}
        />
        <button className="btn btn-outline-secondary" type="button"
          onClick={getNamedCats}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          select breed
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {breeds.map((breed) => (
            <li><a class="dropdown-item" href={`/breed/${breed.toLowerCase()}`}>{breed}</a></li>
          ))}
        </ul>

      </div>
    </div>
  )
}
export default SearchFilter;