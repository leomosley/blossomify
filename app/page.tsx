import FollowMouse from './components/FollowMouse';
import Form from './components/Form';
import Header from './components/Header';
import styles from './page.module.css';

// https://www.realtimecolors.com/?colors=ffffff-04050b-6d44a7-2d132f-b155b9&fonts=Inter-Inter

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Header />
      <Form />
    </div>
    <FollowMouse colour='purple' />
    </>
  );
}
