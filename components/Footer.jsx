const Footer = () => {
  return (
    <footer className="py-8 xl:py-4 mt-8 text-white">
      <div className="container mx-auto flex justify-center">
        {/* copyright or other info */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} S.G. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
