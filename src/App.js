import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {
  //localstorage.getItem("NombreObjeto" setItem(NombreObjeto));

  /*localStorage.getItem("");
  localStorage.SetItem("");
  */
  return (
    <>
      <Header
      /*counter={counter}
        setCounter={setCounter}
        comment={comment}
        setComment={setComment}
        postComments={postComments}
        setPostComments={setPostComments}*/
      ></Header>
    </>
  );

  /*return <Header></Header>;*/
}

const MainContainer = styled.div`
  width: 100%;
  height: 73px;
  padding: 0px 200px;
  background: white;
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
`;

const CentralContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    * {
      margin: 0 20px;
    }
  }
  img {
    width: 35px;
    background: white;
    cursor: pointer;
  }
  #face,
  #link {
    font-size: 25px;
    margin-top: 5px;
    cursor: pointer;
  }
  #face:hover,
  #link:hover {
    color: blue;
  }
  #twit {
    font-size: 25px;
    margin-top: 5px;
    cursor: pointer;
  }
  #twit:hover {
    color: #34deed;
  }
  p {
    font-size: 25px;
  }
`;

const Projects = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin: 15px auto;
`;

const Desarrollos = styled.p`
  font-size: 16px;
  padding: 10px;
  padding-left: 15px;
  color: #999;
`;

function Header() {
  return (
    <MainContainer>
      <CentralContainer>
        <div>
          <img src="https://w7.pngwing.com/pngs/397/474/png-transparent-black-snapchat-logo-illustration-computer-icons-instagram-logo-area-smile-thumbnail.png" />
          <p>Legorreta</p>
        </div>
        <div>
          <i class="fa fa-linkedin" aria-hidden="true" id="link"></i>
          <i class="fa fa-facebook" aria-hidden="true" id="face"></i>
          <i class="fa fa-twitter" aria-hidden="true" id="twit"></i>
        </div>
      </CentralContainer>

      <Projects>
        <Desarrollos>PROYECTOS DESARROLLADOS</Desarrollos>
        <Project
          name="Cabsi"
          imagen="https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/profilePictures%2F-Kq_zM21oseXDWB6pt89%2FICONO.png?alt=media&token=b94a5a74-bb2f-4b2f-86b1-1ad4f7a143b1"
          empresa="Cabsi S.A. De C.V."
        ></Project>
        <Project
          name="Chat"
          imagen="https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/profilePictures%2F-KqaYwEdjByRBg0KH_QO%2FGroup%201054.png?alt=media&token=740059db-89cf-4094-9f93-5ff6828a772b"
          empresa="Roberto Legorreta Murillo"
        ></Project>
        <Project
          name="Anand"
          imagen="https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/profilePictures%2F-Kr38KtXD6rYBWVSUf9n%2FRecurso%202.png?alt=media&token=6eacc748-0081-4996-bc3e-3bab5dc0adeb"
          empresa="Roberto Legorreta Murillo"
        ></Project>
        <Project
          name="Tidingo"
          imagen="https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/profilePictures%2F-Kr4L8-7eLLktB1F2TFS%2F512.png?alt=media&token=e3c55bb3-f806-4a6a-b80b-71ff91131fc4"
          empresa="Cabsi S.A. De C.V."
        ></Project>
        <Project
          name="Robertgram"
          imagen="https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/profilePictures%2F-Kr7M7XhdSXpkEmP-W5F%2Finsta.png?alt=media&token=2f4401a4-4df9-4704-8ad5-4bb82c1291ce"
          empresa="Roberto Legorreta Murillo"
        ></Project>
        <Project
          name="MANQ"
          imagen="https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/profilePictures%2F-Kr98-wdoDSk-8Z_bcUR%2FMANQ.jpg?alt=media&token=4a59c08e-b62e-4c8f-b3b2-02bb4f9fd8d6"
          empresa="Roberto Legorreta Murillo"
        ></Project>
        <Project
          name="Multiples Proyectos"
          imagen="https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/profilePictures%2F-KrCS05TVTcFssvGq1Sh%2F96-11.png?alt=media&token=eeeebbc4-7a5d-4daa-93f8-370e778adc1d"
          empresa="Roberto Legorreta Murillo"
        ></Project>
      </Projects>

      <Publish></Publish>
      <Publish></Publish>
      <Publish></Publish>
    </MainContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
  border-top: 1px solid lightgray;
  padding: 5px;
  button {
    height: 25px;
    width: 100px;
    padding: 3px;
    background: #3897f0;
    color: white;
    border: none;
    font-weight: bold;
    margin-top: 10px;
    border-radius: 2px;
  }
  img {
    width: 48px;
    height: 45px;
    border-radius: 200px;
    border: 1px solid lightgray;
  }
  #proyecto {
    font-weight: bold;
  }
  #empresa {
    color: #999;
  }
