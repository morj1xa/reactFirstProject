import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import TeachingSection from "./components/TeachingSection";
import DiffSection from "./components/DiffSection";
import IntroSection from "./components/introSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DiffSection />
      </main>
    </>
  );
}
