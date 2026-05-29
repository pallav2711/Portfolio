import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const TOPIC_OPTIONS = [
  { value: 'Full-Stack Web Development', label: 'Full-Stack Web Development' },
  { value: 'AI Feature Integration', label: 'AI Feature Integration' },
  { value: 'API Design & Optimization', label: 'API Design & Optimization' },
  { value: 'QA & Testing', label: 'QA & Testing' },
  { value: 'MVP Build', label: 'MVP Build' },
  { value: 'Something Else', label: 'Something Else' },
];

export default function TopicSelect({ id, value, onChange, placeholder = 'Select a topic' }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const selectedLabel =
    TOPIC_OPTIONS.find((opt) => opt.value === value)?.label || placeholder;

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setOpen(false);
  };

  return (
    <div className={`custom-select ${open ? 'custom-select--open' : ''}`} ref={rootRef}>
      <button
        type="button"
        id={id}
        className={`custom-select__trigger ${!value ? 'custom-select__trigger--placeholder' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selectedLabel}</span>
        <ChevronDown size={16} className="custom-select__chevron" aria-hidden />
      </button>

      {open && (
        <ul className="custom-select__menu" role="listbox" aria-labelledby={id}>
          {TOPIC_OPTIONS.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              className={`custom-select__option ${value === opt.value ? 'custom-select__option--selected' : ''}`}
              onClick={() => handleSelect(opt.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(opt.value);
                }
              }}
              tabIndex={0}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
