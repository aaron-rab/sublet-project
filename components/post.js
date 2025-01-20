export default function Post({ postData: { title, content }}) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl p-4 mb-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-">{content}</p>
    </div>
  );
}
