function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-4 flex flex-col items-center justify-center gap-2 mt-10 h-30">
      <p className="text-xs">© {year} ruvfotball.no</p>
      <p className="text-xs">Contact: Anna Lund Skudsveen</p>
    </footer>
  );
}
export default Footer;
