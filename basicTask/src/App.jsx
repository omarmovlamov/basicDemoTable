import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState("Hello World");

  useEffect(() => {
    // Bilerek hata eklenmiş fetch fonksiyonu
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setAdmins(data))
      .catch((error) => console.error("Veri çekme hatası:", error));
  });
  console.log(admins);
  return (
    <div className="App">
      <h1>API Tablo Örneği</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Kullanıcı Adı</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.emai}</td>
              <td>{user.username}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
