import React from "react";
import Loader from "../../componets/Loader/Loader";

export default function FavoritesPage() {
  const [loading, setLoading] = React.useState(false);

  return (
    <main>
      <div className="container">
        {loading && <Loader />}
        <h1>Minhas notícias favoritas</h1>
      </div>
    </main>
  );
}
