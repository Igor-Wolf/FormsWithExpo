import { useState } from "react";
import { MainComponent } from "../../components/MainComponent";
import { Formulario } from "../../components/Formulario";

export default function Home() {
  const [visible, setVisible] = useState(true);

  const HandlePress = () => {
    setVisible(!visible);
    
  };

  return (
    <>
      {visible ? (
        <MainComponent showed={HandlePress} />
      ) : (
        <Formulario showed={HandlePress}></Formulario>
      )}
    </>
  );
}
