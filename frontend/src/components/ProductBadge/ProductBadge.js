import React from 'react';

export default function ProductBadge({ type }) {
  let badgeText;
  let badgeClass;

  switch (type) {
    case 'sale':
      badgeText = 'SALE';
      badgeClass = 'badge-sale';
      break;
    case 'new':
      badgeText = 'NEW';
      badgeClass = 'badge-new';
      break;
    case 'hot':
      badgeText = 'HOT';
      badgeClass = 'badge-hot';
      break;
    default:
      return null;
  }

  return (
    <span className={`product-badge ${badgeClass}`}>
      {badgeText}
    </span>
  );
}
