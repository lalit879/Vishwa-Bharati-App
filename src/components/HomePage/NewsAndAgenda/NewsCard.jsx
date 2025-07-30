
const NewsCard = ({ image, title, description, date }) => {
  return (
    <div className="flex items-start gap-4 py-4 border-b">
      <img src={image} alt={title} className="w-28 h-20 object-cover rounded-md" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mb-2">{description}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{date}</span>
          <span className="text-lg font-bold text-gray-600">&#8594;</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
