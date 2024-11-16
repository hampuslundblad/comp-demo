type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="mx-4"> {children}</div>;
};

export default Layout;
