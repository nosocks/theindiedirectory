export default ({ avatarUrl = '', fullName = '', tags = [] }) => (
  <div
    className={`rounded-lg bg-white flex flex-col items-center
      px-6 py-12 select-none cursor-pointer hover:shadow-lg
      transition-all duration-500 ease-in-out`}
  >
    {avatarUrl ? (
      <img
        className="inline-block h-14 w-14 rounded-full"
        src={avatarUrl}
        alt=""
      />
    ) : (
      <svg
        className="h-full w-full text-carbon-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )}
    <h1 className="mt-4 font-black">{fullName}</h1>
    <p className="text-bleu-500 text-xs max-w-[15ch] text-center font-bold">
      {tags.join(', ')}
    </p>
  </div>
)
