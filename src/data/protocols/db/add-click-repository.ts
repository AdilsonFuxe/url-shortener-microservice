export interface AddClickRepository {
  addClick: (key: string) => Promise<void>;
}
