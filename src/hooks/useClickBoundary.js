import { useEffect, useRef, useCallback } from 'react';

export default function useClickBoundary(eventCallback) {
  const nodeRef = useRef(null);
  const handleClick = useCallback(
    event => {
      if (!nodeRef.current.contains(event.target)) {
        eventCallback(event);
      }
    },
    [eventCallback],
  );
  useEffect(() => {
    document.addEventListener('click', handleClick, false);
    return () => document.removeEventListener('click', handleClick, false);
  }, [handleClick]);
  return nodeRef;
}
