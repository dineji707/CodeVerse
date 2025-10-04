import { Link } from "react-router-dom";
import { Code2, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Learning: [
      { name: "DSA Practice", path: "/dsa" },
      { name: "Web Development", path: "/webdev" },
      { name: "DevOps & Cloud", path: "/devops" },
      { name: "AI/ML & Data Science", path: "/aiml" },
    ],
    Resources: [
      { name: "Core CS Subjects", path: "/core-cs" },
      { name: "Career Preparation", path: "/career" },
      { name: "Blog & Articles", path: "/articles" },
      { name: "Leaderboard", path: "/leaderboard" },
    ],
    Tools: [
      { name: "Resume Builder", path: "/resume-builder" },
      { name: "Interview Prep", path: "/interview-prep" },
      { name: "SQL Playground", path: "/sql-playground" },
      { name: "Roadmaps", path: "/roadmap" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@codeverse.dev", label: "Email" },
  ];

  return (
    <footer className="glass mt-20 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CodeVerse
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Empowering learners worldwide with comprehensive coding education, 
              from fundamentals to advanced technologies. Join thousands of students 
              and professionals building their tech careers.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeVerse. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive animate-pulse" /> for learners worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
