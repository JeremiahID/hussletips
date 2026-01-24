import { useState } from 'react';

const SearchModal = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // TODO: navigate or filter content
  };

  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex="-1"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-4">

          <div className="modal-header border-0">
            <h5 className="modal-title" id="searchModalLabel">
              Search HustleTips
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search articles, tips, categories..."
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchModal;
