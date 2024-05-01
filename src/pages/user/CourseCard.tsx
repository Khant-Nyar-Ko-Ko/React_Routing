interface CourseCardProps {
  image: string;
  title: string;
  description: string;
}

const CourseCard = ({ image, title, description }: CourseCardProps) => {
  return (
    <div className="w-[250px] h-[250px] bg-slate-300 shadow p-4 flex flex-col justify-between">
      <div>
        <img src={image} alt={title} className="w-full h-auto mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Details</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Buy</button>
      </div>
    </div>
  );
};

export default CourseCard;
