import { useNavigate } from "react-router-dom";

export default function ScrollLink({ to, children, ...props }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // prevent instant navigation
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Wait for scroll to finish before navigating (300ms to 500ms delay)
    setTimeout(() => {
      navigate(to);
    }, 700); // adjust this if needed
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
