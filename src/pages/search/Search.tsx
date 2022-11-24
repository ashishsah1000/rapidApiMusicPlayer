import { searchMusic } from "../../axios/music";
import { Loading, MusicTiles } from "../../components";
import { useState } from "react";
export default function Search() {
  const handleSearchChange = async (e: any) => {
    const value: string = e.target.value;
    if (value.length > 3) {
      const res = await searchMusic(value);
      setsearchData(res);
    }
  };
  const [searchData, setsearchData] = useState<[]>([]);
  return (
    <div>
      <div style={{ width: "70vw", margin: "0px auto" }}>
        <div
          className="input-group "
          style={{ margin: "0px auto", width: "100%" }}
        >
          <input
            type="search"
            className="form-control rounded"
            placeholder="Start Typing here"
            aria-label="Search"
            aria-describedby="search-addon"
            style={{ padding: "20px 20px", marginTop: "100px" }}
            onChange={(e) => handleSearchChange(e)}
          />
          {/* <button type="button" className="btn btn-lg btn-outline-warning">
            search
          </button> */}
        </div>
      </div>
      <div className="mt-5">
        {searchData.length > 0 ? (
          <div>
            <MusicTiles songs={searchData} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
