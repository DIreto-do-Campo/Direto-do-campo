import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <div className="max-w-[1440px] flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Vem com a gente, produtor!</h2>

        {/* Nome completo */}
        <div className="mb-4">
          <label className="block text-gray-700">Nome completo</label>
          <div className="flex items-center border rounded-md p-2 bg-gray-50">
            <FaUser className="text-gray-400 m-2" />
            <input type="text" placeholder="Nome completo" className="w-full focus:outline-none bg-transparent text-black" />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <div className="flex items-center border rounded-md p-2 bg-gray-50">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input type="email" placeholder="Email" className="w-full focus:outline-none bg-transparent text-black" />
          </div>
        </div>

        {/* Senha */}
        <div className="mb-4">
          <label className="block text-gray-700">Senha</label>
          <div className="flex items-center border rounded-md p-2 bg-gray-50">
            <FaLock className="text-gray-400 mr-2" />
            <input type="password" placeholder="Senha" className="w-full focus:outline-none bg-transparent text-black" />
          </div>
        </div>

        {/* Confirmar senha */}
        <div className="mb-4">
          <label className="block text-gray-700">Confirmar senha</label>
          <div className="flex items-center border rounded-md p-2 bg-gray-50">
            <FaLock className="text-gray-400 mr-2" />
            <input type="password" placeholder="Confirmar senha" className="w-full focus:outline-none bg-transparent text-black" />
          </div>
        </div>

        {/* Checkbox e botões */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-600">Concordo com os termos de uso</label>
        </div>

        <button className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition duration-200 mb-4">
          Registrar
        </button>

        <p className="text-center text-gray-600 mb-4">
          Já possui conta? <a href="#" className="text-blue-600 hover:underline">Faça login</a>
        </p>

        <div className="flex items-center justify-center mb-4">
          <hr className="w-1/4 border-gray-400" />
          <span className="mx-2 text-gray-600">ou</span>
          <hr className="w-1/4 border-gray-400" />
        </div>

        <button className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-200">
          Login com Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
