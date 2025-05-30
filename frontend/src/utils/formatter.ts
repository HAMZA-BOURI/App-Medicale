/**
 * Format a number as currency
 * @param value - The value to format
 * @param currency - The currency code (default: USD)
 * @param compact - Use compact notation for large numbers (default: false)
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number | null | undefined, 
  currency: string = 'USD', 
  compact: boolean = false
): string => {
  if (value === null || value === undefined) return '-';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    notation: compact ? 'compact' : 'standard',
    compactDisplay: 'short'
  }).format(value);
};

/**
 * Format a percentage value
 * @param value - The value to format (0.1 for 10%)
 * @param fractionDigits - Number of decimal places (default: 1)
 * @returns Formatted percentage string
 */
export const formatPercentage = (
  value: number | null | undefined, 
  fractionDigits: number = 1
): string => {
  if (value === null || value === undefined) return '-';
  
  // If value is already in percentage form (e.g. 10 instead of 0.1)
  if (value > 1) {
    value = value / 100;
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  }).format(value);
};

/**
 * Format a date string or timestamp
 * @param date - The date to format
 * @param format - The format type: 'short', 'medium', 'long', 'relative' (default: 'short')
 * @returns Formatted date string
 */
export const formatDate = (
  date: string | number | Date | null | undefined, 
  format: 'short' | 'medium' | 'long' | 'relative' = 'short'
): string => {
  if (!date) return '-';
  
  const dateObj = new Date(date);
  
  if (isNaN(dateObj.getTime())) return 'Invalid date';
  
  if (format === 'relative') {
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    const now = new Date();
    const diffInSeconds = Math.floor((dateObj.getTime() - now.getTime()) / 1000);
    
    if (diffInSeconds < -86400 * 30) {
      // More than a month ago
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).format(dateObj);
    }
    
    if (diffInSeconds < -86400) {
      // Days ago
      return rtf.format(Math.ceil(diffInSeconds / 86400), 'day');
    }
    
    if (diffInSeconds < -3600) {
      // Hours ago
      return rtf.format(Math.ceil(diffInSeconds / 3600), 'hour');
    }
    
    if (diffInSeconds < -60) {
      // Minutes ago
      return rtf.format(Math.ceil(diffInSeconds / 60), 'minute');
    }
    
    // Just now
    return 'just now';
  }
  
  const options: Record<string, Intl.DateTimeFormatOptions> = {
    short: {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    },
    medium: {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    },
    long: {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }
  };
  
  return new Intl.DateTimeFormat('en-US', options[format] || options.short).format(dateObj);
};
