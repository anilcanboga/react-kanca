import { useCallback, useEffect, useRef, useState } from 'react';

export const useDrop = ({ onDrop, onDragEnter, onDragLeave, onDragOver }) => {
  const [isOver, setIsOver] = useState(false);
  const dropRef = useRef(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsOver(true);
    if (onDragOver) onDragOver(e);
  }, [onDragOver]);

  const handleDragLeave = useCallback((e) => {
    setIsOver(false);
    if (onDragLeave) onDragLeave(e);
  }, [onDragLeave]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsOver(false);
    if (onDrop) onDrop(e.dataTransfer?.files || null, e);
  }, [onDrop]);

  const handleDragEnter = useCallback((e) => {
    if (onDragEnter) onDragEnter(e);
  }, [onDragEnter]);

  useEffect(() => {
    const node = dropRef.current;
    if (!node) return;

    node.addEventListener('dragover', handleDragOver);
    node.addEventListener('dragleave', handleDragLeave);
    node.addEventListener('drop', handleDrop);
    node.addEventListener('dragenter', handleDragEnter);

    return () => {
      node.removeEventListener('dragover', handleDragOver);
      node.removeEventListener('dragleave', handleDragLeave);
      node.removeEventListener('drop', handleDrop);
      node.removeEventListener('dragenter', handleDragEnter);
    };
  }, [handleDragOver, handleDragLeave, handleDrop, handleDragEnter]);

  return { dropRef, isOver };
}
