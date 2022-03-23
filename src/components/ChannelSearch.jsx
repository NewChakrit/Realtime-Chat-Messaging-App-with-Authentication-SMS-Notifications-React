import React, { useState, useEffect } from "react";
import { getChannel, useChatContext } from "stream-chat-react";

import { SearchIcon } from "../assets/SearchIcon";

function ChannelSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      // TODO: fetch channels
      // * fetch channels
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
  };

  return (
    <div className="channel-search">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
          <input
            type="text"
            className="channel-search__input__text"
            placeholder="Search"
            value={query}
            onChange={onSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default ChannelSearch;
