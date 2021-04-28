import MainNavigation from './MainNavigation';
import Head from "./head";

function Layout(props) {
  return (
    <div>
      <Head/>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
