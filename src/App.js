import "./App.css";
import Card from "./components/Card/Card";
const myCardData = [
  {
    id: "1",
    image:
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "HTML",
    subtitle: "Standard markup language for Web pages",
    description:
      "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: "2",
    image:
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "CSS",
    subtitle: "Cascading Style Sheets",
    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. ",
  },
  {
    id: "3",
    image:
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",

    title: "Javascript",
    subtitle: "JavaScript is the programming language of the Web",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. ",
  },
  {
    id: "4",
    image:
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "Angular",
    subtitle: "A Javascript Frontend Framework",
    description:
      "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations",
  },
  {
    id: "5",
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "Reactjs",
    subtitle: "A Javascript Frontend Library",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and its community.",
  },
];
function App() {
  return (
    <div>
      <header className="App-header">
      <Card myCardData={myCardData} style={{margin:"25px"}}/>
      </header>
    </div>
  );
}

export default App;
