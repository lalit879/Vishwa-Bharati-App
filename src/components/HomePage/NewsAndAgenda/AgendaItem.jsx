
const AgendaItem = ({ image, date, title }) => {
  return (
    <div className="flex items-start gap-4 py-4">
      <img src={image} alt={title} className="w-8 h-8 rounded-md object-cover" />
      <div className="flex-1">
        <p className="text-xs text-gray-400">{date}</p>
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
      </div>
      <span className="text-lg font-bold text-gray-600 cursor-pointer">&#8594;</span>
    </div>
  );
};

export default AgendaItem;
