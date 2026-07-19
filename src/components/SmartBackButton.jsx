// src/components/SmartBackButton.jsx
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

function SmartBackButton() {
  const navigate = useNavigate();
  
  // Detect if the user landed directly on this page (no history stack)
  const isDirectVisit = !window.history.state || window.history.state.idx === 0;

  const handleBackAction = () => {
    if (isDirectVisit) {
      navigate('/'); // Fallback to homepage
    } else {
      navigate(-1);  // Pop history stack normally
    }
  };

  return (
    <button 
      onClick={handleBackAction} 
      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-yale-blue transition-colors focus:outline-none cursor-pointer"
    >
      {isDirectVisit ? (
        <>
          <FaHome className="text-sm" /> <span>Home</span>
        </>
      ) : (
        <>
          <FaArrowLeft className="text-xs" /> <span>Back</span>
        </>
      )}
    </button>
  );
}

export default SmartBackButton;