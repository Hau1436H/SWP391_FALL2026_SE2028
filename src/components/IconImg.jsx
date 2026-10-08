import React, { useState } from 'react';

/**
 * Component hiển thị icon dưới dạng thẻ <img> theo yêu cầu.
 * Có hỗ trợ placeholder chấm tròn tượng trưng nếu file ảnh chưa có hoặc load lỗi.
 * Bạn có thể dễ dàng thay đổi đường dẫn ảnh vào prop `src`.
 */
export default function IconImg({
  src,
  alt = 'icon',
  className = 'w-5 h-5',
  containerClassName = '',
  dotColor = 'bg-slate-400',
  showDotPlaceholder = false, // nếu true thì ưu tiên hiển thị chấm tròn tượng trưng
}) {
  const [hasError, setHasError] = useState(!src);

  // Nếu người dùng muốn dùng chấm tròn tượng trưng hoặc không có src / load lỗi
  if (showDotPlaceholder || !src || hasError) {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${containerClassName || className}`}
        title={alt}
      >
        <span className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain shrink-0`}
      onError={() => setHasError(true)}
    />
  );
}
