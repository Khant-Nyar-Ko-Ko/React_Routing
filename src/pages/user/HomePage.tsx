import CourseCard from "./CourseCard";

const HomePage = () => {
  return (
    <div className=" w-full bg-slate-200 flex flex-col items-center">
      <div className=" bg-slate-300 w-3/4 px-10 h-[300px] m-10 shadow">
        This is Hero Section
      </div>
      <div className=" flex justify-center items-center gap-10 mb-10">
        <CourseCard
          image="course_image_url"
          title="Course Title"
          description="Short description of the course."
        />

        <div className=" w-[250px] h-[250px] bg-slate-300 shadow">Hello</div>
        <div className=" w-[250px] h-[250px] bg-slate-300 shadow">Hello</div>
        <div className=" w-[250px] h-[250px] bg-slate-300 shadow">Hello</div>
      </div>
      <div className=" flex justify-center items-center gap-10 mb-10">
        <div className=" w-[250px] h-[250px] bg-slate-300 shadow">Hello</div>
        <div className=" w-[250px] h-[250px] bg-slate-300 shadow">Hello</div>
        <div className=" w-[250px] h-[250px] bg-slate-300 shadow">Hello</div>
        <div className=" w-[250px] h-[250px] bg-slate-300 shadow">Hello</div>
      </div>
    </div>
  );
};

export default HomePage;
