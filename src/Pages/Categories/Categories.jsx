import React, { useEffect, useState } from "react";
import "./Categories.css";
import { getNotes } from "../../API";
import Filter from "../../Components/Filter/Filter";
import Loader from "../../Components/Loader/Loader";

const Categories = () => {
  const [category, setcategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNotes("caterory");
        setcategory(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  return (
    <div className="categorie-container">
      <div className="categoriefilter">
        <Filter />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="categorie-content">
            {category.map((category, index) => {
              return (
                <div className="electronic" key={index}>
                  <h4>{category.name}</h4>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
