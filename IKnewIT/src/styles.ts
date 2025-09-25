export const styles: { [key: string]: string } = {
  // GLOBAL STYLES
  main: "flex flex-col items-center bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-lg p-8 h-screen w-screen overflow-hidden relative",  
  // ADMIN STYLES
  adminTools: "flex flex-col items-center bg-white rounded-lg shadow-lg p-8 m-auto w-auto",  
  container: "flex flex-col items-center p-2 h-screen bg-blue-200",
  header: "text-center text-white p-2 text-3xl font-bold",
  footer: "mt-auto flex justify-center gap-4 z-10 mb-4",
  text: "text-lg mb-4 text-center",
  textspan: "text-lg mb-4 semibold",
  paragraph: "rounded p-2 transition duration-300 ease-in focus:bg-blue-200 focus:border-blue-500 focus:outline-none",  
  button: "bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:bg-blue-200 shadow-lg hover:bg-blue-600 active:scale-95 transition transform duration-100",
  adminButtons: "mt-auto flex justify-center  gap-4 mb-40 z-100",

  // GAME STYLES
  gamesMain: "h-screen flex justify-center items-center grid grid-cols-4 gap-4 p-4",
  gamesIcons: "relative bottom-50 right-10  scale-250",
  gamesHeader: "text-2xl font-bold mb-4 col-span-4 text-center",
  gamesParagraph: "text-center mb-4 col-span-4",
  section: "bg-white p-4 rounded-xl shadow-md flex items-center justify-center h-100 w-75",

  // LOGIN STYLES
  input: "mb-4 p-2 border text-2xl border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-64",
};

