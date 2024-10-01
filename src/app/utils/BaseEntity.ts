export class BaseEntity {
  private error: string | null = null;

  getError() {
    return this.error;
  }

  setError(error: string | null) {
    this.error = error;
  }
}
