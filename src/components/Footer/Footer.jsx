import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email address is required.");
      setSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
    setEmail("");
  };

  return (
    <footer className="bg-dark text-light pt-5">
      {/* Newsletter */}
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h4 className="fw-bold">
              Sign up for our free daily newsletter
            </h4>
            <p className="footer-muted mb-0">
              Get business news, leadership insights, and inspiration
              delivered straight to your inbox.
            </p>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="d-flex gap-2">
                <input
                  type="email"
                  className={`form-control ${ error ? "is-invalid" : ""}`}
                  placeholder="Enter email address*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary px-4">
                  Subscribe
                </button>
              </div>

              {error && (
                <small className="text-danger d-block mt-2">
                  {error}
                </small>
              )}

              {success && (
                <small className="text-success d-block mt-2">
                  Subscription successful 🎉
                </small>
              )}

              <small className="footer-muted d-block mt-2">
                By subscribing, you agree to our{" "}
                <a href="/" className="footer-link">
                  Privacy Policy
                </a>
                .
              </small>
            </form>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Footer Links */}
      <div className="container py-4">
        <div className="row">
          <FooterColumn
            title="Resources"
            items={[
              "Newsletters",
              "White Papers",
              "Webinars",
              "Videos",
              "Podcasts",
            ]}
          />
          <FooterColumn
            title="HustleTips"
            items={[
              "Leadership Network",
              "Unlimited Access",
              "Magazine Subscription",
              "Advertise With Us",
            ]}
          />
          <FooterColumn
            title="Community"
            items={[
              "Authorities",
              "Books Group",
              "Press",
              "Ask an Expert",
              "Daily Deals",
            ]}
          />
          <FooterColumn
            title="Legal"
            items={[
              "Terms of Use",
              "Privacy Policy",
              "Cookies Policy",
              "Accessibility",
              "Site Map",
            ]}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center py-3">
        <small className="footer-muted">
          © {new Date().getFullYear()} HustleTips. All rights reserved.
          Designed by JeremiahEfe
        </small>
      </div>
    </footer>
  );
};


// Footer column component
const FooterColumn = ({ title, items }) => (
  <div className="col-md-3 col-6 mb-4">
    <h6 className="fw-bold">{title}</h6>
    <ul className="list-unstyled footer-muted">
      {items.map((item, index) => (
        <li key={index} className="mb-2 footer-hover">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;

