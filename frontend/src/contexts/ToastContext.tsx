import React, { createContext, useContext, useState } from 'react';

type Toast = { id: string; message: string; type?: 'info' | 'success' | 'error' };

const ToastContext = createContext({ toasts: [] as Toast[], push: (t: Omit<Toast, 'id'>) => {}, remove: (id: string) => {} });

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = (t: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts(s => [...s, { id, ...t }]);
    setTimeout(() => remove(id), 4000);
  };
  const remove = (id: string) => setToasts(s => s.filter(t => t.id !== id));

  return (
    <ToastContext.Provider value={{ toasts, push, remove }}>
      {children}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
        {toasts.map(t => (
          <div key={t.id} className="bg-white p-3 rounded shadow">
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
