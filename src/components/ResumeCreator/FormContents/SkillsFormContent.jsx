import { useEffect, useState } from "react";

export default function SkillsFormContent({ content }) {
  const [skills, setSkills] = useState(content ?? '');

  useEffect(() => {
    setSkills(content ?? '');
  }, [content]);

  const handleChange = (e) => {
    setSkills(e.target.value);
  };

  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Навыки</p>
        <div className="partContent CR">
          <textarea
            className="partContentInput textArea"
            id="skills"
            placeholder="Soft|Hard skills"
            name="skills"
            wrap="soft"
            value={skills}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
