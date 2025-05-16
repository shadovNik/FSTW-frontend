import { useEffect, useState } from "react";

export default function ExperienceFormContent({ content }) {
  const [experience, setExperience] = useState(content ?? '');

  useEffect(() => {
    setExperience(content ?? '');
  }, [content]);

  const handleChange = (e) => {
    setExperience(e.target.value);
  };

  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Опыт</p>
        <div className="partContent CR">
          <textarea
            className="partContentInput textArea"
            id="experience"
            placeholder="Напишите ваш опыт работы"
            name="experience"
            wrap="soft"
            value={experience}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
