export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 text-black">
      <div className="flex justify-center gap-6">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
