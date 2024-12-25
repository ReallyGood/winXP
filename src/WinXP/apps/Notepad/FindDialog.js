import React, { useState, useRef, useEffect, useCallback } from 'react';
import DialogInner from './DialogInner';

function FindDialog({
  findSettings,
  findNext,
  updateSettings,
  onClose,
  isFocus,
}) {
  return (
    <DialogInner onKeyDown={e => e.key === 'Escape' && onClose()}>
      Good luck!
    </DialogInner>
  );
}

export default FindDialog;
