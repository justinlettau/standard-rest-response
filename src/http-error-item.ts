/**
 * Error items.
 */
export interface HttpErrorItem {
  /**
   * Error code.
   */
  code?: string;

  /**
   * Associated field.
   */
  field?: string;

  /**
   * Error message.
   */
  message: string;
}
