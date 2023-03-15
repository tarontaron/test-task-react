import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "../../actions/rootAction";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const CatsWrapper = styled.div`
  overflow-y: scroll;
  height: 500px;
`;

const SingleCatView = styled.div`
  padding: 10px;
`;

const Cats = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("selectedCategory");
  const cats = useSelector((state) => state.cats);

  const getCatsImages = (page, category) => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(actions.getCats(data));
      });
  };

  useEffect(() => {
    dispatch(actions.clearCatsData());
    getCatsImages(1, selectedCategory || "");
  }, [selectedCategory]);

  return (
    <div>
      <CatsWrapper>
        {cats.map((cat) => (
          <SingleCatView key={cat.id}>
            <img src={cat.url} width={"100%"}></img>
          </SingleCatView>
        ))}
      </CatsWrapper>
      <button
        onClick={() => {
          const newPage = Number(searchParams.get("page")) + 1;
          setSearchParams({
            selectedCategory: selectedCategory || "",
            page: newPage,
          });

          getCatsImages(newPage, selectedCategory);
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default Cats;
