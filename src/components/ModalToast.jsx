import { useEffect, useId, useRef, useState } from 'react';

export function ModalToast({
  title,
  description,
  children,
  triggerLabel = 'Open',
  open = false,
  onClose,
  duration = 5000
}) {
  const isModal = Boolean(children);
  const [modalOpen, setModalOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (isModal || !open) {
      return;
    }

    const timer = setTimeout(() => {
      onCloseRef.current?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, isModal, open]);

  useEffect(() => {
    if (!isModal || !modalOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModal, modalOpen]);

  if (isModal) {
    const triggerText = triggerLabel || title || 'Open';

    return (
      <div className="inline-flex">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-leaf-200 bg-white px-3 py-2 text-sm font-semibold text-leaf-900 hover:bg-leaf-100"
          onClick={() => setModalOpen(true)}
        >
          {triggerText}
        </button>

        {modalOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <button
              type="button"
              className="absolute inset-0 bg-leaf-900/20 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? titleId : undefined}
              aria-describedby={description ? descriptionId : undefined}
              className="relative w-full max-w-lg rounded-lg border border-leaf-200 bg-white p-5 shadow-xl"
            >
              {title || description ? (
                <div className="mb-4">
                  {title ? (
                    <h3 id={titleId} className="text-lg font-semibold text-leaf-900">
                      {title}
                    </h3>
                  ) : null}
                  {description ? (
                    <p id={descriptionId} className="mt-1 text-sm text-leaf-700">
                      {description}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <div className="text-sm text-leaf-700">{children}</div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-leaf-700 px-4 py-2 text-sm font-semibold text-white"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

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
