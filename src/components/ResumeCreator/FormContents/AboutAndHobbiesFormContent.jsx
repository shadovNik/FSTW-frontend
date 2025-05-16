import { useEffect, useState } from "react";

export default function AboutAndHobbiesFormContent({ aboutContent, hobbiesContent }) {
  const [about, setAbout] = useState(aboutContent ?? '');
  const [hobbies, setHobbies] = useState(hobbiesContent ?? '');

  useEffect(() => {
    setAbout(aboutContent ?? '');
    setHobbies(hobbiesContent ?? '');
  }, [aboutContent, hobbiesContent]);

  const handleChangeAbout = (e) => {
    setAbout(e.target.value);
  };

  const handleChangeHobbies = (e) => {
    setHobbies(e.target.value);
  };

  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Дополнительно</p>
        <div className="partContent CR">
          <textarea
            className="partContentInput textArea"
            id="about"
            name="about"
            placeholder="О себе"
            wrap="soft"
            value={about}
            onChange={handleChangeAbout}
          />
          <textarea
            className="partContentInput textArea"
            id="hobbies"
            name="hobbies"
            placeholder="Хобби"
            wrap="soft"
            value={hobbies}
            onChange={handleChangeHobbies}
          />
        </div>
      </div>
    </>
  );
}
