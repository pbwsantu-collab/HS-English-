import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t py-3 px-4 text-sm text-center bg-white">
      © {new Date().getFullYear()} EnglishMaster AI — Practice • Perform • Progress
    </footer>
  );
};

export default Footer;
