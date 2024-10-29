// app/page.jsx
import HomeContent from "@/components/HomeContent";

async function fetchData() {
  // Simule une récupération de données
  return {
    name: "Shuja Ghulamyar",
    title: "A Full Stack Developer in Montreal",
    bio: "Welcome to my portfolio! I’m glad you’re here!",
  };
}

const Home = async () => {
  const data = await fetchData(); // Appelle la fonction de récupération des données

  return <HomeContent data={data} />;
};

export default Home;
