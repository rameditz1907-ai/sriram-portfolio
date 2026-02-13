import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import profile from "./assets/IMG_0361.JPEG";

const float = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rameditz1907@gmail.com?subject=Portfolio Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="main-wrapper">
      <nav className="top-navbar">
        <div className="brand-logo">
          SRIRAM<span>.</span>
        </div>
        <ul className="menu-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#journey">Journey</a>
          </li>
          <li>
            <a href="#arsenal">Arsenal</a>
          </li>
          <li>
            <a href="#cont">Contact</a>
          </li>
        </ul>
        <button className="hire-btn">
          <a href="#cont">Let's Talk</a>
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="hero-title">
              Video <span>Editor</span>
            </h1>
            <p className="hero-quote">
              Visual storytelling engineered with technical precision.
            </p>
            <button className="primary-btn">View My Work</button>
          </motion.div>

          <div className="hero-visual">
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="blob-shape">
                <img src={profile} alt="Sriram" />
              </div>
            </motion.div>
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg"
              className="float-logo pr"
              variants={float}
              animate="animate"
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg"
              className="float-logo ae"
              variants={float}
              animate="animate"
              style={{ animationDelay: "1s" }}
            />
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png?20221107215930"
              className="float-logo dv"
              variants={float}
              animate="animate"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </section>

      {/* --- JOURNEY SECTION --- */}
      <section className="career-path" id="journey">
        <h2 className="section-title">
          My <span>Journey</span>
        </h2>
        <div className="timeline">
          <TimelineItem
            year="2020 - 2024"
            title="B.E - Mechanical Engineering"
            company="DHIRAJLAL GANDHICOLLEGE OF TECHNOLOGY"
            desc="Mechanical Engineering graduate with a strong technical foundation.
Passionate about video editing and visual storytelling.
Dedicated to creating engaging and impactful digital content."
          />
          <TimelineItem
            year="2024 to  Present"
            title="Freelance Video Editor"
            desc="Creative and detail-oriented Video Editor with hands-on experience in editing social media content, cinematic videos, and promotional visuals. Skilled in industry-standard editing software with a strong understanding of pacing, storytelling, color grading, and sound synchronization. Dedicated to delivering high-quality results within deadlines."
          />
        </div>
      </section>

      {/* --- BIG SKILLS SECTION --- */}
      <section className="skills-grid-section" id="arsenal">
        <h2 className="section-title">
          Creative <span>Arsenal</span>
        </h2>
        <div className="skills-container-large">
          <SkillItemWithLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg"
            name="Adobe Premiere Pro"
            level="95%"
          />
          <SkillItemWithLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg"
            name="After Effects"
            level="88%"
          />
          <SkillItemWithLogo
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png?20221107215930"
            name="DaVinci Resolve"
            level="82%"
          />
          <SkillItemWithLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
            name="Adobe Photoshop"
            level="90%"
          />
          <SkillItemWithLogo
            src="https://1000logos.net/wp-content/uploads/2025/01/CapCut-Emblem.png"
            name="CapCut"
            level="90%"
          />
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="contact-section" id="cont">
        <div className="contact-container">
          <div className="contact-info">
            <h2>
              Let's <span>Connect</span>
            </h2>
            <p>Ready to level up your content? Drop me a message.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              placeholder="How can I help you?"
              rows="5"
              required
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message 🚀
            </button>
          </form>
        </div>
      </section>

      <footer className="footer-contact">
        <div className="footer-content">
          <div className="social-links-footer">
            <a
              href="https://www.instagram.com/_zeroeditzz_/"
              target="_blank"
              rel="noreferrer"
              className="social-item"
            >
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                alt="Instagram"
              />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.behance.net/sksriram"
              target="_blank"
              rel="noreferrer"
              className="social-item"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNr2CwcgYRy1KuQYLduy_-WVJDwbzMGZ2Uqw&s"
                alt="Behance"
                
              />
              <span>Behance</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
              />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://youtube.com/@rameditz19?si=txepAsYyIWHtaA-0"
              target="_blank"
              rel="noreferrer"
              className="social-item"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png"
                alt="YouTube"
              />
              <span>YouTube</span>
            </a>
          </div>
        </div>
        <div className="copyright">© 2026 SRIRAM | Engineered Creativity.</div>
      </footer>
    </div>
  );
}

function SkillItemWithLogo({ src, name, level }) {
  return (
    <div className="skill-wrapper-large">
      <div className="skill-info-large">
        <div className="skill-label-large">
          <img src={src} alt={name} className="big-logo" />
          <span>{name}</span>
        </div>
        <span className="skill-perc-large">{level}</span>
      </div>
      <div className="progress-bar-large">
        <motion.div
          className="progress-fill-large"
          initial={{ width: 0 }}
          whileInView={{ width: level }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function TimelineItem({ year, title, company, desc }) {
  return (
    <div className="timeline-item">
      <div className="time-marker">
        <div className="dot"></div>
        <div className="line"></div>
      </div>
      <div className="time-content">
        <span className="year-badge">{year}</span>
        <h4>{title}</h4>
        <h5>{company}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
}
