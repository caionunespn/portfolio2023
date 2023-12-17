import React, {ReactNode} from 'react';
import SectionNav from './SectionNav';
import Header from './Header/Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-screen lg:items-center">
      <Header />
      <SectionNav />
      <main className="flex flex-col w-screen bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
};

Layout.displayName = 'Layout';

export default Layout;
