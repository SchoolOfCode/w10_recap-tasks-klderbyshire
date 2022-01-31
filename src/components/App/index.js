import "./App.css";
import {articles as dataset } from "../../libs/articles"
import Title from "../Title/title";
import Articles from "../Articles/articles";
import Article from "../Article/article";
import LoginButton from "../LoginButton/loginbutton";
import LogoutButton from "../LogoutButton/logoutbutton";
import PreLogin from "../Prelogin/prelogin";
import pigeon from "/src/libs/pigeon.jpeg"

function App() {



  return (
    <main className="App">
    <Title text="WikiPigeon"/>
    <Articles articles={articles} />
    <PreLogin />
    <LoginButton />
    <LogoutButton />
      
      
      
            <button className="like-button">Like 👍</button>
            <section className="comment-section">
              {article.comments.map((comment) => {
                return (
                  <div key={comment.id} className="comment">
                    <h4>{comment.name} says:</h4>
                    <p>{comment.text}</p>
                  </div>
                );
              })}
            </section>
          
        );
      
    </main>
  );


export default App;
