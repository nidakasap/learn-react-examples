import { useLocation, useNavigate } from "react-router-dom";
//import spinnerLoading from "../img/Loading_icon.gif";

const TeacherDetails = () => {
  const navigate = useNavigate();

  //!1.yol.................
  //const { id } = useParams();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => res.json())
  //     .then((veri) => setKisi(veri))
  //     .finally(() => setLoading(false));
  // }, [id]);

  // if (loading) {
  //   return (
  //     <div>
  //       <img src={spinnerLoading}></img>
  //     </div>
  //   );
  // }
  //!1.yol...............
  const {
    state: { kisi },
  } = useLocation();
  console.log(kisi);

  return (
    <div className="">
      <img
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${kisi.name}`}
        alt=""
        width="100px"
      />

      <h4>{kisi.name}</h4>
      <h4>{kisi.username}</h4>
      <h4>{kisi.email}</h4>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default TeacherDetails;
