export default ({ loggedIn = false, userData = {} }) => (
  <div className="flex mb-10">
    <div className="flex flex-col max-w-3xl w-full">
      {loggedIn && !!userData.firstName && <p>{userData.firstName}</p>}
      <input
        className={`w-full outline-transparent text-5xl font-bold peer pb-1
          placeholder:text-zinc-900 text-zinc-900`}
        placeholder="¿Qué estas buscando hoy?"
      />
      <span
        className={`peer-hover:opacity-30 peer-focus:opacity-70 opacity-0
        bg-blue-500 w-full h-0.5 transition-all duration-200 ease-in-out
        rounded-sm`}
      />
    </div>
    <div className="ml-auto">
      {loggedIn ? <h1>logged</h1> : <button type="button">login</button>}
    </div>
  </div>
)
