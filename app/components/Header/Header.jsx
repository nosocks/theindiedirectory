import Button from '../Button'

export default ({ loggedIn = false, userData = {} }) => (
  <div className="flex mb-10">
    <div className="flex flex-col max-w-3xl w-full">
      <p className="font-extrabold text-xs sm:text-xl text-carbon-500">
        Hola{!!userData.firstName && userData.firstName} 👋,
      </p>
      <input
        className={`w-full outline-none text-sm sm:text-2xl md:text-4xl xl:text-5xl font-extrabold peer pb-1
          placeholder:text-carbon-900 text-carbon-900 bg-transparent`}
        placeholder="¿Qué estas buscando hoy?"
      />
      <span
        className={`peer-hover:opacity-30 peer-focus:opacity-70 opacity-0
          bg-bleu-500 w-full h-0.5 transition-all duration-200 ease-in-out
          rounded-sm`}
      />
    </div>
    <div className="ml-auto pl-4">
      {loggedIn ? <h1>logged</h1> : <Button>login</Button>}
    </div>
  </div>
)
