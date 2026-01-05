const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <small>
          © {new Date().getFullYear()} HustleTips. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
