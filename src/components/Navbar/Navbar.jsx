import { useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LinkContext } from "../../context/LinkContext";

export const Navbar = () => {
  const { setSelectedCategory, selectedCategory } = useContext(LinkContext);

  const navigate = useNavigate();

  const linkArray = [
    "Alle",
    "Indland",
    "Udland",
    "Teknologi",
    "Sport",
    "Politik",
    "Samfund",
  ];

  useEffect(() => {
    navigate("/");
  }, [selectedCategory]);

  return (
    <nav>
      <ul>
        {linkArray.map((link) => {
          return (
            <li key={link} onClick={() => setSelectedCategory(link)}>
              {link}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
