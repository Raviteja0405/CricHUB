// eslint-disable-next-line react/prop-types
const Footer = ({ darkMode }) => {
    return (
      <footer className={`py-6 text-center ${darkMode ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-900"}`}>
        <p>© 2025 CricHub. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  