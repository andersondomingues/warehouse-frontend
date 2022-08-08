import './homepage.module.scss';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Navigator } from '../../components/Navigator';
import { FormPage } from '../../components/FormPage';

export function HomePage() {
  return (
    <div>
      <Header />
      <Navigator />
      <FormPage>
        <br />
        <form>
          <h1>Home</h1>
          <p>
            Welcome to Jack&apos;s Warehouse System.
          </p>
        </form>
        <br />
      </FormPage>
      <Footer />
    </div>
  );
}
