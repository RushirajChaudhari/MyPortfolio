import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        {/* <TestimonialCard
          name={"Rushiraj"}
          feedback={"You are so good."}
        /> */}

        <TestimonialCard
          name={"Kamal Shah"}
          feedback={
            "I couldn't have asked for a better Student than Rushiraj Chaudhari at my institute.He Completed Learning Python development and MERN stack with my Guidance. Rushiraj's Learning approach is top-notch. The hands-on projects and practical assignments make him real exposure from the invaluable real-world."
          }
        />

        <TestimonialCard
          name={"Mandar Gotad"}
          feedback={"Congratulations on completing your internship as a Python developer! Your performance throughout the internship was exceptional. Your dedication, enthusiasm, and willingness to learn stood out, and you consistently delivered high-quality code. Your problem-solving skills and adaptability to new challenges were impressive. "}       
          />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;