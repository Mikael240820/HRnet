import { useEffect, useRef } from 'react';

export function Toast({
  title,
  description,
  open = false,
  onClose,
  duration = 5000
}) {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const timer = setTimeout(() => {
      onCloseRef.current?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, open]);

  if (!open) {
    return;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm">
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-leaf-200 bg-white p-4 shadow-lg"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            {title ? (
              <p className="text-sm font-semibold text-leaf-900">{title}</p>
            ) : null}
            {description ? (
              <p className="mt-1 text-sm text-leaf-700">{description}</p>
            ) : null}
          </div>
          <button
            type="button"
            className="rounded-md border border-leaf-200 px-2 py-1 text-xs font-semibold text-leaf-700 hover:bg-leaf-100"
            onClick={onClose}
            aria-label="Close notification"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