`;

function Project(props) {
  return (
    <ProjectContainer>
      <div>
        <img src={props.imagen}></img>
        <div>
          <p id="proyecto">&nbsp;{props.name}</p>
          <p id="empresa">&nbsp;{props.empresa}</p>
        </div>
      </div>
      <button>Ver proyecto</button>
    </ProjectContainer>
  );
}
/*
const CabeceraPublic = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }`;
*/

const Publicaciones = styled.div`
  width: 500px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  margin: 15px auto;
  background: white;
`;

const Titulo = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
  padding: 10px;

  img {
    width: 32px;
    height: 30px;
    border-radius: 200px;
    border: 1px solid lightgray;
  }
  span {
    font-weight: bold;
  }
  #dias {
    color: #999;
  }
`;

function TituloPublico() {
  return (
    <Titulo>
      <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/profilePictures%2F-KrCS05TVTcFssvGq1Sh%2F96-11.png?alt=media&token=eeeebbc4-7a5d-4daa-93f8-370e778adc1d"></img>
        <div>
          <p>&nbsp; Roberto Legorreta Murillo</p>
          <p>
            &nbsp; <span>Multiples Proyectos</span>
          </p>
        </div>
      </div>
      <p id="dias">1651 Días</p>
    </Titulo>
  );
}

const Imagen = styled.div`
  width: 100%;
  height: 335px;
  display: flex;
  box-sizing: border-box;
`;

function ImagenPublica() {
  return (
    <Imagen>
      <img src="https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png" />
    </Imagen>
  );
}

const Reaccion = styled.div`
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

function Reacciones(props) {
  return (
    <Reaccion>
      <p>&nbsp; {props.counter}</p>
      <p>&nbsp; Me Gusta</p>
    </Reaccion>
  );
}

const Descrip = styled.div`
  p span {
    font-size: 15px;
    font-weight: bold;
  }

  text-align: justify;
  padding: 8px;
  /* margin-top:-25px;*/
`;

function Descripcion() {
  return (
    <Descrip>
      <p>
        <span>Roberto Legorreta</span>&nbsp; "Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."
      </p>
    </Descrip>
  );
}

const Comentario = styled.div`
  p span {
    font-size: 15px;
    font-weight: bold;
  }

  padding: 8px;
  border-bottom: 1px solid lightgray;
  /* margin-top:-25px;*/
`;

function Comentarios(props) {
  const comments = props.postComments.map((element) => (
    <p>
      <span>undefined</span> {element}
    </p>
  ));

  return (
    <Comentario>
      <p>
        <span>undefined</span> Primer Comentario :)
      </p>
      {comments}
    </Comentario>
  );
}

const Comenta = styled.div`
  display: flex;
  > div {
    display: flex;
    align-items: flex-start;
  }
  button {
    margin-right: 10px;
  }
  input {
    width: 100%;
    height: 30px;
    border: none;
    font-size: 15px;
  }
  input:focus {
    outline: none;
  }
`;

function Comentar(props) {
  return (
    <Comenta>
      <button
        onClick={() => {
          props.setCounter(props.counter + 1);
        }}
      >
        LV
      </button>
      <input
        type="text"
        value={props.comment}
        onKeyPress={(evt) => {
          if (evt.key == "Enter") {
            props.setPostComments([...props.postComments, props.comment]);

            props.setComment("");
          }
        }}
        onChange={(e) => {
          props.setComment(e.target.value);
        }}
        placeholder="Añade tu comentario"
      ></input>
    </Comenta>
  );
}

function Publish() {
  const [counter, setCounter] = useState(0);
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState([]);

  return (
    <Publicaciones>
      <TituloPublico></TituloPublico>
      <ImagenPublica></ImagenPublica>
      <Reacciones counter={counter} setCounter={setCounter}></Reacciones>
      <Descripcion></Descripcion>
      <Comentarios
        comment={comment}
        setComment={setComment}
        postComments={postComments}
        setPostComments={setPostComments}
      ></Comentarios>
      <Comentar
        counter={counter}
        setCounter={setCounter}
        comment={comment}
        setComment={setComment}
        postComments={postComments}
        setPostComments={setPostComments}
      ></Comentar>
    </Publicaciones>
  );
}
