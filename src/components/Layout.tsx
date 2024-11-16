type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="mx-4 mt-4 w-full"> {children}</div>;
};

export default Layout;
