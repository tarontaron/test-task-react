import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "../../actions/rootAction";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const CategoriesWrapper = styled.div`
  width: 50%;
  font-size: 30px;
`;

const SingleCategory = styled.div`
  padding: 20px;
  background-color: ${(props) => (props.selected ? "gray" : "")};
`;

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("selectedCategory");

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories")
      .then((response) => response.json())
      .then((data) => {
        dispatch(actions.getCategories(data));
      });
  }, []);

  return (
    <CategoriesWrapper>
      {categories.map((category) => (
        <SingleCategory
          key={category.id}
          selected={1 * selectedCategory === category.id}
          onClick={() =>
            setSearchParams({
              selectedCategory: category.id,
              page: searchParams.get("page") || 1,
            })
          }
        >
          {category.name}
        </SingleCategory>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
