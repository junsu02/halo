import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

interface LoginProps {
  onLogin: (user: any) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [error, setError] = useState<string>('');

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      onLogin(result.user);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>로그인</h1>
      <p>스타트업 프로토타입 빌더에 로그인하세요.</p>
      <button onClick={handleGoogleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Google로 로그인
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>팝업이 차단되면 브라우저 설정에서 팝업을 허용하세요.</p>
    </div>
  );
};

export default Login;