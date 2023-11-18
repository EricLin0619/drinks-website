import Coursel from "../components/coursel";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <main className="grow">
      <section className="flex mt-8 w-2/3 mx-auto">
        <Coursel/>
        <Sidebar/>
      </section>
    </main>
  );
}
